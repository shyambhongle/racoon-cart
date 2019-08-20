import React from 'react';
import styles from './products.module.css';
import Product from './product/product.js';
import {connect} from 'react-redux';
import {addtocart,increment,decrement,removeitem} from './../../action/products.js';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 4,
   };
  return(
    <div className={styles.Products}>
      <div className={styles.Label}>
        <span></span><p>{props.title}</p><span></span>
      </div>
      <Slider {...settings} >
        {product}
      </Slider>
    </div>
  );
}







export default connect(null,{addtocart,increment,decrement,removeitem})(Products);
