
import {createSlice} from"@reduxjs/toolkit";
import Toast from"react-hot-toast";



const cartSlice = createSlice({
  name:"cartSlice",
  initialState:{
   items:JSON.parse(localStorage.getItem("cart"))||[],
  },
  reducers:{

    addToCart:(state,action)=>{
      const stock = action.payload.stock;
      const id = action.payload.id
     const itemIndex = state.items.findIndex((item)=>item.id == id);
     if(itemIndex == -1){
      state.items.push({quantity:1,id,stock});

     }else if(state.items[itemIndex].quantity < stock){
      state.items[itemIndex].quantity +=1;
     }else{
     
      return;
     }
     console.log(itemIndex) 
     localStorage.setItem("cart",JSON.stringify(state.items))
    },


    removeFromCart:(state,action)=>{
      const id = action.payload.id;
      const itemIndex = state.items.findIndex((item)=>item.id === id);
      if(itemIndex >=0){
        state.items.splice(itemIndex,1);
      }
      localStorage.setItem("cart",JSON.stringify(state.items))
    },
    incrementQuantity:(state,action)=>{
      const id = action.payload.id;
      const stock = action.payload.stock;
      const item =state.items.find((item)=>item.id === id);
      if(item.quantity == stock){
          return;
      }
      item.quantity +=1;
       localStorage.setItem("cart",JSON.stringify(state.items))  
      },
   
decrementQuantity:(state,action)=>{
  const id = action.payload.id;
  const item =state.items.find((item)=>item.id == id);
  if(item.quantity <=1){
    return;
  }
      item.quantity -= 1;
     localStorage.setItem("cart",JSON.stringify(state.items))   
},

}
 });

 export const{addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;
 export default cartSlice.reducer;