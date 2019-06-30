import React from 'react';
import styles from './products.module.css';
import Product from './product/product.js';


const Products =(props)=>{
  return(
    <div className={styles.Products}>
      <div className={styles.Label}>
        <p>Best Selling</p>
      </div>
      <div className={styles.LabelProducts}>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
      </div>
    </div>
  );
}







export default Products;
