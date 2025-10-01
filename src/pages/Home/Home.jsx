
import React from 'react'
import"./home.css";
import Carousel from"react-bootstrap/Carousel";
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import{ProductCard}from"../../components/ProductCard/ProductCard";
import{clearSearch}from"../../store/slices/searchSlice/searchSlice";
import { useEffect } from 'react';



export const Home = () => {
const {loading,error,results}=useSelector((state)=>state.search)
const dispatch=useDispatch();
//unmount of Home should clear the searchbar => using useEffect =>high ordered function

useEffect(()=>{

return()=>{
  dispatch(clearSearch());
}
},[]);
  
  return (
    <div className='home-container'>

  
        <SearchBar />
    

      <Carousel fade className="carousel-container">

        <Carousel.Item className='carousel-item'>
         <img 
         className='d-block w-100'
         src="/images/vitaly-gariev-15oNV9G27ss-unsplash.jpg " 
         alt="first Slide" />
         <Carousel.Caption className='carousel-caption'>
          <h3>Fashion Week</h3>
          <p>with NBM Visa Credit Card</p>
         </Carousel.Caption>
        </Carousel.Item>
  
      

       <Carousel.Item className='carousel-item' >
         <img 
         className='d-block w-100'
         src="images/pexels-ferarcosn-190819.jpg" 
         alt="second Slide" />
         <Carousel.Caption className='carousel-caption'>
          <h3>Discover,now</h3>
          <p>Click & Save</p>
         </Carousel.Caption>
        </Carousel.Item>


   <Carousel.Item className='carousel-item' >
         <img 
         className='d-block w-100'
         src="images/pexels-delot-19599328.jpg " 
         alt="third Slide" />
         <Carousel.Caption className='carousel-caption' >
          <h3> Discount 50 %</h3>
          <p>Shop now</p>
         </Carousel.Caption>
        </Carousel.Item>



      </Carousel>
                {/*Display-products from searchinput  */}
                <div className="search-products">
                    <h1>Search Results</h1>
                        {loading && <p>loading...</p>}
                        {error && <p>Error:{error}</p>}
                    <div className="product-grid">

                 
                  {results.map((item)=>(
                    <ProductCard 
                    key={item.id}
                    thumbnail={item.thumbnail}
                    brand={item.brand}
                    title={item.title}
                    price={item.price}
                    availabilityStatus={item.availabilityStatus}/>
                  ))}
                   
                

                

                    </div>
                </div>


    </div>
  )
}
