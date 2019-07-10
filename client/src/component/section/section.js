import React from 'react';
import styles from './section.module.css';
import {connect} from 'react-redux';




//import components
import Banner from './../banner/banner.js';
import Posters from './../posters/posters.js';
import Products from './../products/products.js';

const Section =(props)=>{

  return(
    <section className={styles.Section}>
      <Banner/>
      <Posters style={{width:"31.5%",height:"80%"}}/>
      <Products title={"Best Selling"} tag={"bestSelling"} items={props.product}/>
      <Posters style={{width:"31.5%",height:"80%"}}/>
      <Products title={"Trending"} tag={"trending"} items={props.product}/>
      <Products/>
    </section>
  )
}

const mapStateToProps=state=>({
  product:state.products.allProducts
})

export default connect(mapStateToProps)(Section);
