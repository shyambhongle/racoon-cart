import isEmpty from './../validation/is-empty';
import { LOGIN } from './../action/actionType.js';

const initialState = {
  isAuthenticated: false,
  user: {}
};

const auth=(state = initialState, action)=>{
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
}

export default auth;
