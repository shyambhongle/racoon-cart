import React from 'react';
import styles from './deleteproduct.module.css';
import SearchBar from './../../../searchbar/searchbar.js';
import Search from './../../../search/search.js';
import {connect} from 'react-redux'
import Loader from './../../../loader/loader.js';

const DeleteProduct =(props)=>{
  return(
    <div className={styles.DeleteProduct}>
      {props.admin.loading && <Loader/>}
      <div className={styles.SearchHeader}>
        <p>Search Product to be deleted</p>
      <SearchBar  test={true}/>
      </div>
      <div className={styles.Section}>
      <Search external={"Delete"}/>
      </div>
    </div>
  )
}




const mapStateToProps=state=>({
  admin:state.admin
})

export default connect(mapStateToProps)(DeleteProduct);
