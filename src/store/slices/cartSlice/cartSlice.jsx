
import {createSlice} from"@reduxjs/toolkit";
import Toast, { toast } from"react-hot-toast";


const savedCart= JSON.parse(localStorage.getItem("cart")) || [];
const cartSlice = createSlice({
  name:"cartSlice",
  initialState:{
   items: savedCart,
  },
  reducers:{

    addToCart:(state,action)=>{
   const{id,stock}= action.payload;
     const itemIndex = state.items.findIndex((item)=>item.id ==id);

     if(itemIndex === -1){
      state.items.push({id,stock,quantity:1});
      toast.success("ADDED TO CART");
     }else if(state.items[itemIndex].quantity < stock ){
      state.items[itemIndex].quantity += 1;
     }
    localStorage.setItem("cart",JSON.stringify(state.items))
    },
  

    removeFromCart:(state,action)=>{
    const id =action.payload.id
      const itemIndex = state.items.findIndex((item)=>item.id ==id);
      if(itemIndex >= 0){
        state.items.splice(itemIndex,1);
      }
     localStorage.setItem("cart", JSON.stringify(state.items));
    },

    incrementQuantity:(state,action)=>{
    const{id,stock}=action.payload;
      const item =state.items.find((item)=>item.id ==id);
      if(!item||item.quantity >= stock) return;
      item.quantity +=1;
       localStorage.setItem("cart",JSON.stringify(state.items)) ;
      },
   
decrementQuantity:(state,action)=>{
const id= action.payload.id;

  const item =state.items.find((item)=>item.id ==id);
  if(!item ||item.quantity <=1) return;
      item.quantity -= 1;
   localStorage.setItem("cart",JSON.stringify(state.items));  
},


  },

 });

 export const{addToCart,removeFromCart,incrementQuantity,decrementQuantity} = cartSlice.actions;
 export default cartSlice.reducer;