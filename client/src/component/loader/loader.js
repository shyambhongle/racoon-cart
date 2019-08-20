import React from 'react';
import styles from './loader.module.css';


const Loader=()=>{
  return (
    <div className={styles.LoaderBackground}>
      <div className={styles.Loader}></div>
    </div>
  );
}




export default Loader;
