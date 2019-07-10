import {combineReducers} from 'redux';
import flowreducer from './flowReducer.js';
import authreducer from './authReducer.js';
import errorReducer from './errorReducer.js';
import productReducer from './productReducer.js';


export default  combineReducers({
  flow:flowreducer,
  auth:authreducer,
  error:errorReducer,
  products:productReducer
});
