
import{createSlice}from"@reduxjs/toolkit";


export const productsSlice = createSlice({
  name:"products",
  initialState:{
    items:[],
    loading:false,
    error:null,
  },
  reducers:{
    setProducts:(state,action)=>{
      state.items = action.payload;
      state.loading=false;
      state.error=null;
    },
    setLoading:(state,action)=>{
      state.loading=action.payload;
    },
    setError:(state,action)=>{
      state.error= action.payload;
     state.loading= false;
    }
  }
})

export const{setProducts,setLoading,setError} = productsSlice.actions;
export default productsSlice.reducer;