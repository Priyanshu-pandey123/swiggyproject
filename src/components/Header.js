import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';


const Header = () => {
  
  const status=true;
  const [log,setLog]=useState("Login");
  const {loggedUser}=useContext(UserContext);
  const cartItems=useSelector((store)=>store.cart.items);

  return (
    <div>
    <nav className="bg-gray-800 p-4">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex justify-between">
        <img
        className='h-[120px] w-[120px] mr-[-10px]'
         src="https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg"
         alt="not found"
        />
        <div className="flex-shrink-0">
          <a href="#" className="text-white font-bold text-lg">Food Order App</a>
        </div>
        <div className="hidden md:flex space-x-4">
          <div className={status ? "h-[30px] w-[30px] rounded-full bg-green-500" :"h-[30px] w-[30px] rounded-full bg-red-500" }></div>
          <Link to="/" className='text-white'>Home</Link>
         <Link to="/About" className='text-white'>About-Us</Link>
         <Link to="/Contact" className='text-white'>Contact-Us</Link>
         <Link to="/cart" className='text-white'>Cart-{cartItems.length}</Link>
         <Link to="/About" className='text-white'></Link>
         <button className={`text-white  ${log=="Login" ? "bg-green-500 h-[30px] p-1 rounded-lg text-white" : "bg-red-700 h-[30px] p-1 rounded-lg text-white"}`} 
         onClick={ () => setLog(log === "Login" ? "Logout" : "Login")}>
                 
          
          {log}{loggedUser}</button>
        </div>
      </div>
    </div>
  </nav>
  
    </div>
  )
}

export default Header

