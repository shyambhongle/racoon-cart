import React,{Component} from 'react';
import styles from './checkout.module.css';
import {withRouter} from 'react-router-dom';

//import Components
import CheckOutHeader from './checkout_header/checkoutheader.js';
import CheckoutSection from './checkout_section/checkoutsection.js';
import Address from './address/address.js';

class Checkout extends Component{

  state={
    process:1,
    openAddress:false,
    details:{
      email:"",
      address:""
    }
  }

  loginProcess=()=>{
    this.setState({
      process:2
    })
  }

  addressProcess=()=>{
    this.setState({
      process:3
    })
  }

  paymentProcess=()=>{
    this.setState({
      process:0
    })
  }

  showAddress=()=>{
    if (this.state.openAddress) {
      this.setState({
        openAddress:false
      })
    }else {
      this.setState({
        openAddress:true
      })
    }
  }


  render(){
    return(
      <div className={styles.Checkout}>
        <CheckOutHeader process={this.state.process} history={this.props.history}/>
        <CheckoutSection sync={this}/>
        {this.state.openAddress && <Address toogle={this.showAddress}/>}
      </div>
    )
  }
}



export default Checkout;
