import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import toast, { Toaster } from 'react-hot-toast';
import{Routes,Route}from"react-router-dom";
import { Header } from './components/Header/Header';
import{Footer}from"./components/Footer/Footer.jsx";
import{Home}from"./pages/Home/Home.jsx";
import{Products}from"./pages/Products/Products.jsx";
import{ProductDetails}from"./pages/ProductDetails/ProductDetails.jsx";
import{Login}from"./pages/Login/Login.jsx";
import{Cart}from"./pages/Cart/Cart.jsx";






function App() {
 
  return (
    <>
<Toaster />
{/* control setSidebar from icon  */}
<Header/>



<div className="main-container">

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/products" element={<Products/>}/>
  <Route path="/products/:id" element={<ProductDetails/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/cart" element={<Cart/>}/>
<Route path="*" element={<h1> Not Found 🙁</h1>}/>
</Routes>

</div>









<Footer/>
    </>
  )
}

export default App
