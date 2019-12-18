import axios from 'axios';
export const chart = data => {
  console.log("Ac",data)
  return dispatch => {
    return dispatch({ type: 'CHART', payload: data });
  };
};
export function fetch() {

  return function (dispatch){
    return axios.get('https://cors-anywhere.herokuapp.com/http://starlord.hackerearth.com/bankAccount').then(res => {
    // dispatch
      dispatch( {
        type: 'FETCH',
        payload:[...res.data]
      })
    })
  }
 }