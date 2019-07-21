import React from 'react';
import styles from './product.module.css';

import Plus from './../../../assets/icons/plus.svg';
import Minus from './../../../assets/icons/minus.svg';


const Product=(props)=>{
  return(
    <div className={styles.Product}>
      {props.external && <div className={styles.ProductOverlay} onClick={props.edit}>
        <div className={styles.External}>{props.external}</div>
      </div>}
     <div className={styles.Discount}>
      <p>{Math.round(props.sync.discount)}% OFF</p>
     </div>
     <div className={styles.ProductImage}>
      <img src={props.sync.image} alt="test"/>
     </div>
     <div className={styles.ProductTitle}>
      <p>{props.sync.title}</p>
     </div>
     <div className={styles.ProductWt}>{props.sync.weight}</div>
     <div className={styles.MainPart}>
     <div className={styles.ProductPrice}>
     <span>&#8377;{props.sync.dprice}</span>
     <span style={{textDecoration:"line-through",color:"rgba(0,0,0,0.4)"}}>&#8377;{props.sync.price}</span>
     </div>
     {props.sync.qty!==0?<div className={styles.QtyButton}>
     <span className={styles.plus} onClick={props.sync.qty===1?props.remove:props.dic}><img src={Minus} alt="minus"/></span>
     <span className={styles.num}>{props.sync.qty}</span>
     <span className={styles.plus} onClick={props.inc}><img src={Plus} alt="add"/></span>
     </div>:<div className={styles.AddButton}
     onClick={props.add}>Add to cart</div>}
     </div>
    </div>
  );
}




export default Product;
