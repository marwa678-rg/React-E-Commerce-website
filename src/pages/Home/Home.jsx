
import React from 'react'
import"./home.css";
import Carousel from"react-bootstrap/Carousel";
import { SearchBar } from '../../components/SearchBar/SearchBar';


export const Home = () => {


  
  return (
    <div className='home-container'>
      <Carousel>

        <Carousel.Item className='carousel-item'>
         <img 
         className='d-block w-100'
         src="/images/jess-bailey-NtNBbiaqH1I-unsplash.jpg" 
         alt="first Slide" />
         <Carousel.Caption className='carousel-caption'>
          <h3>Back TO School</h3>
          <p>with NBM Visa Credit Card</p>
         </Carousel.Caption>
        </Carousel.Item>
  
      

       <Carousel.Item className='carousel-item' >
         <img 
         className='d-block w-100'
         src="/images/freestocks-_3Q3tsJ01nc-unsplash (1).jpg" 
         alt="second Slide" />
         <Carousel.Caption className='carousel-caption'>
          <h3>Fashion Week</h3>
          <p>at Outlet Price</p>
         </Carousel.Caption>
        </Carousel.Item>


   <Carousel.Item className='carousel-item' >
         <img 
         className='d-block w-100'
         src="/images/vitaly-gariev-15oNV9G27ss-unsplash.jpg" 
         alt="third Slide" />
         <Carousel.Caption className='carousel-caption' >
          <h3>Extra savings</h3>
          <p>order now</p>
         </Carousel.Caption>
        </Carousel.Item>



      </Carousel>



    </div>
  )
}
