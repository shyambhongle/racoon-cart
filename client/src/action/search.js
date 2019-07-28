import {INPUT_SEARCH,INPUT_CLICK,CLEAR_ITEM} from './actionType.js';
import axios from 'axios';





export const inputSearch=(words)=>{
  return dispatch=>{
    axios.post('/inputsearch',{words})
          .then(res=>{
            dispatch({type:CLEAR_ITEM})
            dispatch({type:INPUT_SEARCH,payload:res.data})
          })
  }
}


export const inputClick=(data,history,test)=>{
  return dispatch=>{
    dispatch({type:INPUT_CLICK,payload:data});

    test!==true && history.push('/search')
  };
}
