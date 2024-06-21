import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setshowIndex})=>{
    // const [label,setlabel]=useState("show");

     const handleClick=()=>{
    //     label=="show"?setlabel("hide"):setlabel("show");
    setshowIndex();
    }


    // console.log(data,"form RestaurantCategory");
    return<div>
         <div className="text-center w-6/12 mx-auto my-[10px] p-[10px]  bg-gray-50 shadow-lg text-black ">
        <div className="flex justify-between cursor-pointer " onClick={handleClick}>
        <span className="text-2xl ">{data?.title} ({data?.itemCards.length})</span>
        <span className="">{showItems}+</span>
        </div>
      
       {   showItems  &&  <    ItemList items={data?.itemCards} /> }  
       
    </div>
    {/* Accordion Body */}
    </div>
}

 export default RestaurantCategory;