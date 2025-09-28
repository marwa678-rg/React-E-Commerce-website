
import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import'./searchbar.css';








export const SearchBar = () => {








  return (
  
  <div className='search-container'>
      <div className="search-wrapper">
            <input type="text"
            placeholder="search for product.."
            className='search-input'
            />
          
            <div className="search-icon">
              < IoSearchOutline style={{fontSize:"20px",cursor:"pointer"}}/>
          </div>



      </div>
    </div>
  )
}



   
  


   
  

