
import { Link } from 'react-router-dom';
import { useState,useEffect ,useContext} from 'react';
import { MAIN_DATA } from '../utils/constant';
import ResCard ,{withPromotedLable}  from './ResCard';
import Shimmer from './Shimmer';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import RestaurantMenu from './RestaurantMenu';





const Body = () => {
  const [searchText,setText]=useState(null);
  // const [filterData ,setfilterData,data,realData]=useRestaurantData();
  const [filterData,setfilterData]=useState(null);
  const [data,setdata]=useState(null);
  const [realData,setrealData]=useState(null);
  const {loggedUser,setUser}=useContext(UserContext);

  const WithPromotedResCard=withPromotedLable(ResCard);
  


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

  
   const filteredTop=()=>{
     
        const filter=realData.filter((res)=>res?.info?.avgRating > 4.5);
        setfilterData(filter);
   }


   const status = useOnlineStatus();
   if(status==false ) return <h1> Looks ! like YOu Are offline </h1>
  {if(filterData==null) return <Shimmer/>}
   return (
    <div>
     <div className='flex flex-row'>
      <div>
        
        <button className='bg-black text-white m-2 p-1 rounded-3xl' onClick={()=>{
            const searchData = realData.filter((res)=>
              res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterData(searchData);

        }}>
          Search 
          </button>

          <input className='m-[10px] border-black' type='text' placeholder='search here' value={searchText} onChange={(e)=>{
          setText(e.target.value);
        }}></input>


       <input className='m-[10px] border-black' type='text' placeholder='search here...' value={loggedUser} onChange={(e)=>{
          setUser(e.target.value);
        }}></input>

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
        
          {
             res.info.isOpen ?
             (<WithPromotedResCard resData={res}/> )
             :(<ResCard resData={res}/>)
          }
       

        </Link>
        ))
     }

     </div>
    </div>
  )
}

export default Body
