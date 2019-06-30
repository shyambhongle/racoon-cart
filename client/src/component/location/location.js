import React,{Component} from 'react';
import styles from './location.module.css';
import gpsIcon from './../../assets/icons/location.svg';
import mumbai from './../../assets/icons/mumbai.svg';
import pune from './../../assets/icons/pune.svg';
import banglore from './../../assets/icons/banglore.svg';



class Location extends Component{
  state={
    isFocus:false,
    citySelected:"Mumbai"
  }

  onFocusHandler=()=>{
    this.setState({
      isFocus:true
    })
  }

  onBlurHandler=()=>{
    this.setState({
      isFocus:false
    })
  }

  cityHandler=(e)=>{
    if (e.target.attributes.name.textContent!==undefined) {
      this.setState({
        citySelected:e.target.attributes.name.textContent
      });
      this.onBlurHandler();
    }
  }



  render(){
    return(
      <div className={styles.LocationWrapper}>
        {this.state.isFocus && <div className={styles.BlurOverlay}
          onClick={this.onBlurHandler}></div>}

            <div className={styles.Holder}>
              <div className={styles.Placeholder}
               onClick={()=>{this.state.isFocus?this.onBlurHandler():this.onFocusHandler()}}>
              <span className={styles.IconGps}></span>
              <span className={styles.Text}>{`${this.state.citySelected}`}</span>
              <span className={styles.IconArrow}></span>
              </div>
            </div>

            {this.state.isFocus && <div className={styles.Conatiner}>
              <div className={styles.ContainerWrapper}>
                <span className={styles.Locator}></span>
                <p>Where do you want the delivery?</p>
                <div className={styles.Selected} onClick={this.onBlurHandler}>
                  <span className={styles.SelectedIcon}>
                    <img src={gpsIcon} alt="gps icon"/>
                  </span>
                    Deliver in <span className={styles.TextColor}>{`${this.state.citySelected}`}</span>
                  <span className={styles.Checked}></span>
                </div>
                <div className={styles.OtherCity}>
                  <span className={styles.Hdivider}></span>
                   Cities we deliver
                  <span className={styles.Hdivider}></span>
              </div>
              <div className={styles.NewCity}>
                <span className={styles.SelectedIcons} name="Mumbai" onClick={this.cityHandler}>
                  <img src={mumbai} alt="gps icon" name="Mumbai" />
                  <p style={{left:"-12px"}} name="Mumbai"> Mumbai</p>
                </span>
                <span className={styles.SelectedIcons}
                  onClick={this.cityHandler}>
                  <img src={pune} alt="gps icon" name="Pune"/>
                  <p name="Pune">Pune</p>
                </span>
                <span className={styles.SelectedIcons}
                  onClick={this.cityHandler}>
                  <img src={banglore} alt="gps icon"  name="Banglore"/>
                  <p style={{left:"-8px"}} name="Banglore">Banglore</p>
                </span>
              </div>
              </div>
            </div>}
      </div>

    )
  }
}





export default Location;
