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

componentDidMount(){
  if (this.props.products.cartItems.length===0) {
    return this.props.history.push('/')
  }
  if (this.props.auth.isAuthenticated===true) {
    this.setState({
      process:2,
    details:{
      email:this.props.auth.user.email,
      address:""
    }})
  }
}


componentWillReceiveProps(props){
  if (this.state.details.address!=="") {
    return;
  }
  if (props.auth.isAuthenticated) {
    return this.setState({
      process:2,
      details:{
        email:props.auth.user.email,
        address:""
      }
    })
  }
}



  addressHandler=(adr)=>{
    this.setState({
      process:3,
      details:{
        ...this.state.details,
        address:adr
      }
    })
  }



  addressProcess=()=>{
    this.setState({
      process:3
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
        {this.state.openAddress && <Address add={this.addressHandler} city={this.props.control.city} toogle={this.showAddress}/>}
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  auth:state.auth,
  control:state.flow,
  products:state.products
})

export default connect(mapStateToProps,{showAuth})(Checkout);
