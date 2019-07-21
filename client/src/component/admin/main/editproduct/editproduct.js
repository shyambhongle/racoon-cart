import React from 'react';
import styles from './editproduct.module.css';
import Form from './../form/form.js';
import SearchBar from './../../../searchbar/searchbar.js';
import Search from './../../../search/search.js';
import {connect} from 'react-redux'
import Loader from './../../../loader/loader.js';

const EditProduct =(props)=>{
  return(
    <div className={styles.EditProduct}>
      {props.admin.loading && <Loader/>}
      <div className={styles.SearchHeader}>
        <p>Search Product to be edited</p>
      <SearchBar/>
      </div>
      <div className={styles.Section}>
      {Object.keys(props.admin.item).length===0?<Search external={"Edit"}/>:
      <Form sync={props.admin.item} title={`Edit product-${props.admin.item.title}`}/>}
      </div>
    </div>
  )
}




const mapStateToProps=state=>({
  admin:state.admin
})

export default connect(mapStateToProps)(EditProduct);
