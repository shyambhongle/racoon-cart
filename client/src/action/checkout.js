import {PLACE_ORDER,CLEAR_CART,ALERT} from './actionType';
import axios from 'axios';


export const placeOrder=(body,history)=>{
  return dispatch=>{

    axios
        .post("/payment", body)
        .then(response => {
          dispatch({type:PLACE_ORDER,payload:response.data.update});
          dispatch({type:CLEAR_CART})
          dispatch({type:ALERT,payload:`Payment successful`})
          history.push('/pastorders')
        })
        .catch(error => {
          console.log("Payment Error: ", error);
          alert("Payment Error");
        });
  }
}
