import'./products.css';
import React, { useEffect } from 'react'
import axios from"axios";
import {useDispatch, useSelector}from"react-redux";
import{setLoading,setError,setProducts}from"../../store/slices/productsSlice/ProductsSlice.jsx";
import Spinner from 'react-bootstrap/Spinner';
import { ProductCard } from '../../components/ProductCard/ProductCard.jsx';
import'./products.css';


export const Products = () => {


const products = useSelector(state=>state.products.items);
const loading =useSelector(state=>state.products.loading)
const error = useSelector(state=>state.products.error);
const dispatch=useDispatch();


//'https://dummyjson.com/products'

async function fetchAllProducts(){
dispatch(setLoading(true));



try {
    const response = await axios.get('https://dummyjson.com/products');
    console.log(response.data.products);
  dispatch(setProducts(response.data.products));


} catch (error) {
  dispatch(setError(error.message));

}finally{
  dispatch(setLoading(false));
}




  }

  useEffect(()=>{
    fetchAllProducts();
  },[])


  if(loading) return<Spinner animation="border" />
  if(error)return <div>Error:{error}</div>


  return (
    
    <div className='products-page'>
      <h1>products</h1>

      
      <div className="products-container">

      {products.map((item)=>{
          return ( <ProductCard  
          key={item.id}
          thumbnail={item.thumbnail}
          brand={item.brand}
          availabilityStatus={item.availabilityStatus}
          price={item.price}
          rating={Math.round(item.rating)}
          title={item.title}
          id={item.id}
          stock={item.stock}
          />
      );
        })}
        

      </div>
      
    </div>
   
  )
}
