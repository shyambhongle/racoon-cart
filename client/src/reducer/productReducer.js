import {FETCH_PRODUCT,ADD_TO_CART,INC_ITEM,DIC_ITEM,REMOVE_ITEM,INPUT_CLICK,CLEAR_CART,CLEAR_SEARCH} from './../action/actionType';


const initialState={
  allProducts:[],
  cartItems:[],
  totalItems:0,
  inputSearch:[],
  totalPrice:0
}

const productReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FETCH_PRODUCT:
      return{
        ...state,
        allProducts:[...action.payload]
      }
    case INPUT_CLICK:
      let searchedProducts=[];
      action.payload.map(items=>{
        return state.allProducts.map(i=>{
          return i._id===items._id && searchedProducts.push(i);;
        })
      })
      return {
        ...state,
        inputSearch:searchedProducts
      };
      case CLEAR_SEARCH:
      let deleteProduct=state.inputSearch.filter(item=>{
        return item._id!==action.payload;
      });
      return {
        ...state,
        inputSearch:deleteProduct
      }
    case ADD_TO_CART:
      let newCart=[...state.cartItems];
      let addTest=state.cartItems.findIndex(item=>{
        return item._id===action.payload._id;
      })
      if (addTest===-1) {
        newCart.push(action.payload);
      }
      let syncAdd=[...state.allProducts];
      syncAdd.map(item=>{
        return item._id===action.payload._id?item.qty+=1:null;
      })
      return{
        ...state,
        allProducts:syncAdd,
        cartItems:newCart,
        totalItems:newCart.length,
        totalPrice:state.totalPrice+=action.payload.dprice
      }
      case INC_ITEM:
        let syncInc=[...state.allProducts];

        syncInc.map(item=>{
          return item._id===action.payload._id?item.qty+=1:null;
        })
        return{
          ...state,
          allProducts:syncInc,
          totalPrice:state.totalPrice+=action.payload.dprice
        }
      case DIC_ITEM:
        let syncDec=[...state.allProducts];
        syncDec.map(item=>{
          return item._id===action.payload._id?item.qty-=1:null;
        })
        return{
          ...state,
          allProducts:syncDec,
          totalPrice:state.totalPrice-=action.payload.dprice
        }
      case REMOVE_ITEM:
      let removedCart=state.cartItems.filter(item=>{
        return item._id!==action.payload._id;
      });
      let removeSync=[...state.allProducts];
      let removePrice=0;
      removeSync.map(item=>{
        if (item._id===action.payload._id) {
          removePrice=item.dprice*item.qty
        }
        return item._id===action.payload._id?item.qty=0:null;
      })
      return {
        ...state,
        cartItems:removedCart,
        allProducts:removeSync,
        totalItems:removedCart.length,
        totalPrice:state.totalPrice-=removePrice
      }
      case CLEAR_CART:
        return {
        ...state,
        cartItems:[],
        totalItems:0,
        inputSearch:[],
        totalPrice:0
      }
      default:
      return state;
  }
}

export default productReducer;
