import React from 'react';
import styles from './sidepanel.module.css';




const SidePanel=(props)=>{
  let backgroundStyle={
    backgroundColor:"#262626",
    color:"white"
  }
  return(
    <div className={styles.SidePanel}>
    <div className={styles.Avatar}></div>
    <div className={styles.Email}>shyambhongle@gmail.com</div>
    <div className={styles.Buttons} onClick={props.click} id="Dashboard" style={props.open==="Dashboard"?backgroundStyle:{}}>Dashboard</div>
    <div className={styles.Buttons} onClick={props.click} id="Home Panel"
    style={props.open==="Home Panel"?backgroundStyle:{}}>Home pannel</div>
    <div className={styles.Buttons} onClick={props.click} id="Add Product"
    style={props.open==="Add Product"?backgroundStyle:{}}>Add product</div>
    <div className={styles.Buttons} onClick={props.click} id="Edit Product"
    style={props.open==="Edit Product"?backgroundStyle:{}}>Edit product</div>
    <div className={styles.Buttons} onClick={props.click} id="Delete Product"
    style={props.open==="Delete Product"?backgroundStyle:{}}>Delete product</div>
    <div className={styles.Website} onClick={props.live} id="Website">Live Website</div>
    </div>
  );
}








export default SidePanel;
