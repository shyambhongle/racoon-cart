import React,{Component} from 'react';
import styles from './alert.module.css';
import {connect} from 'react-redux';
import {clearAlert} from './../../action/flow.js';


class Alert extends Component{
  componentDidMount(){
    setTimeout(this.props.clearAlert, 1000);
  }
  render(){
    return(
      <div className={styles.AlertBox}>
        <div className={styles.AlertContent}>
          {this.props.content}
        </div>
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  content:state.flow.alertContent
})


export default connect(mapStateToProps,{clearAlert})(Alert);
