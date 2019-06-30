import React,{Component,Fragment} from 'react';
import {Route,Switch} from 'react-router-dom';
import Header from './../component/header/header.js';
import Section from './../component/section/section.js';
import Checkout from './../component/checkout/checkout.js';

class Router extends Component{
  render(){
    return(
      <Fragment>
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






export default Router;
