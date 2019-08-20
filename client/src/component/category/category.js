import React from 'react';
import styles from './category.module.css';
import Down from './../../assets/icons/down.svg';
import {withRouter} from 'react-router-dom';

const Category=(props)=>{
  const dumyClick=()=>{
    props.history.push('/dumb');
  }


  return(
    <div className={styles.Category} style={props.style}>
      <div className={styles.CategoryTitle}>SHOP BY CATEGORY
       <img src={Down} alt="down arrow"/>
      </div>
      <div className={styles.CategoryContainer}>
        <div className={styles.CategoryList} onClick={dumyClick} >&nbsp;Indian Grocery</div>
        <div className={styles.CategoryList} onClick={dumyClick}>&nbsp;Breakfast,Dairy & Eggs</div>
        <div className={styles.CategoryList} onClick={dumyClick}>Snacks & Beverages</div>
        <div className={styles.CategoryList} onClick={dumyClick}>Instant Meals & Aids</div>
        <div className={styles.CategoryList} onClick={dumyClick}>Fruits & Vegetables</div>
        <div className={styles.CategoryList} onClick={dumyClick}>Breads & Cookies</div>
        <div className={styles.CategoryList} onClick={dumyClick}>Meat,Fish & Chiken</div>
        <div className={styles.CategoryList} onClick={dumyClick}>Internation Cusiene</div>
      </div>
    </div>
  )
}




export default withRouter(Category);
