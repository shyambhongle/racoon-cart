import {EDIT_SEARCH,CLEAR_ITEM,ADMIN_LOADING,GET_ADMIN} from './../action/actionType.js';

const initialState={
  item:{},
  loading:false,
  city:{},
  top:[],
  Orders:0
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
      case  CLEAR_ITEM:
        return{
          ...state,
          item:{}
        }
      case GET_ADMIN:
      console.log("reached");
      console.log(action.payload);
        return{
          ...state,
          city:action.payload.city,
          Orders:action.payload.Orders,
          top:action.payload.top
        }
    default:
    return state;
  }
}




export default admin;
