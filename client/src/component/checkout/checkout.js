import React,{Component} from 'react';
import styles from './checkout.module.css';
import {connect} from 'react-redux';
import {showAuth} from './../../action/flow.js';

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
    },
    isAuth:false,
  }

  static getDerivedStateFromProps=(props,state)=>{
    if (props.auth.isAuthenticated!==false){
      return {
        process:2,
        details:{
          email:props.auth.user.email,
          address:state.details.address
        }
      }
    }
    return null;
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
        <CheckOutHeader process={this.state.process} test={this.state.details} history={this.props.history}/>
        <CheckoutSection sync={this} authOpen={this.props.showAuth}/>
        {this.state.openAddress && <Address toogle={this.showAddress}/>}
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  auth:state.auth
})

export default connect(mapStateToProps,{showAuth})(Checkout);
