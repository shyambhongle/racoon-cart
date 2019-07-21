import React,{Component} from 'react';
import styles from './homepanel.module.css';


class HomePanel extends Component {
  render(){
    return(
      <div className={styles.HomePanel}>

        <div className={styles.BannerImage}>
          <div className={styles.BannerHeader}>
            <p>Change Banner Images</p>
          </div>
          <div className={styles.ButtonPannels}>
            <div className={styles.BannerButtons}>Banner 1</div>
            <div className={styles.BannerButtons}>Banner 2</div>
            <div className={styles.BannerButtons}>Banner 3</div>
            <div className={styles.BannerButtons}>Banner 4</div>
            <div className={styles.BannerButtons}>Banner 5</div>
          </div>
          <div className={styles.Banner}></div>
        </div>

        <div className={styles.PosterImage}></div>
        <div className={styles.PosterImage}></div>
        <div className={styles.Hots}></div>
      </div>
    )
  }
}

export default HomePanel;
