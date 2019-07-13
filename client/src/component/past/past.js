import React from 'react';
import styles from './past.module.css';
import {connect} from 'react-redux';
import ProductList from './../product_list/productlist.js';
import Empty from './../../assets/media/emptycart.gif';

const PastOrder =(props)=>{
  console.log(props.past);
  let orders;
  if (props.past.pastOrder.length!==0) {

    orders=props.past.pastOrder.map(item=>{
      let sproduct=item.cartItems.map(s=>{
         return (<ProductList
          key={s._id}
          sync={s}
          inc={()=>{}}
          dic={()=>{}}
          remove={()=>{}}
          visible={"hidden"}/>)
      })
      return (<div className={styles.SingleOrder}>
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
      <span>{props.past.pastOrder.length===0?"No Past Orders":"Your past Orders."}</span>
      </div>
      {props.past.pastOrder.length===0?<div className={styles.EmptyCart}><img src={Empty} alt="0"/></div>:<div className={styles.PastOrders}>
        {orders}
      </div>}
    </div>
  )
}

const mapStateToProps=state=>({
  past:state.past
})

export default connect(mapStateToProps)(PastOrder);