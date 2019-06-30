import React from 'react';
import styles from './posters.module.css';
import Poster from './poster/poster.js';

//import images
import poster1 from './../../assets/media/mango.jpg';
import poster2 from './../../assets/media/cream.jpg';
import poster3 from './../../assets/media/organic.jpg';


const Posters=(props)=>{
  return(
    <div className={styles.Poster}>
      <Poster style={props.style} src={poster1}/>
      <Poster style={props.style} src={poster2}/>
      <Poster style={props.style} src={poster3}/>
    </div>
  )
}






export default Posters;
