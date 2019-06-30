import React from 'react';
import styles from './category.module.css';
import Down from './../../assets/icons/down.svg';

const Category=(props)=>{
  return(
    <div className={styles.Category} style={props.style}>
      <div className={styles.CategoryTitle}>SHOP BY CATEGORY
       <img src={Down} alt="down arrow"/>
      </div>
      <div className={styles.CategoryContainer}>
        <div className={styles.CategoryList}>&nbsp;Indian Grocery</div>
        <div className={styles.CategoryList}>&nbsp;Breakfast,Dairy & Eggs</div>
        <div className={styles.CategoryList}>Snacks & Beverages</div>
        <div className={styles.CategoryList}>Instant Meals & Aids</div>
        <div className={styles.CategoryList}>Fruits & Vegetables</div>
        <div className={styles.CategoryList}>Breads & Cookies</div>
        <div className={styles.CategoryList}>Meat,Fish & Chiken</div>
        <div className={styles.CategoryList}>Internation Cusiene</div>
      </div>
    </div>
  )
}




export default Category;
