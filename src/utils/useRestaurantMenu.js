import { MENU_API } from '../utils/constant';
import { useState,useEffect } from 'react';

const useRestaurantMenu=(resId)=>{
    const [resMenu,setresMenu]=useState(null);
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async()=>{
      //  const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=355000&catalog_qa=undefined&isMenuUx4=true&submitAction=ENTER");
      const data=await fetch(MENU_API+resId);
        const json=await data.json();
        console.log(json,"from resMenu1111111111");
        
        setresMenu(json.data);
        console.log(resMenu,"from resMenu");
    }       

return resMenu;
}

export default useRestaurantMenu;