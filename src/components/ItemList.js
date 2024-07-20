
import React from 'react'
import ItemCard from './ItemCard';


const ItemList = ({items,show}) => {
    console.log(show,"shooooo")
  return (
    <div>
    {
      items.map((item,i)=>  <ItemCard key={i} item={item}/> )
    }
    </div>
  )
}

export default ItemList













// import { useDispatch } from "react-redux";
// import { addItem, removeItem } from "../utils/cartSlice";
// import { IMAGE } from "../utils/mockData";
// import { useState } from "react";

// const ItemList=({items})=>{
//     console.log(items,"from itemList");
//     const [adder,setAdder]=useState({});  //adder={13: true, 2:true}, 17:true}
//     const dispatch=useDispatch();

//        const handleAddItems=(item,index)=>
//         {
//             setAdder((prev)=>{
//                 return {...prev, [index]: true}
//             })
//             // {adder=="add"?setAdder("added"):setAdder("add")}
//             dispatch(addItem(item))
//         }
//         const handleRemoveItems=(index)=>{
//             setAdder((prev)=>{
//                 return {...prev,}
//             })
//             dispatch(removeItem());
//         }

//     return<div>
       
//        {items.map((item)=>(
//             <div key={item?.card?.info?.id}
//             className=" m-2 p-2 bg-gray-200 border-b-2 border-gray-400 text-left flex justify-between"> 

//            <div>
//                 <div className="py-2" >
//                     <span className="">{ item?.card?.info?.name}-</span>
//                     <span className="pr-[30px]">₹{ item?.card?.info?.price/100 || item?.card?.info?.defaultPrice }</span>
                   
//                 </div> 
//                 <p className="text-xs">
//                     { item?.card?.info?.description}
//                 </p>  
//             </div>
//             <div className="w-3/12 h-auto"> 
//             <img  src={IMAGE+ item?.card?.info?.imageId}/>
//             <button className="absolute m-[-20px] ml-[30px] bg-white text-black" onClick={()=>handleAddItems(item)}>{adder ? "added": "add"}</button>
//             <button className="absolute m-[-20px] ml-[80px] bg-white text-black" onClick={()=>handleRemoveItems(item)}>Remove-</button>
//             </div>
//             </div>
//         ) 
//         )}
       
//     </div>
// }

// export default ItemList;  
