import React from 'react';
import styles from './adminpanel.module.css';
import AdminIcon from './../../assets/icons/admin.svg';

const AdminPannel=(props)=>{
  return (
    <div className={styles.AdminPannel} onClick={()=>{props.history.push('/admin')}}>
      <div className={styles.AdminIcon}>
        <img src={AdminIcon} alt="admin"/>
        <p>Admin</p>
      </div>
    </div>
  )
}


export default AdminPannel;
