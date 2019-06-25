import React,{Component} from 'react';
import styles from './header.module.css';
import Logo from './../../assets/logo.png';

//import Components
import Location from './../location/location.js';

class Header extends Component{
  render(){
    return (
      <div className={`${styles.Nav}`}>
        <img src={Logo} className={`${styles.BrandLogo}`} alt='company Logo'/>
        <Location/>
      </div>
    );
  }
}



export default Header;
