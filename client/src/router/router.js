import React,{Component,Fragment} from 'react';
import {Route,Switch,withRouter} from 'react-router-dom';
import Header from './../component/header/header.js';
import PastOrder from './../component/past/past.js';
import Section from './../component/section/section.js';
import Checkout from './../component/checkout/checkout.js';
import Cart from './../component/cart/cart.js';
import Footer from './../component/footer/footer.js';
import Auth from './../component/auth/auth.js';
import Dumb from './../component/dumb/dumb.js';

import Alert from './../component/alert/alert.js';
import Search from './../component/search/search.js';
import {connect} from 'react-redux';
import jwt_decode from 'jwt-decode';
import setAuthToken from './../utils/setAuthToken';
import { setCurrentUser,logoutUser} from './../action/auth.js';
import store from './../store/store.js';
import Admin from './../component/admin/admin.js';
import {fetchProduct} from './../action/fetchproduct.js';


class Router extends Component{
  state={
    alert:false
  }
  componentDidMount(){
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.jwtToken);
      store.dispatch(setCurrentUser(decoded));
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        store.dispatch(logoutUser(this.props.history));
      }
    }
    this.props.fetchProduct();

  }
  componentWillReceiveProps(props){
    if (props.control.alertContent!=="") {
      this.setState({alert:true})
    }else {
      this.setState({alert:false})
    }
  }
  render(){
    return(
      <Fragment>
        <Cart/>
        {this.state.alert && <Alert/>}
        {this.props.control.showAuth && <Auth/>}
        <Switch>
          <Route path='/admin'  component={null}/>
          <Route path='/checkout' exact component={Checkout}/>
          <Route path='/'  component={Header}/>
        </Switch>
        <Switch>
          <Route path='/admin'  component={Admin}/>
          <Route path='/pastorders' exact component={PastOrder}/>
          <Route path='/search' exact component={Search}/>
          <Route path='/' exact component={Section}/>
          <Route path='/dumb' exact component={Dumb}/>
        </Switch>
        <Route path='/' exact component={Footer}/>
      </Fragment>
    )
  }
}


const mapStateToProps=(state)=>({
  control:state.flow,
  auth:state.auth
})



export default connect(mapStateToProps,{fetchProduct})(withRouter(Router));
