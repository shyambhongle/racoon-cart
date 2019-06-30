import React from 'react';
import styles from './section.module.css';




//import components
import Banner from './../banner/banner.js';
import Posters from './../posters/posters.js';
import Products from './../products/products.js';

const Section =()=>{

  return(
    <section className={styles.Section}>
      <Banner/>
      <Posters style={{width:"31.5%",height:"80%"}}/>
      <Products/>
      <Posters style={{width:"31.5%",height:"80%"}}/>
      <Products/>
      <Products/>
    </section>
  )
}



export default Section;
