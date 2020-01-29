
const ALL_DATA = 'REPLACE ME!';
const GET_SP500DATA = "GET_SP500DATA";

export const getSp500Data = sp500data => ({
  sp500data,
  type: GET_SP500DATA
});


export const getSp500DataThunk = (lower,upper) => async dispatch => {
    dispatch(getSp500Data("REPLACE ME!"));
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