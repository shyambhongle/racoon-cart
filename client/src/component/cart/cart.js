import React from 'react';
import styles from './cart.module.css';
import {withRouter} from 'react-router-dom';
import CloseIcon from './../../assets/icons/cancel.svg';
import ProductList from './../product_list/productlist.js';
import {connect} from 'react-redux';
import {closeFlow} from './../../action/flow.js';

const Cart =(props)=>{

    return(
        <div className={styles.CartContainer} style={{visibility:props.control.showCart?"visible":"hidden"}}>
          <div className={styles.Overlay} onClick={props.closeFlow} style={{opacity:props.control.showCart?"0.5":"0"}}>></div>
          <div className={styles.CartContent} style={{transform:props.control.showCart?"translateX(0vw)":"translateX(37vw)"}}>
            <div className={styles.Header}>
              <span className={styles.MycartTitle}>My Cart</span>
              <img onClick={props.closeFlow} src={CloseIcon} alt="close" className={styles.Close}/>
            </div>
            <div className={styles.CartList}>
              <ProductList/>
              <ProductList/>
              <ProductList/>
              <ProductList/>
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
  control:state.flow
})


export default connect(mapStateToProps,{closeFlow})(withRouter(Cart));
