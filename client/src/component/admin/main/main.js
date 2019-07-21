import React from 'react';
import styles from './main.module.css';
import HomePanel from './homepanel/homepanel';
import AddProduct from './addproduct/addproduct';
import EditProduct from './editproduct/editproduct';
import DeleteProduct from './deleteproduct/deleteproduct';
import {Switch,Route} from 'react-router-dom';

const Main=(props)=>{
  return (
    <div className={styles.Main}>
      <div className={styles.Header}><p>{props.title}</p></div>
      <div className={styles.Section}>
        <Switch>
          <Route path='/admin/homepanel' exact component={HomePanel}/>
          <Route path='/admin/addproduct' exact component={AddProduct}/>
          <Route path='/admin/editproduct' exact component={EditProduct}/>
            <Route path='/admin/deleteproduct' exact component={DeleteProduct}/>
        </Switch>
      </div>
    </div>
  );
}




export default Main;
