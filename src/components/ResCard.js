import React from 'react'
import { IMAGE } from '../utils/mockData';

const ResCard = (props) => {
 
  const {resData}=props;
  



  return (
  
    <div>
      <div className='w-[200px] h-[300px]  border-2 m-[10px] p-2'>
        <img
        className='h-30% w-full border-2'
        src={IMAGE+resData?.info?.cloudinaryImageId}
        alt="not found"
        />
        <h3>{resData?.info?.name}</h3>
        <h3>{resData?.info?.price}</h3>
        <h3>{resData?.info?.avgRating}</h3>
       
      </div>
    </div>
  )
}


export const withPromotedLable=(ResCard)=>{
  return (res)=>{
    return<>
    <label className='p1-1 px-5 rounded-r-lg-lg ml-3 mt-3 bg-black text-white absolute  ' >open</label>
    <ResCard {...res}/>   
    </>



  }
}



export default ResCard;