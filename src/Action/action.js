import axios from 'axios';
export const chart = data => {
  return dispatch => {
    return dispatch({ type: 'CHART', payload: data });
  };
};
