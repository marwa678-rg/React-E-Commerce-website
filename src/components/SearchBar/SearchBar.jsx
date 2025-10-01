

import React from 'react'
import'./searchbar.css';

import { IoSearchOutline } from "react-icons/io5";
import{setError, setLoading, setQuery, setResults}from"../../store/slices/searchSlice/searchSlice";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';




export const SearchBar = () => {
const {query}= useSelector((state)=>state.search);
const dispatch = useDispatch();




//'https://dummyjson.com/products/search?q=phone'

async function handleSearch(){
try {

  dispatch(setLoading(true));
  const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
console.log(response.data.products);
dispatch(setResults(response.data.products));

} catch (error) {
 dispatch(setError(error))
dispatch(setLoading(false))
}

}



  return (
    <div className="search-container">

      <div className="search-wrapper">

        <input type="text"
          placeholder="Search for product..."
          className="search-input"
          value={query}
          onChange={(e)=>{
            dispatch(setQuery(e.target.value));
          }}
        />
        <div className="search-icon" onClick={handleSearch}>
          <IoSearchOutline style={{fontSize:"20px",cursor:"pointer"}}/>
        </div>
      </div>



    </div>
  )
}
