import React from 'react';
import styles from './past.module.css';
import {connect} from 'react-redux';
import ProductList from './../product_list/productlist.js';
import Empty from './../../assets/media/emptycart.gif';

const PastOrder =(props)=>{
  let orders;
  if (props.auth.orders.length!==0) {

    orders=props.auth.orders.map((item,i)=>{
      let sproduct=item.cartItems.map(s=>{
         return (<ProductList
          key={s._id}
          sync={s}
          inc={()=>{}}
          dic={()=>{}}
          remove={()=>{}}
          visible={"hidden"}/>)
      })
      return (<div className={styles.SingleOrder} key={i}>
                <div className={styles.SingleOrderHeader}>
                  <span>Order no:452576874</span>
                  <p>{item.date}</p>
                </div>
                <div className={styles.AllOrders}>
                  {sproduct}
                </div>
                <div className={styles.Details}>
                  <div className={styles.Address}>
                    Address:<br/><span>{item.address}</span>
                  </div>
                  <div className={styles.TotalAmount}>
                    Total Items:{item.totalItems}
                  </div>
                  <div className={styles.TotalAmount}>
                    Total amount paid:200
                  </div>
                </div>
              </div>)
    })
  }
  return(
    <div className={styles.PastContainer}>
      <div className={styles.PastTitle}>
      <span>{props.auth.orders.length===0?"No Past Orders":"Your past Orders."}</span>
      </div>
      {props.auth.orders.length===0?<div className={styles.EmptyCart}><img src={Empty} alt="0"/></div>:<div className={styles.PastOrders}>
        {orders}
      </div>}
    </div>
  )
}

const mapStateToProps=state=>({
  auth:state.auth
})

export default connect(mapStateToProps)(PastOrder);
