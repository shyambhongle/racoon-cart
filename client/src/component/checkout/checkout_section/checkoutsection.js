import React from 'react';
import styles from './checkoutsection.module.css';
import Check from './../../../assets/icons/checked.svg';
import FinalCart from './../finalcart/finalcart.js';

const CheckoutSection=(props)=>{
  return(
    <div className={styles.CheckoutSection}>
      <div className={styles.CheckoutMainPart}>

        <div className={styles.Process}>
          <div className={props.sync.state.process===1?styles.Active:styles.Deactive}>
            <div className={styles.Header}>
              <span>1</span>
              <p>Account Verification</p>
              <img src={Check} alt="checked"/>
            </div>
            {props.sync.state.process===1?<div className={styles.ActivePart}>
              <p>We need your email id so that we can update you about your order.</p>
              <span>
                <button onClick={props.authOpen}>Login or Sign Up</button>
              </span>
            </div>:<div className={styles.DeactivePart}>
              <p>{props.sync.state.details.email}</p>
            </div>}
          </div>
        </div>

        <div className={styles.Process}>
          <div className={props.sync.state.process===2?styles.Active:styles.Deactive}>
            <div className={styles.Header}>
              <span>2</span>
              <p>Address</p>
            </div>
            {props.sync.state.process===2?<div className={styles.ActivePart}>
              <p>Add address for delivery</p>
              <span>
                <button onClick={props.sync.showAddress}>Add address</button>
              </span>
            </div>:<div className={styles.DeactivePart}>
              <p>{props.sync.state.details.address}</p>
            </div>}
          </div>
        </div>


        <div className={styles.Process}>
          <div className={props.sync.state.process===3?styles.Active:styles.Deactive}>
            <div className={styles.Header}>
              <span>3</span>
              <p>Payment</p>
            </div>
            {props.sync.state.process===3 && <div className={styles.ActivePart}>
              <p>Pay securely with our payment gateway.</p>
              <span>
                <button className={styles.PaymentButton}>Payment</button>
              </span>
            </div>}
          </div>
        </div>



      </div>
      <div className={styles.CheckoutList}><FinalCart/></div>
    </div>
  )
}




export default CheckoutSection;
