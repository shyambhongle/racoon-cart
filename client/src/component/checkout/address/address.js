import React,{Component} from 'react';
import styles from './address.module.css';



class Address extends Component{

  render(){
    return(
      <div className={styles.AddresWrapper}>
      <div className={styles.AddressOverlay} onClick={this.props.toogle}></div>
      <div className={styles.AddressContainer}>
        <div className={styles.AddressHeader}>Address</div>
        <div className={styles.AddressForm}>
          <form>
            <div className={styles.FormInput}>
              <label htmlFor="address" className="floatLabel">Address</label>
              <input id="address" name="address" type="text"/>
            </div>
            <div className={styles.FormInput}>
              <label htmlFor="pincode" className="floatLabel">Pincode</label>
              <input id="pincode" name="pincode" type="text"/>
            </div>
            <div className={styles.FormInput}>
              <label htmlFor="city" className="floatLabel">City</label>
              <input id="city" name="city" type="text"/>
            </div>
            <button>Done</button>
          </form>
        </div>
      </div>
      </div>
    )
  }
}


export default Address;
