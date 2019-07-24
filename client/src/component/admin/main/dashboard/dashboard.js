import React,{Component} from 'react';
import styles from './dashboard.module.css';
import BarChart from './barchart/barchart.js';
import PieChart from './piechart/piechart.js';
import LinearChart from './linearchart/linearchart.js';


class Dashboard extends Component {
    render() {
      return  (
      <div>
        <div className={styles.OrderHeader}>
          <span className={styles.TotalOrders}><p>Total Orders : 520</p></span>
          <PieChart/>
        </div>
        <div className={styles.ListHeader}>
          <BarChart/>
          <span className={styles.ListOrders}><p>Top 5 Selling Products</p></span>
        </div>
        <div className={styles.MonthHeader}>
          <span className={styles.MonthList}><p>This Month Order Details</p></span>
          <LinearChart/>
        </div>
      </div>
      )
    }
  }


export default Dashboard;
