import React, { useState } from 'react'
import { GrLocation } from "react-icons/gr";
import { CgShoppingCart } from "react-icons/cg";
import { AiFillAmazonCircle } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";
import"./header.css";
import { SearchBar } from '../SearchBar/SearchBar';
import{NavLink, useNavigate}from"react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import{logout}from"../../store/slices/userSlice/userSlice";

export const Header = () => {
const[isOpen,setIsOpen] = useState(false);
const navigate= useNavigate();
const {items} =useSelector((state)=>state.cart);
const {isLoggedIn}= useSelector(state=>state.user);
const dispatch = useDispatch();

function handleIsOpen(){
  setIsOpen((prev)=>!prev);
  };



//logout function onClick
function handleLogout(){
dispatch(logout());
}




  return (
    <div className='header-container'>

      <div>
        <AiFillAmazonCircle className='logo' style={{color:"yellow",cursor:"pointer"}}/>
      </div>

      <div className='location-container'>
            <div className='location-icon'>
              <GrLocation style={{fontSize:"20px"}}/>
            </div>

            <div className='txt-location'>
                <span>Deliver to EGYPT</span>
            </div>
        </div>

        <div className={`nav ${isOpen ? "isActive" :""}`}>
          <div className="close-btn"onClick={()=>{setIsOpen(false)}}>
            <IoCloseCircleSharp style={{fontSize:"30px",cursor:"pointer"}}/>
          </div>
          
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/products"}>Products</NavLink>


          {!isLoggedIn &&  (  <NavLink to={"/login"}>Login</NavLink>)}
        {isLoggedIn && (<button className="logout-btn" onClick={handleLogout}>logout</button>)}
        </div>
      
   
      

     <div className='icons-container'>
          <div className='cart-container'>
              <div>
                <span>{items.length}</span>
              </div>

              <div>
               <CgShoppingCart style={{fontSize:"30px"}} onClick={()=>{
                      navigate("/cart");
                }} />
                
              </div>
          </div>
              
          {/*in small screen  */}
            <div >
              <MdOutlineMenu style={{fontSize:"30px",cursor:"pointer",}}
              className='toggle-bar'
              onClick={handleIsOpen}/>
            </div>
     </div>
       
      
     

    </div>
  )
}
