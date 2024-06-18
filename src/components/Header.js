import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
  
  const status=true;
    console.log(status,"status")
  const [log,setLog]=useState("Login");

  return (
    <div>
    <nav class="bg-gray-800 p-4">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between">
        <img
        className='h-[120px] w-[120px] mr-[-10px]'
         src="https://c8.alamy.com/comp/PCYG1J/pizzeria-fast-food-logo-or-label-happy-chef-holding-pizza-and-scapula-in-hands-vector-illustration-PCYG1J.jpg"
         alt="not found"
        />
        <div class="flex-shrink-0">
          <a href="#" class="text-white font-bold text-lg">Food Order App</a>
        </div>
        <div class="hidden md:flex space-x-4">
          <div className={status ? "h-[30px] w-[30px] rounded-full bg-green-500" :"h-[30px] w-[30px] rounded-full bg-red-500" }></div>
         <Link to="/About" className='text-white'>About-Us</Link>
         <Link to="/About" className='text-white'>Contact-Us</Link>
         <Link to="/About" className='text-white'>Cart</Link>
         <Link to="/About" className='text-white'></Link>
         <button className={`text-white  ${log=="Login" ? "bg-green-500 h-[30px] p-1 rounded-lg text-white" : "bg-red-700 h-[30px] p-1 rounded-lg text-white"}`} onClick={()=>{log=="Login"?setLog("Logout"):setLog("Login")}}>{log}</button>
        </div>
      </div>
    </div>
  </nav>
  
    </div>
  )
}

export default Header

