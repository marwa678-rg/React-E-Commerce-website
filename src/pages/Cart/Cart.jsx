
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from"axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import'./cart.css';
import { decermentQuantity, incrementQuantity, removeFromCart } from '../../store/slices/cartSlice/cartSlice';

export const Cart = () => {
const {items} = useSelector((state)=>state.cart);
const[products,setProducts]=useState([]);
const dispatch=useDispatch();
const{loading,error}= useSelector(state=>state.products);


//any async function it return  arrray of promise to solve this by promise.all that take array and turned it from pending to fullfil
async function getProducts(){
  try {
            
        const newProducts = await Promise.all( items.map(async (item)=>{
        const response = await axios.get(`https://dummyjson.com/products/${item.id}`);

        return {...response.data,quantity:item.quantity,id:item.id};

        })
        );


        setProducts(newProducts);



  } catch (error) {
    console.log(error);
  }

}
      useEffect(()=>{
        getProducts()
      },[items]);

function CartProduct({thumbnail, title,price,brand,quantity,id}){

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


      <FaRegPlusSquare  style={{fontSize:"30px",cursor:"pointer"}} className='inc' onClick={()=>{
         dispatch(incrementQuantity ({id}));
      }}/>


     <span>{quantity}</span>

      <FaRegMinusSquare  style={{fontSize:"30px",cursor:"pointer"}} className='dec'  onClick={()=>{
        dispatch(decermentQuantity ({id}));
      }}/> 

      

    </div>

    <div className="remove-btn">
      <button className="remove-btn" onClick={()=>{
        dispatch(removeFromCart({id}))
      }}> 🗑️</button>
    </div>

    </div>
 
  )
}
const totalPrice = products.reduce((sum,item)=>sum + item.price * item.quantity,0);
console.log(totalPrice);
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
        id={item.id}
        quantity={item.quantity}
        />

      ))}
          

     </div>
      
    {products.length > 0 && <div>
      <h1>Total Price =$ {totalPrice}</h1>
      </div>}
    
    
  
     
    </div>
  )
}
