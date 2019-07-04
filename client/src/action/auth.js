import axios from 'axios';
import setAuthToken from './../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import store from './../store/store.js';

import { GET_ERRORS,LOGIN,CLOSE_FLOW,CLEAR_ERRORS} from './actionType';

// Register User
export const registerUser = (userData) => dispatch => {
  axios
    .post('/auth/register', userData)
    .then(res =>{
      let { token } = res.data;
      localStorage.setItem('jwtToken', token);
      setAuthToken(token);
      let decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
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
      dispatch(setCurrentUser(decoded));
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
export const setCurrentUser = decoded => {
  return {
    type: LOGIN,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem('jwtToken');
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};


export const clearErrors=()=>{
  return dispatch=>{
    dispatch({type:CLEAR_ERRORS})
  }
}
