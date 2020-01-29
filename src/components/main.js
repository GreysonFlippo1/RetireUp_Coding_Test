import React, { useEffect } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getSp500DataThunk } from './store/sp500data';

export default function Main(){
    const sp500data = useSelector(state => state.sp500data);
    const dispatch = useDispatch();

    // eslint-disable-next-line
    useEffect(() => {dispatch(getSp500DataThunk(0,100))}, []);

    return(
        <div className="home_page">
            <p>test text</p>
        </div>
    )
}