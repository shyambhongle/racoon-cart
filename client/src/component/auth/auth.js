import React,{Component} from 'react';
import styles from './auth.module.css';

import Register from './register/register.js';
import Login from './login/login.js';
import {connect} from 'react-redux';
import {closeFlow} from './../../action/flow.js';

class Auth extends Component{
  state={
    login:true
  }

  toogleState=(e)=>{
    if (this.state.login) {
      this.setState({
        login:false
      })}else{
        this.setState({
          login:true
        })
    }
  }

  render(){
    const headerStyle={
      backgroundColor:"white"
      }
    return(
      <div className={styles.AuthBox}>
        <div className={styles.Overlay} onClick={this.props.closeFlow}></div>
        <div className={styles.AuthConatiner}>
          <span className={styles.Close} onClick={this.props.closeFlow}></span>
          <div className={styles.Header}>
            <span style={this.state.login?headerStyle:{}} onClick={this.toogleState}>Login</span>
            <span style={!this.state.login?headerStyle:{}} onClick={this.toogleState}>Sign Up</span>
          </div>
          <div className={styles.AuthBody}>
            {this.state.login?<Login click={this.toogleState}/>:<Register click={this.toogleState}/>}
          </div>
        </div>
      </div>
    )
  }
}



export default connect(null,{closeFlow})(Auth);
