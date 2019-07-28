import React,{Component} from 'react';
import styles from './searchbar.module.css';
import SearchIcon from './../../assets/icons/search.svg';
import {connect} from 'react-redux';
import {inputSearch,inputClick} from './../../action/search.js';
import {withRouter} from 'react-router-dom';

class SearchBar extends Component{
  state={
    isFocus:false
  }

  focusHandler=()=>{
    this.setState({
      isFocus:true
    })
  }

  blurHandler=()=>{
    this.setState({
      isFocus:false
    })
  }

  onChangeHandler=(e)=>{
    if (e.target.value.length>1) {
      this.props.inputSearch(e.target.value)
    }
    if (e.target.value.length>2) {
      this.focusHandler();
    }
  }


  searchHandler=(product)=>{
    let searchedProduct=[];
    searchedProduct.push(product);
    this.props.inputClick(searchedProduct,this.props.history,this.props.test);
    this.blurHandler()
  }

  searchClick=(product)=>{
    if (product.length!==0) {
      this.props.inputClick(product,this.props.history,this.props.test);
      this.blurHandler()
    }
  }

  keyPressed=(event)=>{
    if (event.key === "Enter") {
      this.searchClick(this.props.search)
    }
  }






  render(){
    let inputProduct;
    if (this.props.search.length!==0) {
      inputProduct=this.props.search.map(product=>{
      return   (<div className={styles.SingleSearch}
                key={product._id}
                onClick={()=>{this.searchHandler(product)}}>
                <span>{product.title}</span>
               </div>)
      })
    }else {
      inputProduct=<div className={styles.SingleSearch}>
                <span>No product found.</span>
               </div>
    }

    return(
      <div className={styles.SearchBox}>
        {this.state.isFocus && <div className={styles.BlurOverlay}
          onClick={this.blurHandler}></div>}
        <div className= {styles.search}>
          <input type = "search" name = "value" placeholder = "Search for products"
             onChange={this.onChangeHandler}
             onKeyPress={this.keyPressed}/>
           <button type = "button" onClick={()=>{this.searchClick(this.props.search)}}>
            <img src={SearchIcon} alt="search"/>
          </button>
        </div>
        <div className={styles.SearchContainer} style={{display:this.state.isFocus?"block":"none"}}>
          {inputProduct}
        </div>
      </div>
    )
  }
}

const mapStateToProps=state=>({
  search:state.search.input
})

export default connect(mapStateToProps,{inputSearch,inputClick})(withRouter(SearchBar));
