import React from 'react';
import styles from './finalcart.module.css';
import ProductList from './../../product_list/productlist.js';
import {connect} from 'react-redux';

const FinalCart =(props)=>{
  let products=props.products.cartItems.map(id=>{
    return props.products.allProducts.map(item=>{
      return item._id===id && <ProductList
      key={id}
      sync={item}
      inc={()=>{}}
      dic={()=>{}}
      remove={()=>{}}
      visible={"hidden"}/>
    })
  })
    return(
          <div className={styles.CartContent}>
            <div className={styles.Header}>
              <span className={styles.MycartTitle}>My Cart</span>
            </div>
            <div className={styles.CartList}>
              {products}
            </div>
          </div>
    )
  }


const mapStateToProps=state=>({
  products:state.products
})


export default connect(mapStateToProps)(FinalCart);
