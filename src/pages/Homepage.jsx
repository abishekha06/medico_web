import axios from 'axios'
import React, { useState } from 'react'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'; // Import the CSS
// import { toast } from 'react-toastify';

export default function Homepage() {
  const[userId, setUserid] = useState('')
  const[email , setEmail ] = useState('')
  const[password, setPassword] = useState('')
  const navigate = useNavigate()
  console.log("userId-----",userId)
  console.log("email----",email)
  console.log("password----",password)
  const Inputdata = (e)=>{
    setUserid(e.target.value)
    setEmail(e.target.value)
  }
  const Inputpassworddata = (e)=>{
    setPassword(e.target.value)
  }
  const submitsignin = async(e)=>{
    e.preventDefault()
    try{
      const response = await axios.post("http://52.66.145.37:3003/stockist/login",{
        userid:userId,
        password:password
      })
      // toast.success(response.data.message);
     console.log("response----",response)
     navigate('/csv')
     const id = response.data.data.id
     console.log("user_id----",id)
     localStorage.setItem("User_Id",id)
    }catch(err){
      console.log("error-----",err)
    }
  }
  return (
    <>
     {/* <ToastContainer
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
/> */}
   
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
      src="https://static.vecteezy.com/system/resources/previews/008/923/976/original/pharmacy-with-pharmacist-and-client-in-counter-drugstore-cartoon-character-design-illustration-vector.jpg"
      alt=""
    />
    <h2 className="title-login">LOGIN</h2>
    <div className="inputdiv">
      <input className="input-box" type="text" onChange={Inputdata} placeholder="User Id" />
      <input className="input-box" type="password" onChange={Inputpassworddata} placeholder="Password" />
      <button className="input-button" onClick={submitsignin}>SIGN IN</button>
     <div>
         <h6 style={{"display": "inline"}}>Don't have an account?</h6>
         <a href="signup" class="card-link textline" style={{"display": "inline"}}>Sign Up</a>
    </div>
    <a href="#" class="card-link">Forgot Password</a>

      
    </div>
  </div>

 
    </>
  )
}
