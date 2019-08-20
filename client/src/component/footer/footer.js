import React from 'react';
import styles from './footer.module.css';


const Footer =(props)=>{
  return(
    <footer>
      <div className={styles.FooterHeader}>
        <p>Raccon Cart - Online Grocery Shopping</p>
      </div>
      <div className={styles.FooterData}>
        <div className={styles.DataHeader}>Online grocery store in India</div>
        <div className={styles.DataSection}>Order online. All your favourite products from the low price online supermarket for grocery home delivery in Delhi, Gurugram, Bengaluru, Mumbai and other cities in India. Lowest prices guaranteed on Patanjali, Aashirvaad, Pampers, Maggi, Saffola, Huggies, Fortune, Nestle, Amul, MamyPoko Pants, Surf Excel, Ariel, Vim, Haldiram's and others.</div>
      </div>
      <div className={styles.FooterData}>
        <div className={styles.DataHeader}>One stop shop for all your daily needs</div>
        <div className={styles.DataSection}>Order online. All your favourite products from the low price online supermarket for grocery home delivery in Delhi, Gurugram, Bengaluru, Mumbai and other cities in India. Lowest prices guaranteed on Patanjali, Aashirvaad, Pampers, Maggi, Saffola, Huggies, Fortune, Nestle, Amul, MamyPoko Pants, Surf Excel, Ariel, Vim, Haldiram's and others.</div>
      </div>
      <div className={styles.FooterData}>
        <div className={styles.DataHeader}>For best of prices, deals and offers; order online in cities</div>
        <div className={styles.DataSection}>The delivery service is operational in 3 cities: Bengaluru,Mumbai and Pune.</div>
      </div>
      <div className={styles.CopyRight}>© Raccon Cart-India, 2016-2019</div>
    </footer>
  )
}







export default Footer;
