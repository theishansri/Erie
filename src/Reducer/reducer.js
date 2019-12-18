const initiState = {
  data: [],
  loading:true
};
const change = (state = initiState, action) => {
  switch (action.type) {
    case 'CHART':
      console.log(state,action.payload)
      return {...state,
        data:[...action.payload]}
        ;
    case 'FETCH':

    let transaction = new Array(12).fill(0);
    for (let i = 0; i < action.payload.length; i++) {
      let x1 = new Date(action.payload[i]['Date']);
      x1 = x1.getMonth()
      let k1 = parseInt(
        !action.payload[i]['Deposit AMT'] ? 0 : action.payload[i]['Deposit AMT'].replace(/,/g, '')
      );
      let k2 = parseInt(
        !action.payload[i]['Withdrawal AMT'] ? 0 : action.payload[i]['Withdrawal AMT'].replace(/,/g, '')
      );
      let k3 = parseInt(action.payload[i]['Balance AMT'].replace(/,/g, ''));
      if(transaction[x1]===0){
        transaction[x1]={'de':k1,'wi':k2,'ba':k3}
      }
      else{
        transaction[x1]={'de':k1+transaction[x1]['de'],'wi':k2+transaction[x1]['wi']
      ,'ba':k3+transaction[x1]['ba']}
      }
      
    }

    return{...state,data:[...transaction],loading:false}
    default:
      return state;
  }
};
export default change;
