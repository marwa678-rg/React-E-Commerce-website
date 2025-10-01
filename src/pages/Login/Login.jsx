import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './login.css';
import{useDispatch}from"react-redux";
import axios from"axios";
import {login}from "../../store/slices/userSlice/userSlice";
import { useRef } from 'react';
import Toast from'react-hot-toast';
import{useNavigate}from"react-router-dom";



export const Login = () => {
//username:"emilys",
//password:"emilyspass"
//'https://dummyjson.com/user/login'

const dispatch=useDispatch();
const usernameRef = useRef();
const passwordRef =useRef();
const navigate = useNavigate();


async function handleFormSubmit(e){
  e.preventDefault();
const data = { username:usernameRef.current.value,password:passwordRef.current.value};
try {
const response = await axios.post("https://dummyjson.com/user/login",data)
console.log(response.data);
 dispatch(login(response.data));
 Toast.success("login successful");
navigate("/cart");

} catch (error) {
  console.log(error);
  Toast.error(error.response.data.message ||"some thing went wrong");
}

}







  return (
    <div className="loginPage">
      <h1>login page</h1>
      <Form className="login-form" onSubmit={handleFormSubmit}>
        
      <Form.Group className='mb-3' controlId='formBasicName'>
        <Form.Label>Your name</Form.Label>
        <Form.Control 
        className="login-input" 
        type="text" 
        placeholder='Enter your name'
       ref={usernameRef}
        />
      </Form.Group>


      <Form.Group className='mb-3 ' controlId='formBasicPassword'>
        <Form.Label>Your password</Form.Label>
        <Form.Control 
        className="login-input" 
        type="password" 
        placeholder='password'
      ref={passwordRef}
        />
      </Form.Group>
    


<Button variant="primary" type="submit" className="submit-btn"> Login</Button>

      </Form>
      


    </div>
  )
}
