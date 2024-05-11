import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { Link, useParams } from 'react-router-dom';
import { MENU_API } from '../utils/constant';

const RestaurantMenu = () => {
    const [resMenu,setresMenu]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
      //  const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=355000&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
      const data=await fetch(MENU_API+resId);
        const json=await data.json();
        console.log(json,"from resMenu");
        // const resInfo=json?.data?.;
        setresMenu(json.data);
        // console.log(resMenu,"from resMenu");
        
        
    }
     

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
