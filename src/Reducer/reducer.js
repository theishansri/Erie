const initiState = {
  data: {}
};
const change = (state = initiState, action) => {
  switch (action.type) {
    case 'CHART':
      state.data = action.payload;
      console.log(state.data, 'DSD');
      return state;
    default:
      return state;
  }
};
export default change;
