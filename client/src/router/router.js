import React,{Component,Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './../component/header/header.js';
import Section from './../component/section/section.js';
import Checkout from './../component/checkout/checkout.js';
import Cart from './../component/cart/cart.js';
import Auth from './../component/auth/auth.js';
import {connect} from 'react-redux';
import {fetchProduct} from './../action/fetchProduct';

class Router extends Component{
  componentDidMount(){
    this.props.fetchProduct()
  }
  render(){
    return(
      <Fragment>
        <Cart/>
        {this.props.control.showAuth && <Auth/>}
        <Switch>
          <Route path='/checkout' exact component={Checkout}/>
          <Route path='/'  component={Header}/>
        </Switch>
        <Switch>
          <Route path='/' exact component={Section}/>
        </Switch>
      </Fragment>
    )
  }
}


const mapStateToProps=(state)=>({
  control:state.flow
})



export default connect(mapStateToProps,{fetchProduct})(Router);
