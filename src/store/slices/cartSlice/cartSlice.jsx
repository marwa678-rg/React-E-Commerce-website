
import {createSlice} from"@reduxjs/toolkit";




const cartSlice = createSlice({
  name:"cartSlice",
  initialState:{
    items:[]
  },
  reducers:{
    addToCart:(state,action)=>{

     const itemIndex = state.items.findIndex(
      (item)=>item.id == action.payload.id
     );
     if(itemIndex == -1){
      state.items.push({quantity:1,id:action.payload.id});

     }else{
      state.items[itemIndex].quantity +=1;
     }
     console.log(itemIndex) 
    },
    removeFromCart:(state,action)=>{
      const itemIndex = state.items.findIndex((item)=>item.id === action.payload.id);
      if(itemIndex >=0){
        state.items.splice(itemIndex,1);
      }

    },
    incrementQuantity:(state,action)=>{
      const itemIndex =state.items.findIndex((item)=>item.id ===action.payload.id);
      if(itemIndex>=0){
        state.items[itemIndex].quantity +=1;
      }
   },
decermentQuantity:(state,action)=>{
  const itemIndex =state.items.findIndex((item)=>item.id === action.payload.id);
  if(itemIndex >=0 && state.items[itemIndex].quantity >1){
    state.items[itemIndex].quantity -=1;
  }

},


  }
})
 export const{addToCart,removeFromCart,incrementQuantity,decermentQuantity} = cartSlice.actions;
 export default cartSlice.reducer;