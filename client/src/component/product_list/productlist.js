import React from 'react';
import styles from './productlist.module.css';

import Test from './../../assets/media/Capture.PNG';
import Minus from './../../assets/icons/minus.svg';
import Plus from './../../assets/icons/plus.svg';

const ProductList=(props)=>{
  return(
    <div className={styles.ListContainer}>
      <div className={styles.InfoContainer}>
        <div className={styles.Image}>
          <img src={Test} alt="list profuct"/>
        </div>
        <div className={styles.Details}>
          <div className={styles.Discount}>
            <p>28% OFF</p>
            <span className={styles.Close}></span>
          </div>
          <div className={styles.Title}>
            Nestle Coffee(250g)</div>
          <div className={styles.Qty}>1l</div>
        </div>
      </div>
      <div className={styles.Amount}>
        <span className={styles.plus}><img src={Minus} alt="add"/></span>
        <span className={styles.num}>1</span>
        <span className={styles.plus}><img src={Plus} alt="add"/></span>
        <span className={styles.Multiply}>x 18</span>
        <span className={styles.TotalPrice}> &#8377;18</span>
      </div>
    </div>
  )
}




export default ProductList;
