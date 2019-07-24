import { GET_ERRORS,LOGIN,CLOSE_FLOW,CLEAR_ERRORS,ALERT,PLACE_ORDER,ADMIN,LOGIN_CART,CLEAR_CART} from './actionType';
import axios from 'axios';
import setAuthToken from './../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import store from './../store/store.js';


// Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post('/auth/register', userData)
    .then(res =>{
      let { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      let decoded = jwt_decode(token);
      let details={
        order:res.data.order,
        cart:res.data.cart
      }
      dispatch({type:LOGIN_CART,payload:res.data.cart})
      dispatch(setCurrentUser(decoded,details));
      dispatch({type:PLACE_ORDER,payload:{orders:res.data.order}});
      dispatch({type:ALERT,payload:`Loged in as ${decoded.email}`})
      if (decoded.pass!=="user") {
        dispatch({type:ADMIN})
      }
      store.dispatch({type:CLOSE_FLOW})
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Login - Get User Token
export const loginUser = userData => dispatch => {
  axios
    .post('/auth/login', userData)
    .then(res => {
      let { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      let decoded = jwt_decode(token);
      let details={
        order:res.data.order,
        cart:res.data.cart
      }
      dispatch({type:LOGIN_CART,payload:res.data.cart})
      dispatch(setCurrentUser(decoded,details));
      dispatch({type:PLACE_ORDER,payload:{orders:res.data.order}});
      dispatch({type:ALERT,payload:`Loged in as ${decoded.email}`})
      if (res.data.pass===false) {
        dispatch({type:ADMIN})
      }
      store.dispatch({type:CLOSE_FLOW})
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Set logged in user
export const setCurrentUser = (decoded,details) => {
  return {
    type: LOGIN,
    payload: decoded,
    details:{
      ...details
    }
  };
};

// Log user out
export const logoutUser = (history) => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  dispatch({type:CLEAR_CART});
  dispatch({type:ALERT,payload:`Succefully Loged out`})
  history.push('/')
};


export const clearErrors=()=>{
  return dispatch=>{
    dispatch({type:CLEAR_ERRORS})
  }
}
