import React from 'react';
import styles from './carticon.module.css';


const CartCount=(props)=>{
  return (
    <div className={styles.CartCount} style={props.style}>
      1
    </div>
  )
}

export default CartCount;
