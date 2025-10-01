import{configureStore}from"@reduxjs/toolkit";
import ProductsReducer from"./slices/productsSlice/ProductsSlice.jsx";
import cartReducer from"./slices/cartSlice/cartSlice.jsx";
import userReducer from"./slices/userSlice/userSlice.jsx";



export const store = configureStore({
  reducer:{
    products:ProductsReducer,
    cart:cartReducer,
    user:userReducer,
  },
});