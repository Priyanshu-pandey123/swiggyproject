import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { Link, useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';


const RestaurantMenu = () => {
    
    const {resId}=useParams();
    const resMenu=useRestaurantMenu(resId);
    if(resMenu==null) return <Shimmer/>;

  const {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    console.log(resMenu,"from resMenu");
  return (
    <div className='text-center'>
      <Link to="/">Back to Home</Link>
      <h1 className='text-5xl'>{resMenu?.cards[2]?.card?.card?.info?.name} </h1>
      <h1 className='text-3xl'>Menu</h1>
    <ul>
      {
        itemCards.map((item)=>(
          <li className='h-[30px] w-[300px] bg-slate-500 text-white m-2'  key={item.card.info.id}>{item.card.info.name}</li>
        ))
      }
      
    </ul>
    </div>
  )
}

export default RestaurantMenu
