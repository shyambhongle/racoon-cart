import React from 'react';
import styles from './productlist.module.css';

import Test from './../../assets/media/Capture.PNG';
import Minus from './../../assets/icons/minus.svg';
import Plus from './../../assets/icons/plus.svg';

const ProductList=(props)=>{
  let finalStyle={
    marginLeft:"25%",
    marginRight:"2%"
  }
  return(
    <div className={styles.ListContainer}>
      <div className={styles.InfoContainer}>
        <div className={styles.Image}>
          <img src={Test} alt="list profuct"/>
        </div>
        <div className={styles.Details}>
          <div className={styles.Discount}>
            <p>{props.sync.discount}% OFF</p>
            <span onClick={props.remove} style={{"display":props.visible && "none"}}
              className={styles.Close}></span>
          </div>
          <div className={styles.Title}>
            {props.sync.title}</div>
          <div className={styles.Qty}>{props.sync.weight}</div>
        </div>
      </div>
      <div className={styles.Amount}>
        <span className={styles.plus} style={{"display":props.visible && "none"}} onClick={props.sync.qty===1?props.remove:props.dic}><img src={Minus} alt="minus"/></span>
        <span className={styles.num} style={props.visible?finalStyle:{}}>
          {props.sync.qty}</span>
        <span className={styles.plus} style={{"display":props.visible && "none"}}
          onClick={props.inc}><img src={Plus} alt="plus"/></span>
        <span className={styles.Multiply}>x {props.sync.dprice}</span>
        <span className={styles.TotalPrice}> &#8377;{props.sync.dprice * props.sync.qty}</span>
      </div>
    </div>
  )
}




export default ProductList;
