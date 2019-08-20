import React from 'react';
import styles from './section.module.css';
import {connect} from 'react-redux';

import poster1 from './../../assets/media/poster/poster1.jpg';
import poster2 from './../../assets/media/poster/poster2.jpg';
import poster3 from './../../assets/media/poster/poster3.jpg';
import poster4 from './../../assets/media/poster/poster4.jpg';
import poster5 from './../../assets/media/poster/poster5.jpg';
import poster6 from './../../assets/media/poster/poster6.jpg';
import poster7 from './../../assets/media/poster/poster7.jpg';
import poster8 from './../../assets/media/poster/poster8.jpg';

import post1 from './../../assets/media/mango.jpg';
import post2 from './../../assets/media/organic.jpg';
import post3 from './../../assets/media/cream.jpg';



//import components
import Banner from './../banner/banner.js';
import Posters from './../posters/posters.js';
import Products from './../products/products.js';

const Section =(props)=>{

  return(
    <section className={styles.Section}>
      <Banner/>
      <Posters style={{width:"31.5%",height:"85%"}} poster={[{poster:post1},{poster:post2},{poster:post3}]}/>
      <Products title={"BEST SELLING"} tag={"BEST SELLING"} items={props.product}/>
      <Posters style={{width:"20%",height:"100%"}} poster={[
       {poster:poster1,title:"Snacks & Beverages"},
        {poster:poster3,title:"Breads"},{poster:poster4,title:"Indian Spices"},{poster:poster7,title:"Daily Needs"}]}/>
      <Products title={"TRENDING"} tag={"TRENDING"} items={props.product}/>
      <Products title={"GREAT DEALS"} tag={"GREAT DEALS"} items={props.product}/>
      <Posters style={{width:"20%",height:"100%"}}  poster={[{poster:poster2,title:"Tea & Coffee"},{poster:poster5,title:"Fresh Vegies"},{poster:poster6,title:"Cheessy"},{poster:poster8,title:"Choclates"}]}/>
    </section>
  )
}

const mapStateToProps=state=>({
  product:state.products.allProducts,
  auth:state.auth
})

export default connect(mapStateToProps)(Section);
