import {combineReducers} from 'redux';
import flowreducer from './flowReducer.js';
import authreducer from './authReducer.js';
import errorReducer from './errorReducer.js';
import productReducer from './productReducer.js';
import pastOrder from './pastReducer.js';
import inputSearch from './searchReducer.js';
import editProduct from './adminReducer.js';



export default  combineReducers({
  flow:flowreducer,
  auth:authreducer,
  error:errorReducer,
  products:productReducer,
  past:pastOrder,
  search:inputSearch,
  admin:editProduct,
});
