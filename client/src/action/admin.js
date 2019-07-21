import {EDIT_SEARCH,ALERT,ADMIN_LOADING,CLEAR_SEARCH} from './actionType.js';
import axios from 'axios';


export const addProduct=(data)=>{
  return dispatch=>{
    dispatch({type:ADMIN_LOADING,payload:true});
    axios.post('/admin/addproduct',data)
          .then(res=>{
            dispatch({type:ALERT,payload:'Product added successfully.'})
            dispatch({type:ADMIN_LOADING,payload:false});
          })
  }
}


export const editSearch=(data)=>{
  return dispatch=>{
    dispatch({type:EDIT_SEARCH,payload:data})
  };
}

export const editProduct=(data,img)=>{
  return dispatch=>{
    dispatch({type:ADMIN_LOADING,payload:true});
    axios.post(`/admin/${img===null?'editproduct':'editproducts'}`,data)
          .then(res=>{
            dispatch({type:ALERT,payload:'Product updated successfully.'})
            dispatch({type:ADMIN_LOADING,payload:false});
          })
  }
}


export const deleteProduct=(data)=>{
  return dispatch=>{
    dispatch({type:ADMIN_LOADING,payload:true});
    axios.post('/admin/deleteproduct',data)
          .then(res=>{
            dispatch({type:CLEAR_SEARCH,payload:data._id});
            dispatch({type:ALERT,payload:'Product deleted.'})
            dispatch({type:ADMIN_LOADING,payload:false});
          })
  }
}
