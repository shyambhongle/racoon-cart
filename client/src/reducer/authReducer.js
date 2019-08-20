import isEmpty from './../validation/is-empty';
import { LOGIN,ADMIN,PLACE_ORDER} from './../action/actionType.js';

const initialState = {
  isAuthenticated: false,
  user: {},
  orders:[],
  cart:[],
  pass:null
};

const auth=(state = initialState, action)=>{
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        orders:action.details.order!==undefined?action.details.order:[],
        cart:action.details.cart!==undefined?action.details.cart:[]
      };
    case ADMIN:
    return {
      ...state,
      pass:true
    }
    case PLACE_ORDER:
      return{
        ...state,
        orders:action.payload.orders
      }
    default:
      return state;
  }
}

export default auth;
