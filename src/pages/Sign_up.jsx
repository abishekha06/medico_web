import axios from 'axios'
import React, { useState } from 'react'
import './Sign_up.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
import { toast } from 'react-toastify';

export default function Sign_up() {
  const[input, setInput] = useState({
    name:"",
    business_name:"",
    phone:"",
    email:"",
    password:""
  })
  const inputchange =(e)=>{
    const{name,value} = e.target
    setInput({...input,[name]:value})
  }
  const submitinputdata =async (e)=>{
    e.preventDefault();
    try{
      const response = await axios.post("http://52.66.145.37:3003/stockist/register",input)
      console.log("response_data-----",response.data)
      setInput({
        name:"",
        business_name:"",
        phone:"",
        email:"",
        password:""
      })
      toast.success(response.data.message);
    }catch(err){
      console.log("error----",err)
    }

  }
  return (
   <>
    <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="light"
/>
<meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>LOGIN</title>
  <link rel="stylesheet" href="style.css" />
  <div className="hero">
    <img className="background" src="https://img.freepik.com/free-photo/abstract-blur-defocused-pharmacy-drug-store_1203-9459.jpg?w=1060&t=st=1698649735~exp=1698650335~hmac=c4867749629e566434a83c67810637462014e70404693e24c7295d2c52cc1c95" alt="" />
  </div>
  <div className="tax-login">
    <img
      className="topimage"
      src="https://img.freepik.com/premium-vector/lab-assistant-working-laboratory_701961-3931.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais"
      alt=""
    />
    <h2 className="title-login">SIGN UP</h2>
    <div className="inputdiv">
      <div className="top-section">
        <input className="input-box" type="text" name="name" onChange={inputchange} placeholder="Name" />
        <input
          className="input-box"
          type="text"
          placeholder="Business Name"
          name="business_name"
          onChange={inputchange}
        />
      </div>
      <div className="top-section 2nd-section">
        <input className="input-box" type="text" name="phone" onChange={inputchange} placeholder="Phone Number" />
        <input className="input-box" type="email" name="email"  onChange={inputchange} placeholder="Email Id" />
      </div>
      <div className="3rd-section">
        <input className="input-box" type="password" name="password" onChange={inputchange} placeholder="Password" />
      </div>
      <button className="input-button" onClick={submitinputdata}>SIGN UP</button>
    </div>
  </div>          
   </>
  )
}
