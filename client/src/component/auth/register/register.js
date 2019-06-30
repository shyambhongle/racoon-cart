import React,{Component} from 'react';
import styles from './register.module.css';



class Register extends Component{
  render(){
    return(
      <div className={styles.RegisterContainer}>
        <div className={styles.RegisterHeader}>Sign Up</div>
        <div className={styles.RegisterForm}>
          <form>
            <div className={styles.FormInput}>
              <label htmlFor="email" className="floatLabel">Email</label>
              <input id="email" name="email" type="text"/>
            </div>
            <div className={styles.FormInput}>
              <label htmlFor="password" className="floatLabel">Password</label>
              <input id="password" name="password" type="text"/>
            </div>
            <div className={styles.FormInput}>
              <label htmlFor="confirm" className="floatLabel">Confirm password</label>
              <input id="confirm" name="confirm" type="text"/>
            </div>
            <button>Sign Up</button>
            <span className={styles.Toogle}>
              Already having account? <p onClick={this.props.click}>Login</p>
            </span>
          </form>
        </div>
			</div>
    )
  }
}


export default Register;
