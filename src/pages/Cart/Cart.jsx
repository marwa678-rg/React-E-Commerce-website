
import React from 'react'
import { useSelector } from 'react-redux';
import axios from"axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import { LiaTrashSolid } from "react-icons/lia";
import'./cart.css';


export const Cart = () => {
const {items} = useSelector((state)=>state.cart);
const[products,setProducts]=useState([]);



//any async function it return  arrray of promise to solve this by promise.all that take array and turned it from pending to fullfil
async function getProducts(){

const newProducts = await Promise.all( items.map(async (item)=>{
const response = await axios.get(`https://dummyjson.com/products/${item.id}`);

return {...response.data,quantity:item.quantity};

})
)


setProducts(newProducts)



}
useEffect(()=>{
  getProducts()
},[items]);

function CartProduct({thumbnail, title,price,brand,quantity}){

  return(
 
    <div>
      <div className="image-container">
      <img src={thumbnail} alt={title} />
    </div>

    <div className="txt-container">
      <h1>{title}</h1>
      <p>brand: {brand}</p>
      <p>price:  ${Math.round(price)}</p>
    </div>
  <div className="quantity-container">
      <span> <FaRegPlusSquare  className="inc" onClick={()=>{
          console.log(1)
      }}/>
      {quantity}
      <FaRegMinusSquare className='dec' onClick={()=>{
        console.log(-1)
      }}/> 

      </span>

      {/* <LiaTrashSolid /> */}
    </div>

    </div>
 
  )
}

  return (
    <div className='cart-container'>
    <h1>My Cart</h1>
{products.length == 0 && <div>
  <h3>Add items in your cart...🛒</h3>
  <Link to="/products">Shop Now</Link>
  
  </div>}

    <div className="products-cart">
      {products.map((item)=>(

        <CartProduct 
        title={item.title}
        thumbnail={item.thumbnail}
        brand={item.brand}
        price={item.price}
        key={item.id}
        quantity={item.quantity}
        />

      ))}
          

    </div>
      
    {products.length > 0 && <div>
      <h1>Total Price = {Math.round()}</h1>
      </div>}
    
    
  
     
    </div>
  )
}
