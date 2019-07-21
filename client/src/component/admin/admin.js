import React,{Component} from 'react';
import styles from './admin.module.css';
import Main from './main/main.js';
import SidePanel from './sidepanel/sidepanel.js';
import {connect} from 'react-redux';



class Admin extends Component{
  state={
    opened:"Dashboard"
  }

  componentDidMount(){
    if (this.props.auth.pass===null) {
      this.props.history.push('/')
    }
    if (this.state.opened==="Dashboard" && this.props.auth.pass!==null ) {
      this.props.history.push('/admin/dashboard')
    }
  }



  clickHandler=(e)=>{
    this.setState({
      opened:e.target.id
    },()=>{
      this.props.history.push(`/admin/${this.state.opened.toLowerCase().replace(/\s/g,'')}`)
    })
  }

  liveHandler=(e)=>{
    this.props.history.push('/');
  }




  render(){
    return (
      <div className={styles.Admin}>
        <SidePanel click={this.clickHandler} open={this.state.opened} live={this.liveHandler}/>
        <Main title={this.state.opened}/>
      </div>
    )
  }
}


const mapStateToProps=state=>({
  auth:state.auth
})


export default connect(mapStateToProps)(Admin);
