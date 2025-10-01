
import{createSlice}from"@reduxjs/toolkit";



const searchSlice = createSlice({
  name:"search",
  initialState:{
    query:"",
    results:[],
    error:null,
    loading:false,

  },
  reducers:{
    setQuery:(state,action)=>{
      state.query = action.payload;
    },
    setResults:(state,action)=>{
      state.loading= false;
      state.error=null, 
      state.results= action.payload;
    },
    setLoading:(state,action)=>{
      state.loading=action.payload;
    },
    setError:(state,action)=>{
      state.loading=false;
      state.error=action.payload;
    },
    clearSearch:(state,action)=>{
      state.query="";
      state.results=[];
    },
  }
})

export const {setQuery,clearSearch,setError,setLoading,setResults} = searchSlice.actions;
export default searchSlice.reducer;