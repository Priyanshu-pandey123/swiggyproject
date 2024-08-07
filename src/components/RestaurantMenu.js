import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { Link, useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantCategory from './RestaurantCategory';


const RestaurantMenu = () => {
    const [showIndex,setshowIndex] = useState();
    const [showItems,setshowItems]=useState(true);
    const {resId}=useParams();
    const resMenu=useRestaurantMenu(resId);
 
    if(resMenu==null) return <Shimmer/>;
   

    // const {itemCards}=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
      
      const categories=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c)=>
        c?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  return (
    <div className='text-center'>
      <Link to="/">Back to Home</Link>
      <h1 className='text-5xl'> {resMenu?.cards[2]?.card?.card?.info?.name} </h1>
      <h1 className='text-3xl'> Menu</h1>
     
    {
      categories.map(
        (category,index)=><RestaurantCategory 
        key={category?.card?.card?.title}
         data={category?.card?.card}
         showItems={index==showIndex ? true:false}
         show={()=>setshowItems(!showItems)}
         setshowIndex={()=>setshowIndex(index)}
       />
        
      )
    }
    </div>
  )
}

export default RestaurantMenu



