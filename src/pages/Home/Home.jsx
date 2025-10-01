
import React from 'react'
import"./home.css";
import Carousel from"react-bootstrap/Carousel";
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import{ProductCard}from"../../components/ProductCard/ProductCard";
export const Home = () => {
const {items,loading,error} = useSelector((state)=>state.products);


  
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
                    <h1>searched items:</h1>
                        {loading && <p>loading...</p>}
                        {error && <p>Error:{error}</p>}
                    <div className="product-grid">

                      
                  {items.map((item)=>(
                    <ProductCard 
                    id={item.id}
                    thumbnail={item.thumbnail}
                    brand={item.brand}
                    title={item.title}/>
                  ))}
                   
                

                

                    </div>
                </div>


    </div>
  )
}
