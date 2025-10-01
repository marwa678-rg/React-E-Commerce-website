
import React from 'react'
import"./home.css";
import Carousel from"react-bootstrap/Carousel";
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import{clearSearch}from"../../store/slices/searchSlice/searchSlice";
import { useEffect } from 'react';
import{Link}from"react-router-dom";


export const Home = () => {
const {query,loading,error,results}=useSelector((state)=>state.search)
const dispatch=useDispatch();
//unmount of Home should clear the searchbar => using useEffect =>high ordered function

useEffect(()=>{

return()=>{
  dispatch(clearSearch());
}
},[dispatch]);
  
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
                   <h1 style={{textAlign:"center",fontWeight:"bold"}}>Search Results</h1>
                        {loading && <p>loading...</p>}
                        {error && <p>Error:{error}</p>}

                    <div className="product-grid">
                        
            {results.length == 0 ?(<p style={{textAlign:"center",fontWeight:"bold", color:"darkred"}}>No Product Found</p>):(

                    results.map((p)=>(
                  <div className="product-card-search" key={p.id}>
                      <div className="image"> <img src={p.thumbnail} alt={p.title} /></div>
                      <div className="txt-product">
                        <h1>{p.title}</h1>
                        <h3> Brand: {p.brand}</h3>
                        <p>discription: {p.description}</p>
                        <p>price: ${Math.round(p.price)}</p>
                    
                      </div>
                      <div className="login-link">
                        <Link to={"/login"}>Join Us Now</Link>
                      </div>
                  </div>
                ))


            ) }     
                
                

                

                    </div>
                </div>


    </div>
  )
}
