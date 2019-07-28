import React from 'react';
import styles from './banner.module.css';
import Slider from "react-slick";
import Banner1 from './../../assets/media/banner/banner1.jpg';
import Banner2 from './../../assets/media/banner/banner2.png';
import Banner3 from './../../assets/media/banner/banner3.png';
import Banner4 from './../../assets/media/banner/banner4.jpg';
import Banner5 from './../../assets/media/banner/banner6.png';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {showAuth} from './../../action/flow.js';
//import components
import Category from './../category/category.js';


const Banner=(props)=>{
  const CategoryStyle={
    width:"18%",
    height:"100%",
  }
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows:true,
      autoplay:true,
      autoplaySpeed:3000,
      lazyLoad:"progressive"
    };
    const pastPurchase=()=>{
      if (props.auth.isAuthenticated) {
        props.history.push('/pastorders');
      }else {
        props.showAuth()
      }
    }

    const dumyClick=()=>{
      props.history.push('/dumb');
    }


  return(
    <div className={styles.BannerWrapper}>
      <div className={styles.NavigationPannel}>
        <Category style={CategoryStyle}/>
        <div className={styles.NavHeader} onClick={pastPurchase}>PAST PURCHASES</div>
        <div className={styles.NavHeader} onClick={dumyClick}>GIFTING</div>
        <div className={styles.NavHeader} onClick={dumyClick}>REWARDS</div>
        <div className={styles.NavHeader} onClick={dumyClick}>BLOG</div>
        <div className={styles.NavHeader} onClick={dumyClick}>OFFERS</div>
      </div>
      <Slider {...settings}>
        <img src={Banner1} alt="" className={styles.BannerImage} onClick={dumyClick}/>
        <img src={Banner2} alt="" className={styles.BannerImage} onClick={dumyClick}/>
        <img src={Banner3} alt="" className={styles.BannerImage} onClick={dumyClick}/>
        <img src={Banner4} alt="" className={styles.BannerImage} onClick={dumyClick}/>
        <img src={Banner5} alt="" className={styles.BannerImage} onClick={dumyClick}/>
      </Slider>
  </div>
  )
}

const mapStateToProps=state=>({
  auth:state.auth
})

export default connect(mapStateToProps,{showAuth})(withRouter(Banner));
