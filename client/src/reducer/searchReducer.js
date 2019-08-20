import {INPUT_SEARCH} from './../action/actionType';


const initialState={
  input:[],
  word:""
}


const inputSearch=(state=initialState,action)=>{
  switch (action.type) {
    case INPUT_SEARCH:
      return{
        input:action.payload,
        word:action.payload.length!==0?action.payload[0].search:""
      }
    default:
      return state;
  }
}

export default inputSearch;
