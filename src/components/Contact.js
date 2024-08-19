import React from 'react';

const Contact = () => {
  return (
    <div className='flex  flex-col  w-6/12  text-center align-bottom'>
   <div>
   <h1 className=' text-3xl font-bold'>Priyanshu Pandey</h1>
    <form className='text-center flex flex-col'>
      <input className='p-3 m-3 bg-purple-400 text-red-500 rounded-lg shadow border-b border-white' placeholder='name'/>
      <input className='p-3 m-3 bg-purple-300 text-black rounded-lg shadow' placeholder='email'/>
      <input className='p-3 m-3 bg-purple-200 text-black rounded-lg shadow' placeholder='address'/>
      <button className='p-3 m-3 bg-black text-white rounded-lg shadow-sm'>submit</button>
    </form> 
    
   </div>
    </div>
    
  )
}

export default Contact
