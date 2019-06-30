import React,{Component} from 'react';
import styles from './login.module.css';



class Login extends Component{
  render(){
    return(
      <div className={styles.LoginContainer}>
        <div className={styles.LoginHeader}>Login</div>
        <div className={styles.LoginForm}>
          <form>
            <div className={styles.FormInput}>
              <label htmlFor="email" className="floatLabel">Email</label>
              <input id="email" name="email" type="text"/>
            </div>
            <div className={styles.FormInput}>
              <label htmlFor="password" className="floatLabel">Password</label>
              <input id="password" name="password" type="text"/>
            </div>
            <button>Login</button>
            <span className={styles.Toogle}>
              Don't have account? <p onClick={this.props.click}>Sign Up</p>
            </span>
          </form>
        </div>
      </div>
    )
  }
}


export default Login;
