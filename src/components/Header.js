import React, { useState } from 'react'

const Header = () => {
  
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
          <a href="#" class="text-white hover:text-gray-300">Home</a>
          <a href="#" class="text-white hover:text-gray-300">About</a>
          <a href="#" class="text-white hover:text-gray-300">Services</a>
          <a href="#" class="text-white hover:text-gray-300">Contact</a>
          <a href="#" class="text-white hover:text-gray-300">{log}</a>
        </div>
      </div>
    </div>
  </nav>
  
    </div>
  )
}

export default Header

