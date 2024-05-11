import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ResCard from './ResCard';
import Shimmer from './Shimmer';


const Body = () => {
     
  const [filterData,setfilterData]=useState(null);
  const [data,setdata]=useState(null);
  const [realData,setrealData]=useState(null);
   const [searchText,setText]=useState(null);

   const filteredTop=()=>{
     
        const filter=realData.filter((res)=>res?.info?.avgRating > 4.5);
        setfilterData(filter);
   }
      useEffect(()=>{
        fetchData();
        console.log("useEffect");
      },[])

      const fetchData = async()=>{
       const rawData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8467126&lng=80.9460872&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await rawData.json();
       const apiData=await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setfilterData(apiData);
      setdata(apiData);
      setrealData(apiData);
      }
      {if(filterData==null) return <Shimmer/>}
  return (
    <div>
     <div className='flex flex-row'>
      <div>
        <input className='m-[10px] border-black' type='text' placeholder='search here...' value={searchText} onChange={(e)=>{
          setText(e.target.value);
        }}></input>
        <button className='bg-black text-white m-2 p-1 rounded-3xl' onClick={()=>{
            const searchData = realData.filter((res)=>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterData(searchData);

        }}>Search</button>
      </div>
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
        <Link
        key={res?.info?.id}
        to={"/restaurant/"+res?.info?.id}>
        
        <ResCard
          
          resData={res}
        />

        </Link>
        ))


     }

     </div>
    </div>
  )
}

export default Body
