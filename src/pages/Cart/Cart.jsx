
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import axios from"axios";
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegPlusSquare } from "react-icons/fa";
import { FaRegMinusSquare } from "react-icons/fa";
import'./cart.css';
import { decrementQuantity, incrementQuantity, removeFromCart } from '../../store/slices/cartSlice/cartSlice';
import{toast}from"react-hot-toast";
import { IoArrowBackCircle } from "react-icons/io5";








//https://dummyjson.com/products/1
export const Cart = () => {
const {items} = useSelector((state)=>state.cart);
const[products,setProducts]=useState([]);
const dispatch=useDispatch();
const{loading,error}= useSelector(state=>state.products);
const{isLoggedIn,user}= useSelector(state=>state.user);
const navigate= useNavigate();

//any async function it return  arrray of promise to solve this by promise.all that take array and turned it from pending to fullfil
async function getProducts(){
  try {
            
        const newProducts = await Promise.all( 
          items.map(async (item)=>{
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
        getProducts();
      },[items])



//component for each product in cart
   function CartProduct({thumbnail, title,price,brand,quantity,id,stock}){
   
  return(
 
    <div className='cart-product'>
        <div className="image-container">
            <img src={thumbnail} alt={title} />
        </div>

          <div className="txt-container">
            <h1>{title}</h1>
            <p>brand: {brand}</p>
            <p>price:  ${Math.round(price)}</p>
            <p>Avaliable stock: {stock}</p>
          </div>


    
          <div className="quantity-container">


             <FaRegPlusSquare  style={{fontSize:"30px",cursor:"pointer"}} className='inc' onClick={()=>{
              dispatch(incrementQuantity ({id,stock}));
             }}/>
              <span>{quantity}</span>
              <FaRegMinusSquare  style={{fontSize:"30px",cursor:"pointer"}} className='dec'  onClick={()=>{
                dispatch(decrementQuantity({id}));
              }}/> 
          </div>


          <div className='remove-btn'>
            <button  onClick={()=>{
                      dispatch(removeFromCart({id}))
                    }}> Remove item</button>
         </div>

       </div>
 
  );
}













       
        

      //if not logged in redirect to login page
useEffect(()=>{
  if(isLoggedIn === false){
    navigate("/login");
    toast.error("please login to access cart");
  }
},[isLoggedIn]);


//calculate total price of all items in cart
const totalPrice = products.reduce((sum,item)=>sum + (item.price * item.quantity),0).toFixed(2);
//console.log(totalPrice);












  return (
    <div className='mycart-container'>
    <h1>My Cart</h1>

    {loading && <h1>Loading products...</h1>}
    {error && <p>{error}</p>}
    {products.length === 0 &&<div><h3>Add items in your cart...🛒</h3><Link to="/products">Shop Now</Link></div>}

    <div className="myproducts-cart">
      {products.map((item)=>(

        <CartProduct 
        key={item.id}
        title={item.title}
        thumbnail={item.thumbnail}
        brand={item.brand}
        price={item.price}
        id={item.id}
        quantity={item.quantity}
        stock={item.stock}
        />

      ))}
          

     </div>
      
    {products.length > 0 && <div className="total-price">
      <h1>Total Price =<span>$ {totalPrice} </span></h1>
      <Link to="/products" className="continue-btn">
      <IoArrowBackCircle className='arrow-icon' style={{fontSize:"25px",color:"#000B58 ",marginRight:"5px"}}/> Continue Shopping 
      </Link>
      </div>}
    
    
  
     
    </div>
  )
}
