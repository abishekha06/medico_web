import React from 'react'
import './navbar.css'
// const navbarStyle = {
//     background: 'linear-gradient(to right, #005D97, #800080)', // Replace the color values with your desired gradient colors
//   };
export default function Navbar() {
  return (
    <>
  <nav class="navbar navbar-expand-lg " style={{"background-color": "#005D97"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:"white",fontSize:"30px",fontFamily:"inherit"}}>Medico</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="/csv" style={{color:"white"}}>File Upload</a>
        <a class="nav-link active" href="/list" style={{color:"white"}}>History</a>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}









{/* <nav class="navbar" style={{"background-color": "#005D97"}}>
<nav class="navbar" style={navbarStyle}> */}