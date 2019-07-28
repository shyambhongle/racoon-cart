import React from 'react';
import styles from './poster.module.css';




const Poster =(props)=>{
  return(
    <div className={styles.Poster}style={props.style}  onClick={props.click}>
      <img src={props.src} alt="poster" />
      <p>{props.title}</p>
    </div>
  )
}



export default Poster;
