import React from 'react';
import styles from './banner.module.css';


const Banner=()=>{
  return(
    <div className={styles.BannerWrapper}>
      <div className={styles.NavigationPannel}></div>
      <div className={styles.BannerImage}></div>
    </div>
  )
}



export default Banner;
