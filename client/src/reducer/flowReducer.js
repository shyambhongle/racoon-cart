import {SHOW_CART,SHOW_AUTH,CLOSE_FLOW} from './../action/actionType.js';



const initialState={
    showCart:false,
    showAuth:false
}

const flow=(state=initialState,action)=>{
  switch (action.type) {
    case CLOSE_FLOW:
    return{
      showCart:false,
      showAuth:false
    }
    case SHOW_CART:
    return{
      showCart:true,
      showAuth:false
    }
    case SHOW_AUTH:
      return{
        showAuth:true,
        showCart:false
      }
    default:
      return state;
  }
}


export default flow;
