import React,{Component} from 'react';
import styles from './search.module.css';
import SearchIcon from './../../assets/icons/search.svg';


class Search extends Component{
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
      </div>
    )
  }
}


export default Search;
