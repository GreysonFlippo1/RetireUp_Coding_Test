import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';

export default function ChartItem(props){
    return(
        <div className="table">
            <p>{props.year}</p>
            {
                (props.totalReturn < 0) ?
                <p className="redNumber">{props.totalReturn}</p>
                :
                <p>{props.totalReturn}</p>
            }
            {
                (props.cumulativeReturns < 0) ?
                <p className="redNumber">{props.cumulativeReturns}</p>
                :
                <p>{props.cumulativeReturns}</p>
            }
            
        </div>
    )
}