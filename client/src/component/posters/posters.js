import React from 'react';
import styles from './posters.module.css';
import Poster from './poster/poster.js';
import {withRouter} from 'react-router-dom';

//import images



const Posters=(props)=>{

  const dumyClick=()=>{
    props.history.push('/dumb');
  }



  let newPoster=props.poster.map((i,index)=>{
    return <Poster key={index} style={props.style} click={dumyClick} src={i.poster} title={i.title}/>
  })




  return(
    <div className={styles.Poster}>
      {newPoster}
    </div>
  )
}






export default withRouter(Posters);
