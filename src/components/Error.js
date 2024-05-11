import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err=useRouteError();
  return (
    <div className='h-[1000px] w-full bg-purple-400'>
      <h1 className='text-white-500 text-7xl text-center'>OOps somethig Went Wrong</h1>
      <h2 className='text-white-500 text-7xl text-center'>{err.status}:{err.statusText}</h2>
    </div>
  )
}

export default Error
