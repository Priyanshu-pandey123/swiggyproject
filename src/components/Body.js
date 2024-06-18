
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import { MAIN_DATA } from '../utils/constant';
import ResCard ,{WithPromotedLabel}  from './ResCard';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';





const Body = () => {
  const [searchText,setText]=useState(null);
  // const [filterData ,setfilterData,data,realData]=useRestaurantData();
  const [filterData,setfilterData]=useState(null);
  const [data,setdata]=useState(null);
  const [realData,setrealData]=useState(null);
  const PromotedLabel=WithPromotedLabel(ResCard);
  


      useEffect(()=>{
        fetchData();
        console.log("useEffect");
      },[])

      const fetchData = async()=>{
       const rawData=await fetch(MAIN_DATA);
       const json = await rawData.json();
       const apiData=await json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
       console.log(apiData,"apiDAta");
      setfilterData(apiData);
      setdata(apiData);
      setrealData(apiData);
      }

  
   const filteredTop=()=>{
     
        const filter=realData.filter((res)=>res?.info?.avgRating > 4.5);
        setfilterData(filter);
   }

   console.log(realData,"form Body");

   const status = useOnlineStatus();
   if(status==false ) return <h1> Looks ! like YOu Are offline </h1>
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
        

        {res.info.isOpen ? ( <PromotedLabel resData={res} /> ): (<ResCard resData={res} />)}
        {/* <ResCard
          
          resData={res}
        /> */}

        </Link>
        ))
     }

     </div>
    </div>
  )
}

export default Body
