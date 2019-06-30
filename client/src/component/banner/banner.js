import React from 'react';
import styles from './banner.module.css';

//import components
import Category from './../category/category.js';


const Banner=()=>{
  const CategoryStyle={
    width:"18%",
    height:"100%",
  }
  return(
    <div className={styles.BannerWrapper}>
      <div className={styles.NavigationPannel}>
        <Category style={CategoryStyle}/>
        <div className={styles.NavHeader}>PAST PURCHASES</div>
        <div className={styles.NavHeader}>GIFTING</div>
        <div className={styles.NavHeader}>REWARDS</div>
        <div className={styles.NavHeader}>BLOG</div>
        <div className={styles.NavHeader}>OFFERS</div>
      </div>
      <div className={styles.BannerImage}></div>
    </div>
  )
}



export default Banner;
