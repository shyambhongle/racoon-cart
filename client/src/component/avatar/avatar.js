import React,{Component} from 'react';
import styles from './avatar.module.css';
import AvatarIcon from './../../assets/icons/avatar.svg';
import CheckList from './../../assets/icons/list.svg';
import Login from './../../assets/icons/login.svg';
import Discount from './../../assets/icons/discount.svg';
import Wallet from './../../assets/icons/wallet.svg';
import Logout from './../../assets/icons/logout.svg';
import {connect} from 'react-redux'
import {logoutUser} from './../../action/auth.js';
import {withRouter} from 'react-router-dom';

class Avatar extends Component{
  state={
    isFocus:false,
    isAuth:false,
  }

  onFocusHandler=()=>{
    this.setState({
      isFocus:true
    })
  }

  onBlurHandler=()=>{
    this.setState({
      isFocus:false
    })
  }

  showAuth=()=>{
    this.setState({
      isFocus:false,
    })
    this.props.click();
  }

  logoutUser=()=>{
    this.onBlurHandler()
    this.props.logoutUser(this.props.history);
  }

  myaccount=()=>{
    this.setState({
      isFocus:false
    })
    this.props.history.push('/pastorders')
  }

   dumyClick=()=>{
     this.setState({
       isFocus:false
     })
    this.props.history.push('/dumb');
  }


  render(){
    return(
      <div className={styles.AvatarBox}>
      {this.state.isFocus && <div className={styles.BlurOverlay}
        onClick={this.onBlurHandler}></div>}
        <div className={styles.AvatarIcon} onClick={()=>{this.state.isFocus?this.onBlurHandler():this.onFocusHandler()}}>
          <img src={AvatarIcon} alt='Avatar'/>
          <p>Profile</p>
        </div>
          { this.state.isFocus && <div className={styles.ProfileContainer}>
          <span className={styles.Locator}></span>

          {this.props.auth.isAuthenticated===false?
          <div className={styles.AuthButton}>
          <button onClick={this.showAuth}>Login or Sign Up</button>
          </div>:
          <div className={styles.OtherButton} onClick={this.myaccount}>
            <img src={Login} alt="Login"/>
            {this.props.auth.user.email}
          </div>}
          <div className={styles.OtherButton} onClick={()=>{
              this.props.auth.isAuthenticated!==false?this.myaccount():this.props.click()
            }}>
            <img src={CheckList} alt="MY Orders"/>
            My Orders
          </div>
          <div className={styles.OtherButton} onClick={()=>{
              this.props.auth.isAuthenticated!==false?this.dumyClick():this.props.click()
            }}>
          <img src={Discount} alt="Cards"/>
          Gift Cards</div>
          <div className={styles.OtherButton} onClick={()=>{
              this.props.auth.isAuthenticated!==false?this.dumyClick():this.props.click()
            }}>
          <img src={Wallet} alt="Wallet"/>
          Wallet</div>
        {this.props.auth.isAuthenticated!==false && <div className={styles.OtherButton}
        onClick={this.logoutUser}>
        <img src={Logout} alt="Logout"/>
        Logout
       </div>}
        </div>}
      </div>
    )
  }
}

const mapStateToProps=state=>({
    auth:state.auth
})

export default connect(mapStateToProps,{logoutUser})(withRouter(Avatar));
