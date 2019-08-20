import React from 'react';
import styles from './search.module.css';
import {connect} from 'react-redux';
import {addtocart,increment,decrement,removeitem} from './../../action/products.js';
import Product from './../products/product/product.js';
import {editSearch,deleteProduct} from './../../action/admin.js';
import PropTypes from 'prop-types';


const Search=(props)=>{
  let productStyles={
    margin:"2vh"
  }

  let  product=props.products.inputSearch.map(item=>{
  return props.products.allProducts.map(i=>{
  return item._id===i._id &&(
           <Product
           external={props.external}
           edit={()=>{props.external==="Delete"?props.deleteProduct(i):props.editSearch(i)}}
           key={i._id}
           style={productStyles}
           sync={i}
           add={()=>{props.addtocart(i)}}
           inc={()=>{props.increment(i)}}
           dic={()=>{props.decrement(i)}}
           remove={()=>{props.removeitem(i)}}/>
          )
        })
    })



    return(
      <div className={styles.SearchContainer}>
        <div className={styles.SearchWrapper}>
          <div className={styles.SearchTitle}>
          <p>{props.search.word!==""?`showing search result for '${props.search.word}'`:"No Matching Item was Found."}</p>
          </div>
          <div className={styles.SearchSection}>
              {product}
          </div>
        </div>
      </div>
    )
}


Search.propTypes = {
  search: PropTypes.object.isRequired
};


const mapStateToProps=state=>({
  search:state.search,
  products:state.products
})

export default connect(mapStateToProps,{addtocart,increment,decrement,removeitem,editSearch,deleteProduct})(Search);
