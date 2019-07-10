import React from 'react';
import styles from './cart.module.css';
import {withRouter} from 'react-router-dom';
import CloseIcon from './../../assets/icons/cancel.svg';
import ProductList from './../product_list/productlist.js';
import {connect} from 'react-redux';
import {closeFlow} from './../../action/flow.js';
import {increment,decrement,removeitem} from './../../action/products.js';


const Cart =(props)=>{
  let products=props.products.cartItems.map(id=>{
    return props.products.allProducts.map(item=>{
      return item._id===id && <ProductList
      key={item._id}
      sync={item}
      inc={()=>{props.increment(item)}}
      dic={()=>{props.decrement(item)}}
      remove={()=>{props.removeitem(item)}}/>
    })
  })
    return(
        <div className={styles.CartContainer} style={{visibility:props.control.showCart?"visible":"hidden"}}>
          <div className={styles.Overlay} onClick={props.closeFlow} style={{opacity:props.control.showCart?"0.5":"0"}}>></div>
          <div className={styles.CartContent} style={{transform:props.control.showCart?"translateX(0vw)":"translateX(37vw)"}}>
            <div className={styles.Header}>
              <span className={styles.MycartTitle}>My Cart</span>
              <img onClick={props.closeFlow} src={CloseIcon} alt="close" className={styles.Close}/>
            </div>
            <div className={styles.CartList}>
              {products}
            </div>
            <div className={styles.CheckOut}>
              <button onClick={()=>{
                  props.closeFlow()
                  props.history.push('/checkout')}}>CheckOut</button>
            </div>
          </div>
        </div>
    )
  }


const mapStateToProps=(state)=>({
  control:state.flow,
  products:state.products
})


export default connect(mapStateToProps,{closeFlow,increment,decrement,removeitem})(withRouter(Cart));
