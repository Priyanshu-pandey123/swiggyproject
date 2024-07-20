
import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data,showItems,setshowIndex,show}) => {
 
  console.log(setshowIndex);
    if(!data) return;
  
    const handleShowIndex=()=>{
      
      setshowIndex();

      console.log("clicked",showItems);

    }


    



  return (
    <div>
     <div className='bg-gray-50 mx-auto my-4 w-6/12 font-bold text-xl'>
       <div className='flex justify-between'>
       <span className=''>{data.title}({data?.itemCards.length})</span>
       <span className='cursor-pointer p-2 m-2 ' onClick={handleShowIndex}>⬇️</span>
       </div>
     { showItems && < ItemList items={data.itemCards}/>}
     </div>
    </div>
  )
}

export default RestaurantCategory;













// import ItemList from "./ItemList";

// const RestaurantCategory=({data,showItems,setshowIndex})=>{
//     // const [label,setlabel]=useState("show");

//      const handleClick=()=>{
//     //     label=="show"?setlabel("hide"):setlabel("show");
//     setshowIndex();
//     }


//     // console.log(data,"form RestaurantCategory");
//     return<div>
//          <div className="text-center w-6/12 mx-auto my-[10px] p-[10px]  bg-gray-50 shadow-lg text-black ">
//         <div className="flex justify-between cursor-pointer " onClick={handleClick}>
//         <span className="text-2xl ">{data?.title} ({data?.itemCards.length})</span>
//         <span className="">{showItems}+</span>
//         </div>
      
//        {   showItems  &&  <    ItemList items={data?.itemCards} /> }  
       
//     </div>
//     {/* Accordion Body */}
//     </div>
// }

//  export default RestaurantCategory;