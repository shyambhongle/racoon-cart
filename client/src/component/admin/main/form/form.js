import React,{Component} from 'react';
import styles from './form.module.css';
import {connect} from 'react-redux';
import {addProduct} from './../../../../action/admin.js';
import {editProduct} from './../../../../action/admin.js';

class Form extends Component{
  state={
    id:"",
    title:"",
    img:null,
    dprice:0,
    price:0,
    weight:"",
    category:"",
    search:"",
    details:"",
    imgid:""
  }

componentWillMount(props){
    if (this.props.sync) {
      this.setState({
        id:this.props.sync._id,
        title:this.props.sync.title,
        dprice:this.props.sync.dprice,
        price:this.props.sync.price,
        weight:this.props.sync.weight,
        category:this.props.sync.category,
        search:this.props.sync.search,
        details:this.props.sync.details,
        imgid:this.props.sync.imageId
      })
    }
  }




  imageHandle=(e)=>{
    this.setState({
      img: e.target.files[0]
    })
   }


  changeHandler=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  submitHandler=(e)=>{
    e.preventDefault();
    const data = new FormData()
    data.append('id', this.state.id);
    data.append('img', this.state.img);
    data.append('title',this.state.title);
    data.append('price',this.state.price);
    data.append('dprice',this.state.dprice);
    data.append('weight',this.state.weight);
    data.append('category',this.state.category);
    data.append('search',this.state.search);
    data.append('imgid',this.state.imgid);
    data.append('details',this.state.details);
    this.props.title==="Add new Product"?
    this.props.addProduct(data):this.props.editProduct(data,this.state.img);
    this.setState({
      id:"",
      title:"",
      img:null,
      dprice:0,
      price:0,
      weight:"",
      category:"",
      search:"",
      details:"",
      imgid:""
    })
  }





  render(){
    return(
      <div className={styles.AddProduct}>
        <div className={styles.AddForm}>
          <div className={styles.FormTitle}><p>{this.props.title}</p></div>
          <form onSubmit={this.submitHandler}>
            <div className={styles.FormInput}>
              <label htmlFor="title">Product Title</label>
              <input id="title" name="title" value={this.state.title} type="text"
                onChange={this.changeHandler} placeholder=" eg. Red Label Tea" required/>
            </div>
            <div className={styles.FormImage}>
              <label htmlFor="image">Product Image</label>
              {this.props.sync?<input id="image" name="image" type="file" onChange={this.imageHandle}/>:
              <input id="image" name="image" type="file" onChange={this.imageHandle} required/>}
            </div>
            <div className={styles.FormPrice}>
              <label htmlFor="price">Orignal Price</label>
              <input id="price" name="price" type="text" onChange={this.changeHandler}
                value={this.state.price} placeholder=" eg. 300" required/>
              <label htmlFor="dprice">Discounted Price</label>
              <input id="dprice" name="dprice" type="text" onChange={this.changeHandler }
                value={this.state.dprice} placeholder=" eg. 150" required/>
            </div>
            <div className={styles.FormPrice}>
              <label htmlFor="weight">weight</label>
              <input id="weight" name="weight" onChange={this.changeHandler}
                value={this.state.weight}  type="text" placeholder=" eg. 250g" required/>
            </div>
            <div className={styles.FormSearch}>
              <label htmlFor="category">Category</label>
              <select id="category" name="category" value={this.state.category} onChange={this.changeHandler} >
                <option value="none" >No category</option>
                <option value="bestSelling">Best selling</option>
                <option value="trending">Trending</option>
                <option value="greatDeals" >Great deals</option>
              </select>
              <label htmlFor="search">Search</label>
              <input id="search" name="search" type="text" value={this.state.search}  placeholder=" eg. tea" onChange={this.changeHandler} required/>
            </div>
            <div className={styles.Details}>
              <label htmlFor="details">Product Details</label>
              <textarea id="details" value={this.state.details} onChange={this.changeHandler} name="details" placeholder="Some details about the product."></textarea>
            </div>
            <button>{this.props.title}</button>
          </form>
        </div>
      </div>
    )
  }
}




export default connect(null,{addProduct,editProduct})(Form);
