import React,{Fragment} from 'react';
import styles from './cart.module.css';
import {withRouter} from 'react-router-dom';
import CloseIcon from './../../assets/icons/cancel.svg';
import ProductList from './../product_list/productlist.js';
import {connect} from 'react-redux';
import {closeFlow} from './../../action/flow.js';
import {increment,decrement,removeitem} from './../../action/products.js';
import EmptyCart from './../../assets/media/emptycart.png';

const Cart =(props)=>{
    let products=props.products.cartItems.map(id=>{
      return props.products.allProducts.map(item=>{
      return item._id===id._id && <ProductList
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
              <span className={styles.MycartTitle} style={{marginLeft:"22%"}}>
                Total Items: {props.products.totalItems} </span>
              <img onClick={props.closeFlow} src={CloseIcon} alt="close" className={styles.Close}/>
            </div>
            {props.products.cartItems.length===0?
            <div className={styles.EmptyCart}>
              <img src={EmptyCart} alt="EmptyCart"/>
              <span>Your Cart is Empty</span>
              <button onClick={props.closeFlow}>Shop now</button>
            </div>:
            <Fragment>
            <div className={styles.CartList}>
              {products}
            </div>
            <div className={styles.CheckOut}>
              <span className={styles.TotalPrice}>Total: &#8360;.{props.products.totalPrice}</span>
              <button onClick={()=>{
                  props.closeFlow()
                  props.history.push('/checkout')}}>CheckOut</button>
            </div>
            </Fragment>}
          </div>
        </div>
    )
  }


const mapStateToProps=(state)=>({
  control:state.flow,
  products:state.products
})


export default connect(mapStateToProps,{closeFlow,increment,decrement,removeitem})(withRouter(Cart));
