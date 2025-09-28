import React from 'react'
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import"./productcard.css";
import{useState}from"react";
import{Link, useNavigate}from"react-router-dom";
import { addToCart } from '../../store/slices/cartSlice/cartSlice';
import{useDispatch}from"react-redux";
import{toast}from"react-hot-toast";

export const ProductCard = ({thumbnail,price,title,rating,brand,availabilityStatus,id}) => {
  const [isRate,setIsRate] = useState(false);
  const dispatch = useDispatch();


  //add to cart button
function handleAddToCart(){
dispatch(addToCart({id}));
toast.success("product added successfully");

}


  return (
    <div className="product-card">
      <div className="image-container">
        <img src={thumbnail} alt={title} />
        <div className="rating-container">
          <span> {rating} </span>
{isRate &&  <FaStar  color="yellow" className="star-icon"  onClick={()=>{
        setIsRate(false);
      }}/>}

 {!isRate && <CiStar color="yellow" className="star-icon" onClick={()=>{
            setIsRate(true);
          }}/>}         

     


        </div>
      </div>
      <div className="txt-container">
        <Link to={`/products/${id}`} style={{textDecoration:"none"}}><h1>{title}</h1> </Link>
        <h3>Price: $ {Math.round(price)}</h3>
        <p>{brand}</p>

      </div>
      <div className="status-container">
        {availabilityStatus === "In Stock"? (<button onClick={handleAddToCart}>Add To Cart</button>):(<p>Product Not Avaliable !</p>)}
      </div>
    </div>
  )
}
