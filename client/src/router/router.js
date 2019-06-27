import React,{Component,Fragment} from 'react';
import Header from './../component/header/header.js';
import Section from './../component/section/section.js';


class Router extends Component{
  render(){
    return(
      <Fragment>
        <Header/>
        <Section/>
      </Fragment>
    )
  }
}






export default Router;
