import isEmpty from './../validation/is-empty';
import { LOGIN,ADMIN} from './../action/actionType.js';

const initialState = {
  isAuthenticated: false,
  user: {},
  orders:[],
  cart:[],
  pass:true
};

const auth=(state = initialState, action)=>{
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        orders:action.details.order,
        cart:action.details.cart
      };
    case ADMIN:
    return {
      ...state,
      pass:true
    }
    default:
      return state;
  }
}

export default auth;
