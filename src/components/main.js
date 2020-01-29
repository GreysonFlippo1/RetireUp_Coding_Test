import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getSp500DataThunk } from './store/sp500data';
import ChartItem from './chartItem';

import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

const wrapperStyle = { width: 400 };

export default function Main(){
    const sp500data = useSelector(state => state.sp500data);
    const dispatch = useDispatch();

    // eslint-disable-next-line
    useEffect(() => {dispatch(getSp500DataThunk(1926,2019))}, []);

    return(
        <div className="home_page">
            <p>S&amp;P 500 Data</p>
            <div style={wrapperStyle}>
                <Range className="yearSelector" min={1926} max={2019} defaultValue={[1926, 2019]} handle={handle} onAfterChange={(value) => {
                    dispatch(getSp500DataThunk(value[0],value[1]));
                }} />
            </div>
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