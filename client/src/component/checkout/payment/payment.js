import React from "react";
import StripeCheckout from "react-stripe-checkout";
import {connect} from 'react-redux';
import LogoImg from './../../../assets/small.PNG';
import {withRouter} from 'react-router-dom';
import {placeOrder} from './../../../action/checkout.js';


const stripeBtn = (props) => {
  const publishableKey = "pk_test_3QP97otEXlsFuqLbn6Z5B3kZ";
  let newCart=[];
  props.products.cartItems.map(id=>{
    return props.products.allProducts.map(item=>{
      return item._id===id._id && newCart.push(item);
  })})
  let details={
    cartItems:newCart,
    totalItems:props.products.totalItems,
    date:new Date(),
    address:props.address
  }
  const onToken = token => {
    const body = {
      amount: 999,
      token: token,
      details
  };
  props.placeOrder(body,props.history)
  };
  return (
    <StripeCheckout
      label="Payment" //Component button text
      name="Raccon Cart" //Modal Header
      description="Pay securely using stripe."
      panelLabel="Payment" //Submit button in modal
      amount={999} //Amount in cents $9.99
      token={onToken}
      stripeKey={publishableKey}
      billingAddress={false}
      email={props.user}
      image={LogoImg}
      style={{backgroundImage:"none",boxShadow:'none',width:"40%"}}
    />
  );
};

const mapStateToProps=state=>({
  user:state.auth.user.email,
  products:state.products
})

export default connect(mapStateToProps,{placeOrder})(withRouter(stripeBtn));
