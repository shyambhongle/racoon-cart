import React from 'react';
import styles from './product.module.css';

import Plus from './../../../assets/icons/plus.svg';
import Minus from './../../../assets/icons/minus.svg';
import Test from './../../../assets/media/Capture.PNG';


const Product=(props)=>{
  return(
    <div className={styles.Product}>
     <div className={styles.Discount}>
      <p>28% OFF</p>
     </div>
     <div className={styles.ProductImage}>
      <img src={Test} alt="test"/>
     </div>
     <div className={styles.ProductTitle}>
      <p>Nestle Coffee(250g)</p>
     </div>
     <div className={styles.ProductWt}>1l</div>
     <div className={styles.MainPart}>
     <div className={styles.ProductPrice}>
     <span>&#8377;85</span>
     <span style={{textDecoration:"line-through",color:"rgba(0,0,0,0.4)"}}>&#8377;85</span>
     </div>
     <div className={styles.AddButton}></div>
     <div className={styles.QtyButton}>
     <span className={styles.plus}><img src={Minus} alt="add"/></span>
     <span className={styles.num}>1</span>
     <span className={styles.plus}><img src={Plus} alt="add"/></span>
     </div>
     </div>
    </div>
  );
}




export default Product;
