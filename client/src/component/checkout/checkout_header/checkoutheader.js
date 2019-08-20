import React from 'react';
import styles from './checkoutheader.module.css';
import SmallLogo from './../../../assets/icons/raccoon.svg';

const CheckOutHeader =(props)=>{

  const activeStyle={
    color:"#ff8f00 ",
    borderBottom:"1px solid #ff8f00"
  }

  return(
    <div className={styles.CheckOutHeader}>
      <img onClick={()=>{props.history.push('/')}} className={styles.SmallLogo} src={SmallLogo} alt="logo"/>
      <div className={styles.PlaceHolder}>
        <div className={props.test.email===""?styles.Title:styles.Done} style={props.process===1?activeStyle:{}}>LOGIN</div>
        <div className={styles.Divider}>-------</div>
        <div className={props.test.address===""?styles.Title:styles.Done} style={props.process===2?activeStyle:{}}>ADDRESS</div>
        <div className={styles.Divider}>-------</div>
        <div className={styles.Title} style={props.process===3?activeStyle:{}}>PAYMENT</div>
      </div>
      <div className={styles.Assure}>
        <span className={styles.AssureLogo}></span>
        <p>100% Secure</p>
      </div>
    </div>
  )
}






export default CheckOutHeader;
