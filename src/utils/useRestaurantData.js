import { MAIN_DATA } from "./constant";
import React, { useEffect, useState } from 'react'



const useRestaurantData=()=>{

    const [filterData,setfilterData]=useState(null);
    const [data,setdata]=useState(null);
    const [realData,setrealData]=useState(null);
    
  
  
        useEffect(()=>{
          fetchData();
        },[])
  
        const fetchData = async()=>{
         const rawData=await fetch(MAIN_DATA);
         const json = await rawData.json();
         const apiData=await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setfilterData(apiData);
        setdata(apiData);
        setrealData(apiData);
        }


        return [filterData ,setfilterData,data,setdata,realData,setrealData];
}

export default useRestaurantData;