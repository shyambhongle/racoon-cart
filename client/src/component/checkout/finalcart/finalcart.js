import React from 'react';
import styles from './finalcart.module.css';
import ProductList from './../../product_list/productlist.js';
import {connect} from 'react-redux';

const FinalCart =(props)=>{
  let products=props.products.cartItems.map(id=>{
    return props.products.allProducts.map(item=>{
      return item._id===id._id && <ProductList
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
              <span className={styles.MycartTitle} style={{marginLeft:"10%"}}>
                Total Items:{props.products.totalItems}</span>
              <span className={styles.MycartTitle} style={{marginLeft:"10%"}}>
              Total Amount:&#8360;.{props.products.totalPrice}</span>
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
