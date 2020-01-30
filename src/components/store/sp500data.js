

const ALL_DATA = require('./rawData.js');


const GET_SP500DATA = "GET_SP500DATA";

export const getSp500Data = sp500data => ({
  sp500data,
  type: GET_SP500DATA
});


export const getSp500DataThunk = (lower,upper) => async dispatch => {
    let returns = 0;
    let filteredData = ALL_DATA.filter(data => data.year >= lower && data.year <= upper);

    for(let i = filteredData.length-1; i >= 0; i--){
      returns += (Number(filteredData[i].totalReturn)*100);
      filteredData[i].cumulativeReturn = (returns/100).toFixed(2);
    }

    dispatch(getSp500Data(filteredData));
};


const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case GET_SP500DATA:
      return action.sp500data;
    default:
      return state;
  }
}