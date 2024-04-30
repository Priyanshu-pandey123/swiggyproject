import React, { useEffect, useState } from 'react'
import Header from './Header'
import ResCard from './ResCard';
import {resList} from '../utils/mockData';
import Shimmer from './Shimmer';


const Body = () => {
     
  const [filterData,setfilterData]=useState(null);
  const [data,setdata]=useState(null);

   const filteredTop=()=>{
     
        const filter=filterData.filter((res)=>res?.card?.info?.ratings?.aggregatedRating?.rating>4);
        setfilterData(filter);
   }
      useEffect(()=>{
        fetchData();
        console.log("useEffect");
      },[])

      const fetchData = async()=>{
       const rawData=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.87560&lng=80.91150&restaurantId=637321&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
       const json = await rawData.json();
      
       const apiData=await json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards;
      const finalData=await apiData[12]?.card?.card?.itemCards;
      console.log("final data",finalData);
      setdata(finalData);
      setfilterData(finalData);
      }
      {if(filterData==null) return <Shimmer/>}
  return (
    <div>
      <Header/>
     <div className='flex flex-row'>
    <div>
       <button className='bg-black text-white m-2 p-1 ' onClick={filteredTop}>TOP RATED RESTAURANT</button>
     </div>
     <div className='ml-[30px]'>
     <button className='bg-black text-white m-2 p-1 ' onClick={()=>{setfilterData(data)}}>All RESTAURANT RESTAURANT</button>
     </div>


    </div>

      <div className='flex flex-row justify-between flex-wrap'>
     
     {
        filterData.map((res)=>(
          <ResCard
          key={res?.card?.info?.id}
          resData={res}
        />
        ))


     }

     </div>
    </div>
  )
}

export default Body
