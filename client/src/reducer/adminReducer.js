import {EDIT_SEARCH,CLEAR_ITEM,ADMIN_LOADING} from './../action/actionType.js';

const initialState={
  item:{},
  loading:false
}

const admin=(state=initialState,action)=>{
  switch (action.type) {
    case EDIT_SEARCH:
      return{
        ...state,
        item:action.payload
      }
      case ADMIN_LOADING:
        return{
          ...state,
          loading:action.payload
        }
      case  CLEAR_ITEM:{
        return{
          ...state,
          item:{}
        }
      }
    default:
    return state;
  }
}




export default admin;
