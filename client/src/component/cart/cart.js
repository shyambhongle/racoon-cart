import React,{Component} from 'react';
import styles from './cart.module.css';
import {withRouter} from 'react-router-dom';

import CartIcon from './../../assets/icons/cart.svg';
import CloseIcon from './../../assets/icons/cancel.svg';

import ProductList from './../product_list/productlist.js';


class Cart extends Component{
  state={
    isFocus:false,
    isAuth:false
  }

  onFocusHandler=()=>{
    this.setState({
      isFocus:true
    })
  }

  onBlurHandler=()=>{
    this.setState({
      isFocus:false
    })
  }

  render(){
    return(
      <div className={styles.CartWrapper}>
        <div className={styles.CartIcon} onClick={this.onFocusHandler}>
          <img src={CartIcon} alt='cart'/>
          <p>Cart</p>
        </div>
        <div className={styles.CartContainer} style={{visibility:this.state.isFocus?"visible":"hidden"}}>
          <div className={styles.Overlay} onClick={this.onBlurHandler} style={{opacity:this.state.isFocus?"0.5":"0"}}>></div>
          <div className={styles.CartContent} style={{transform:this.state.isFocus?"translateX(0vw)":"translateX(37vw)"}}>
            <div className={styles.Header}>
              <span className={styles.MycartTitle}>My Cart</span>
              <img onClick={this.onBlurHandler} src={CloseIcon} alt="close" className={styles.Close}/>
            </div>
            <div className={styles.CartList}>
              <ProductList/>
              <ProductList/>
              <ProductList/>
              <ProductList/>
            </div>
            <div className={styles.CheckOut}>
              <button onClick={()=>{this.props.history.push('/checkout')}}>CheckOut</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Cart);
