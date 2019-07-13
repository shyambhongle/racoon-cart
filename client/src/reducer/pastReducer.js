import {PLACE_ORDER} from './../action/actionType.js';


const initialState={
  pastOrder:[]
}

const pastOrder=(state=initialState,action)=>{
  switch (action.type) {
    case PLACE_ORDER:
      return{
        ...state,
        pastOrder:action.payload.orders
      }

    default:return state;
  }
}


export default pastOrder;
