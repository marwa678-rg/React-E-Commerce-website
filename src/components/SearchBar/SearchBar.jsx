

import React from 'react'
import'./searchbar.css';
import { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import {useDispatch}from"react-redux";
import { setProducts,setLoading,setError } from '../../store/slices/productsSlice/ProductsSlice';
import axios from "axios";
export const SearchBar = () => {
const [query,setQuery] = useState("");
const dispatch = useDispatch();

//'https://dummyjson.com/products/search?q=phone'

async function handleSearch(){
try {
  dispatch(setLoading(true));
  const response = await axios.get(`https://dummyjson.com/products/search?q=${query}`)
console.log(response.data.products);
dispatch(setProducts(response.data.products))

} catch (error) {
  dispatch(setError(error.message))
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
            setQuery(e.target.value)
          }}
        />
        <div className="search-icon" onClick={handleSearch}>
          <IoSearchOutline style={{fontSize:"20px",cursor:"pointer"}}/>
        </div>
      </div>



    </div>
  )
}
