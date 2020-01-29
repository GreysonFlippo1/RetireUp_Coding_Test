import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getSp500DataThunk } from './store/sp500data';
import ChartItem from './chartItem';

export default function Main(){
    const sp500data = useSelector(state => state.sp500data);
    const dispatch = useDispatch();

    // eslint-disable-next-line
    useEffect(() => {dispatch(getSp500DataThunk(1926,2019))}, []);

    return(
        <div className="home_page">
            <p>S&amp;P 500 Data</p>
            {
                (sp500data && sp500data.length > 0)?
                <>
                    <ChartItem key={0} year={"Year"} totalReturn={"Total Return"} />
                    {
                        sp500data.map(data => (
                            <ChartItem key={data.year} year={data.year} totalReturn={data.totalReturn} />
                        ))
                    }
                </>
                :
                <>
                    <p>Data not found.</p>
                </>
            }
        </div>
    )
}