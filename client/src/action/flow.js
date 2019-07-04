import {SHOW_CART,SHOW_AUTH,CLOSE_FLOW,CLEAR_ERRORS} from './actionType.js';





export const showCart=()=>{
  return dispatch=>{
      dispatch({type:CLEAR_ERRORS})
      dispatch({type:SHOW_CART})
  }
}

export const showAuth=()=>{
  return dispatch=>{
      dispatch({type:CLEAR_ERRORS})
      dispatch({type:SHOW_AUTH})
  }
}


export const closeFlow=()=>{
  return dispatch=>{
    dispatch({type:CLEAR_ERRORS})
    dispatch({type:CLOSE_FLOW})
  }
}
