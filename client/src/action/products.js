import {ADD_TO_CART,INC_ITEM,DIC_ITEM,REMOVE_ITEM} from './actionType';

export const addtocart=(item)=>{
  return dispatch=>{
    dispatch({type:ADD_TO_CART,payload:item})
  }
}


export const increment=(item)=>{
  return dispatch=>{
    dispatch({type:INC_ITEM,payload:item})
  }
}

export const decrement=(item)=>{
  return dispatch=>{
    dispatch({type:DIC_ITEM,payload:item})
  }
}

export const removeitem=(item)=>{
  return dispatch=>{
    dispatch({type:REMOVE_ITEM,payload:item})
  }
}
