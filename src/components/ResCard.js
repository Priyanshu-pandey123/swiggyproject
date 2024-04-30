import React from 'react'
import { IMAGE } from '../utils/mockData';

const ResCard = (props) => {
  const {resData}=props;
  console.log(resData,"ResData");


  return (
  
    <div>
      <div className='w-[200px] h-[300px]  border-2 m-[10px] p-2'>
        <img
        className='h-30% w-full border-2'
        src={IMAGE+resData?.card?.info?.imageId}
        alt="not found"
        />
        <h3>{resData?.card?.info?.name}</h3>
        <h3>{resData?.card?.info?.price}</h3>
        <h3>{resData?.card?.info?.ratings?.aggregatedRating?.rating}</h3>
       
      </div>
    </div>
  )
}

export default ResCard;