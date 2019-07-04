import React,{Component} from 'react';
import styles from './register.module.css';
import {connect} from 'react-redux';
import {registerUser,clearErrors} from './../../../action/auth.js';




const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);


class Register extends Component{

  state={
    email:"",
    password:"",
    confirm:"",
    emailError:false,
    passwordError:false,
    confirmError:false,
    message:false
  }

  static getDerivedStateFromProps=(props)=>{
    if (props.error.email!==undefined || props.error.password!==undefined){
      props.clearErrors()
      return {
        emailError:props.error.email!==undefined?props.error.email:false,
        passwordError:props.error.password!==undefined?props.error.password:false,
      }
    }
    return null;
  }



  onChangeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  errorCheck=e=>{
    switch (e.target.name) {
      case 'email':
        this.props.clearErrors()
        if (this.state.email==="") {
          this.setState({emailError:false})
        }else{
          emailRegex.test(this.state.email)?
          this.setState({emailError:false})
          :this.setState({emailError:"Please enater a valid email id."})
        }
        break;
        case 'password':
          this.props.clearErrors()
          if (this.state.password==="") {
            this.setState({passwordError:false})
          }else{
            if (this.state.confirm!=="") {
              this.state.confirm!==this.state.password?
              this.setState({confirmError:"Password does not match."}):
              this.setState({passwordError:false})
            }
            this.state.password.length>5?
            this.setState({passwordError:false})
            :this.setState({passwordError:"Password should be more than 6 characters."})
          }
          break;
          case 'confirm':
            if (this.state.confirm==="") {
              this.setState({confirmError:false})
            }else{
              this.state.confirm!==this.state.password?
              this.setState({confirmError:"Password does not match."}):
              this.setState({passwordError:false})
            }
            break;
      default:
    }
  }

  confirmHandler=(e)=>{
    let inc=e.target.value.length;
    if (this.state.password[inc-1]!==e.target.value[inc-1]) {
      this.setState({confirmError:"password does not match."})
    }else {
      this.setState({confirm:e.target.value,confirmError:false})
    }
  }

  submitHandler=(e)=>{
    e.preventDefault();
    if (this.state.emailError!==false || this.state.passwordError!==false || this.state.confirmError!==false) {
      this.setState({message:"Please fill the form properly."})
    }
    else if (this.state.email==="" || this.state.password==="" || this.state.confirm==="") {
      this.setState({
        emailError:this.state.email===""?"Please provide your email.":false,
        passwordError:this.state.password===""?"Please enter a password.":false,
        confirmError:this.state.confirm===""?"Please confirm your password.":false,
        message:"Please fill the form properly."
    })
  }else {
    let data={
      email:this.state.email,
      password:this.state.password
    }
    this.props.registerUser(data)
  }
}



  render(){
    const errorStyle={
      display:"inline-block"
    }
    const errorBorder={
      border:"1px solid #e53935"
    }
    return(
      <div className={styles.RegisterContainer}>
        <div className={styles.RegisterHeader}>Sign Up</div>
        <div className={styles.RegisterForm}>
          <form onSubmit={this.submitHandler}>
            <span className={styles.errorText}
            style={this.state.message!==false?{...errorStyle,textAlign:"center"}:{}}>{this.state.message}
           </span>
            <div className={styles.FormInput}  style={this.state.emailError!==false?errorBorder:{}}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="text"
              onChange={this.onChangeHandler} onBlur={this.errorCheck} value={this.state.email}/>
            </div>
            <span className={styles.errorText}
            style={this.state.emailError!==false?errorStyle:{}}>{this.state.emailError}
           </span>
            <div className={styles.FormInput}  style={this.state.passwordError!==false?errorBorder:{}}>
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password"
              onChange={this.onChangeHandler}  onBlur={this.errorCheck} value={this.state.password}/>
            </div>
            <span className={styles.errorText}
            style={this.state.passwordError!==false?errorStyle:{}}>{this.state.passwordError}
           </span>
            <div className={styles.FormInput} style={this.state.confirmError!==false?errorBorder:{}}>
              <label htmlFor="confirm">Confirm password</label>
              <input id="confirm" name="confirm" type="password"
                onChange={this.confirmHandler} onBlur={this.errorCheck} />
            </div>
            <span className={styles.errorText}
            style={this.state.confirmError!=="false"?errorStyle:{}}>{this.state.confirmError}
           </span>
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

const mapStateToProps=(state)=>({
  error:state.error
})



export default connect(mapStateToProps,{registerUser,clearErrors})(Register);
