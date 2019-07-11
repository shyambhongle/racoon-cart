import React,{Component} from 'react';
import styles from './header.module.css';
import Logo from './../../assets/logotext.PNG';
import Small from './../../assets/small.PNG';
import {connect} from 'react-redux';
import {showCart,showAuth} from './../../action/flow.js';

//import Components
import Location from './../location/location.js';
import SearchBar from './../searchbar/searchbar.js';
import Avatar from './../avatar/avatar.js';
import Category from './../category/category.js';
import CartIcon from './../../assets/icons/cart.svg';


class Header extends Component{

  state={
    smallIcon:false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  componentWillUnmount(){
    window.removeEventListener("scroll", this.listenScrollEvent)
  }


  listenScrollEvent = e => {
    if (window.scrollY>35) {
      this.setState({
        smallIcon:true
      })
    }else{
      this.setState({
        smallIcon:false
      })
    }
  }


  redirectHome=()=>{
    this.props.history.push('/')
  }

  render(){
    const CategoryStyle={
      width:"60%",
      height:"40%",
    }
    return (
      <div className={`${styles.Nav}`}>
        <nav>
         <div className={styles.SmallLogo}>
          <span>
            <img src={Small} onClick={this.redirectHome} className={styles.SmallImage} alt='company Logo'/>
         </span>
            {this.state.smallIcon?
            <Category style={CategoryStyle}/>:
            <img src={Logo} className={`${styles.BrandLogo}`}
            onClick={()=>{this.props.history.push('/')}} alt='company Logo'/>}
         </div>
          <Location/>
          <SearchBar/>
          <Avatar click={this.props.showAuth}/>
          <div className={styles.CartIcon} onClick={this.props.showCart}>
            <img src={CartIcon} alt='cart'/>
            <p>Cart</p>
          </div>
        </nav>
      </div>
    );
  }
}



export default connect(null,{showCart,showAuth})(Header);
