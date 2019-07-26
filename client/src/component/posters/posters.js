import React from 'react';
import styles from './posters.module.css';
import Poster from './poster/poster.js';

//import images



const Posters=(props)=>{
  let newPoster=props.poster.map((i,index)=>{
    return <Poster key={index} style={props.style} src={i.poster} title={i.title}/>
  })
  return(
    <div className={styles.Poster}>
      {newPoster}
    </div>
  )
}






export default Posters;
