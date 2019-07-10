import {FETCH_PRODUCT,ADD_TO_CART,INC_ITEM,DIC_ITEM,REMOVE_ITEM} from './../action/actionType';


const initialState={
  allProducts:[],
  cartItems:[],
  totalItems:0
}

const productReducer=(state=initialState,action)=>{
  switch (action.type) {
    case FETCH_PRODUCT:
      return{
        ...state,
        allProducts:[...action.payload]
      }
    case ADD_TO_CART:
      let newCart=[...state.cartItems];
      let addTest=state.cartItems.findIndex(item=>{
        return item._id===action.payload._id;
      })
      if (addTest===-1) {
        newCart.push(action.payload._id);
      }
      let syncAdd=[...state.allProducts];
      syncAdd.map(item=>{
        return item._id===action.payload._id?item.qty+=1:null;
      })
      return{
        ...state,
        allProducts:syncAdd,
        cartItems:newCart,
        totalItems:newCart.length
      }
      case INC_ITEM:
        let syncInc=[...state.allProducts];

        syncInc.map(item=>{
          return item._id===action.payload._id?item.qty+=1:null;
        })
        return{
          ...state,
          allProducts:syncInc,
        }
      case DIC_ITEM:
        let syncDec=[...state.allProducts];
        syncDec.map(item=>{
          return item._id===action.payload._id?item.qty-=1:null;
        })
        return{
          ...state,
          allProducts:syncDec,
        }
      case REMOVE_ITEM:
      let removedCart=state.cartItems.filter(item=>{
        return item!==action.payload._id;
      });
      let removeSync=[...state.allProducts];
      removeSync.map(item=>{
        return item._id===action.payload._id?item.qty=0:null;
      })
      return {
        ...state,
        cartItems:removedCart,
        allProducts:removeSync,
        totalItems:removedCart.length
      }
      default:
      return state;
  }
}

export default productReducer;
