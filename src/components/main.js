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


export default function Main(){
    const sp500data = useSelector(state => state.sp500data);
    const dispatch = useDispatch();

    // eslint-disable-next-line
    useEffect(() => {dispatch(getSp500DataThunk(1926,2019))}, []);

    return(
        <div className="home_page">
            <div className="header">S&amp;P 500 Total Returns by Year</div>
            <div className="options card">
                <p className="cardTitle">Years Avaliable</p>
                <div className="yearSelector">
                    <Range min={1926} max={2019} defaultValue={[1926, 2019]} handle={handle} onAfterChange={(value) => {
                        dispatch(getSp500DataThunk(value[0],value[1]));
                    }} />
                </div>
                <div className="bounds">
                    <div className="leftText">1926</div>
                    <div className="rightText">2019</div>
                </div>
            </div>
            {
                (sp500data && sp500data.length > 0)?
                <div  className="tableMain card">
                    <ChartItem key={0} year={"Year"} totalReturn={"Total Return"} cumulativeReturns={"Cumulative Returns"}/>
                    {
                        sp500data.map(data => (
                            <ChartItem key={data.year} year={data.year} totalReturn={data.totalReturn} cumulativeReturns={data.cumulativeReturn}/>
                        ))
                    }
                </div>
                :
                <>
                    <p>Data not found.</p>
                </>
            }
        </div>
    )
}