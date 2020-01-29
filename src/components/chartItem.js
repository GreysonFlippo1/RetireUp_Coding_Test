import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';

export default function ChartItem(props){
    return(
        <div className="table">
            <p>{props.year}</p>
            <p>{props.totalReturn}</p>
        </div>
    )
}