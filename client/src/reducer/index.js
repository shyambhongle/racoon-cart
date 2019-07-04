import {combineReducers} from 'redux';
import flowreducer from './flowReducer.js';
import authreducer from './authReducer.js';
import errorReducer from './errorReducer.js';


export default  combineReducers({
  flow:flowreducer,
  auth:authreducer,
  error:errorReducer
});
