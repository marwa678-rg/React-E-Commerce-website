
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from"axios";
import { useEffect } from 'react';
import { useState } from 'react';
import'./productDetails.css'
import Container from 'react-bootstrap/Container';
import Card from "react-bootstrap/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
import { useSelector } from 'react-redux';
import{useDispatch}from"react-redux";
import { setError, setLoading } from '../../store/slices/productsSlice/ProductsSlice';
import Spinner from 'react-bootstrap/esm/Spinner';
import { addToCart } from '../../store/slices/cartSlice/cartSlice';

export const ProductDetails = () => {
const [product,setProduct]=useState({})
 const {id} = useParams();
 const dispatch = useDispatch();
const loading = useSelector((state)=>state.products.loading);
const error = useSelector((state)=>state.products.error);
const navigate = useNavigate();
const stock=product.stock;

//'https://dummyjson.com/products/1'

async function fetchProductById(){
  dispatch(setLoading(true));
try {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
console.log(response.data)
setProduct(response.data);

} catch (error) {
dispatch(setError(error.message))
}finally{
  dispatch(setLoading(false))
}



}


useEffect(()=>{
  fetchProductById();
},[id])




function handleAddToCart(){
dispatch(addToCart({stock,id}) );
navigate('/cart')
}

function handleBuyNow(){};


if(loading)return <Spinner animation="border" />
if(error) return <div>Error:{error}</div>

return(
    <div>
           
      <Container className="py-4">
           <h1 className="header">Product Details</h1>
        <Card className="p-4   custom-card">
          <Row>
               <Col md={6}>
                  <Image  
                  src={product.thumbnail}
                  alt={product.title}
                  fluid
                  className="product-img"
                  />
               </Col> 

               <Col md={6}>
                <h2>{product.title}</h2>
                <h3>Brand:{product.brand}</h3>
                <p>{product.description}</p>
                <h4>price: ${Math.round(product.price)}</h4>
                <p>stock: {product.stock}</p>



               <div className="button-container">
                  <button className="add-btn" onClick={handleAddToCart}>Add To Cart</button>
                  <button className="buy-btn">Buy Now</button>
               </div>
               
               </Col>



          </Row>
        </Card>





























        {/* <div className="image-container">
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="txt-container">
          <h2>{product.title}</h2>
          <h3>Brand: {product.brand}</h3>
          <h4>category:{product.category}</h4>
          <p>{product.description}</p>
        </div>

       <div className="info-container">
        <p><strong>price: </strong>{product.price}</p>
        <p><strong>stock: </strong>{product.stock}</p>
        </div>

        <div className="button-container">


          <button className="add-btn">Add To Cart</button>
        </div> */}
      </Container>
      
    
    </div>
  )
}
