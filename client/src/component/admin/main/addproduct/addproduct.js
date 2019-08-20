import React from 'react';
import styles from './addproduct.module.css';
import Form from './../form/form.js';
import {connect} from 'react-redux';
import Loader from './../../../loader/loader';

const AddProduct =(props)=>{
  return(
    <div className={styles.AddProduct}>
      {props.loading && <Loader/>}
      <Form title={"Add new Product"}/>
    </div>
  )
}



const mapStateToProps=state=>({
  loading:state.admin.loading
})


export default connect(mapStateToProps)(AddProduct);
