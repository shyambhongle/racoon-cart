import {FETCH_PRODUCT} from './actionType';
import axios from 'axios';


export const fetchProduct=()=>{
  return dispatch=>{
    axios.get('/fetchProduct')
          .then(res=>dispatch({type:FETCH_PRODUCT,payload:res.data.allProducts}))
  }
}
