import React,{Component} from 'react';
import styles from './address.module.css';



class Address extends Component{
  state={
    address:"",
    pincode:""
  }

  changeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler=(e)=>{
    e.preventDefault();
    let adr=`${this.state.address},${this.state.pincode}`
    this.props.add(adr);
    this.props.toogle();
  }
  render(){
    return(
      <div className={styles.AddresWrapper}>
      <div className={styles.AddressOverlay} onClick={this.props.toogle}></div>
      <div className={styles.AddressContainer}>
        <div className={styles.AddressHeader}>Address</div>
        <div className={styles.AddressForm}>
          <form onSubmit={this.submitHandler}>
            <div className={styles.FormInput}>
              <label htmlFor="address" className="floatLabel">Address</label>
              <input id="address" name="address" type="text"
                onChange={this.changeHandler} value={this.state.address}/>
            </div>
            <div className={styles.FormInput}>
              <label htmlFor="pincode" className="floatLabel">Pincode</label>
              <input id="pincode" name="pincode" value={this.state.pincode}
                onChange={this.changeHandler} type="text"/>
            </div>
            <div className={styles.FormInput}>
              <label htmlFor="city" className="floatLabel">City</label>
              <input id="city" name="city" type="text" value={this.props.city} disabled/>

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
