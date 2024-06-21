import { IMAGE } from "../utils/mockData";

const ItemList=({items})=>{
    console.log(items,"from itemList");
    return<div>
       
       {items.map((item)=>(
            <div key={item?.card?.info?.id}
            className=" m-2 p-2 bg-gray-200 border-b-2 border-gray-400 text-left flex justify-between"> 

           <div>
                <div className="py-2" >
                    <span className="">{ item?.card?.info?.name}-</span>
                    <span className="pr-[30px]">₹{ item?.card?.info?.price/100 || item?.card?.info?.defaultPrice }</span>
                   
                </div> 
                <p className="text-xs">
                    { item?.card?.info?.description}
                </p>  
            </div>
            <div className="w-3/12 h-auto"> 
            <img  src={IMAGE+ item?.card?.info?.imageId}/>
            <button className="absolute m-[-20px] ml-[30px] bg-white text-black">Add+</button>
            </div>
            </div>
        ) 
        )}
       
    </div>
}

export default ItemList;  