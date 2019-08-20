import React,{Component} from 'react';
import styles from './dashboard.module.css';
import BarChart from './barchart/barchart.js';
import PieChart from './piechart/piechart.js';
import LinearChart from './linearchart/linearchart.js';
import {connect} from 'react-redux';

class Dashboard extends Component {

    render() {
      return  (
      <div>
        <div className={styles.OrderHeader}>
          <span className={styles.TotalOrders}><p>Total Orders : {this.props.data.Orders}</p>
          <div className={styles.TotalOdetails}>
            <div className={styles.SingleDetails}><span style={{background:"#FF3E30"}}></span><p>Mumbai-{this.props.data.city.Mumbai}</p></div>
            <div className={styles.SingleDetails}><span style={{background:"#F7B539"}}></span><p>Pune-{this.props.data.city.Pune}</p></div>
            <div className={styles.SingleDetails}><span style={{background:"#179C52"}}>
            </span><p>Banglore-{this.props.data.city.Banglore}</p></div>
          </div>
          </span>
          <PieChart data={this.props.data.city}/>
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

const mapStateToProps=(state)=>({
  data:state.admin
})

export default connect(mapStateToProps)(Dashboard);
