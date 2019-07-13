import React,{Component} from 'react';
import styles from './searchbar.module.css';
import SearchIcon from './../../assets/icons/search.svg';


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



  render(){
    return(
      <div className={styles.SearchBox}>
        <div className= {styles.search}>
          <input type = "search" name = "value" placeholder = "Search for products"
            onFocus={this.focusHandler} onBlur={this.blurHandler}/>
          <button type = "button" >
            <img src={SearchIcon} alt="search"/>
          </button>
        </div>
        <div className={styles.SearchContainer}>
          <div className={styles.SingleSearch}>
            <span>Tea</span>
          </div>
        </div>
      </div>
    )
  }
}


export default SearchBar;
