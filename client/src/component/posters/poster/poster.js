import React from 'react';
import styles from './poster.module.css';




const Poster =(props)=>{
  return(
    <div className={styles.Poster}style={props.style}>
      <img src={props.src} alt="poster"/>
    </div>
  )
}



export default Poster;