import {PLACE_ORDER} from './actionType';
import axios from 'axios';


export const placeOrder=(details,history)=>{
  return dispatch=>{
    axios.post('/placeorder',{details})
    .then((res)=>{
      dispatch({type:PLACE_ORDER,payload:res.data})
      history.push('/pastorders')
    })
  }
}
