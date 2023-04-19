import React from 'react'
import '../styles/navbar.css'
import {FaUser} from "react-icons/fa"
import {HiShoppingCart} from "react-icons/hi"
import { Link } from 'react-router-dom'



const Navbar = () => {



  return (
<>
   <div id="nav">
       <img src="https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" alt="" />
  
       <input type="text" placeholder='Find your favourite products' />
       <div>
        <p>select your pincode</p>
        <p> <HiShoppingCart /> cart</p>
        <p><FaUser/> login</p>
        
       </div>
   </div>

   <div id="nav2" >
    
      <p>MOBILE&TABLETS </p>
      <Link to="/television" >
      <p>TELEVISON</p>
    </Link>
     
      <p>AUDIO</p>
      <p>HOME APPLIANCES</p>
      <Link to="/camera">
      <p>CAMERA</p>
      </Link>
      
      <p>COMPUTER</p>
      <p>KITCHEN APPLICANCES</p>
      <p>PERSONAL CARE</p>
      <p>ACCESSORIES</p>
   </div>
   </>
  )
}

export default Navbar