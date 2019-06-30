import React,{Component} from 'react';
import styles from './avatar.module.css';
import AvatarIcon from './../../assets/icons/avatar.svg';
import CheckList from './../../assets/icons/list.svg';
import Discount from './../../assets/icons/discount.svg';

//Import components
import Auth from './../auth/auth.js';

class Avatar extends Component{
  state={
    isFocus:false,
    isAuth:false,
    showAuth:false
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
      showAuth:true,
      isFocus:false,
    })
  }

  closeAuth=()=>{
    this.setState({
      showAuth:false
    })
  }

  render(){
    return(
      <div className={styles.AvatarBox}>
        {this.state.showAuth && <Auth clickHandler={this.closeAuth}/>}
      {this.state.isFocus && <div className={styles.BlurOverlay}
        onClick={this.onBlurHandler}></div>}
        <div className={styles.AvatarIcon} onClick={()=>{this.state.isFocus?this.onBlurHandler():this.onFocusHandler()}}>
          <img src={AvatarIcon} alt='Avatar'/>
          <p>Profile</p>
        </div>
          { this.state.isFocus && <div className={styles.ProfileContainer}>
          <span className={styles.Locator}></span>

          <div className={styles.AuthButton}>
          <button onClick={this.showAuth}>Login or Sign Up</button>
          </div>
          <div className={styles.OtherButton}>
            <img src={CheckList} alt="Check list"/>
            Check list
          </div>
          <div className={styles.OtherButton}>
          <img src={Discount} alt="Check list"/>
          Discount</div>
          <div className={styles.OtherButton}>
          <img src={CheckList} alt="Check list"/>
          Check list</div>
        </div>}
      </div>
    )
  }
}

export default Avatar;
