import {SHOW_CART,SHOW_AUTH,CLOSE_FLOW,CITY_SELECT} from './../action/actionType.js';



const initialState={
    showCart:false,
    showAuth:false,
    city:"Mumbai"
}

const flow=(state=initialState,action)=>{
  switch (action.type) {
    case CLOSE_FLOW:
    return{
      ...state,
      showCart:false,
      showAuth:false
    }
    case SHOW_CART:
    return{
      ...state,
      showCart:true,
      showAuth:false
    }
    case SHOW_AUTH:
      return{
        ...state,
        showAuth:true,
        showCart:false
      }
    case CITY_SELECT:
      return{
        ...state,
        city:action.payload
      }
    default:
      return state;
  }
}


export default flow;
