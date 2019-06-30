import React,{Component} from 'react';
import styles from './header.module.css';
import Logo from './../../assets/logotext.PNG';
import Small from './../../assets/small.PNG';
import {withRouter} from 'react-router-dom';

//import Components
import Location from './../location/location.js';
import SearchBar from './../searchbar/searchbar.js';
import Avatar from './../avatar/avatar.js';
import Cart from './../cart/cart.js';
import Category from './../category/category.js';


class Header extends Component{

  state={
    smallIcon:false
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

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
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
            <img src={Small} onClick={()=>{this.props.history.push('/')}} className={styles.SmallImage} alt='company Logo'/>
         </span>
            {this.state.smallIcon?
            <Category style={CategoryStyle}/>:
            <img src={Logo} className={`${styles.BrandLogo}`}
            onClick={()=>{this.props.history.push('/')}} alt='company Logo'/>}
         </div>
          <Location/>
          <SearchBar/>
          <Avatar/>
          <Cart/>
        </nav>
      </div>
    );
  }
}



export default Header;
