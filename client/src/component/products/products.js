import React from 'react';
import styles from './products.module.css';
import Product from './product/product.js';
import {connect} from 'react-redux';
import {addtocart,increment,decrement,removeitem} from './../../action/products.js';

const Products =(props)=>{
  let product;
  if (props.items!==undefined) {
    product=props.items.map(item=>{
        return props.tag===item.category && <Product
        key={item._id}
        sync={item}
        add={()=>{props.addtocart(item)}}
        inc={()=>{props.increment(item)}}
        dic={()=>{props.decrement(item)}}
        remove={()=>{props.removeitem(item)}}/>
    })
  }
  return(
    <div className={styles.Products}>
      <div className={styles.Label}>
        <p>{props.title}</p>
      </div>
      <div className={styles.LabelProducts}>
        {product}
      </div>
    </div>
  );
}







export default connect(null,{addtocart,increment,decrement,removeitem})(Products);
