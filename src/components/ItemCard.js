import React from 'react'
import { IMAGE } from '../utils/mockData';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../utils/cartSlice';

const ItemCard = ({item}) => {
    const cartItems=useSelector((store)=>store.cart.items);
    console.log(cartItems,'ooooo');

    const dispatch=useDispatch();
    const handleAddCart=()=>{
       dispatch(addItem(item))
    }

    return (
      <div className='border-b border-gray-300 flex justify-between m-2 p-2'>
          <div className='flex-[7_1_0%] '>
              <div>
                  <h1 className='text-gray-600 text-start m-2'>{item?.card?.info?.name}</h1>
                  <p className='text-sm text-start m-2'>₹{item?.card?.info?.price || item?.card?.info?.defaultPrice} - </p>
                  <p className='text-xs text-start m-2 break-words'>{item?.card?.info?.description}</p>
              </div>
          </div>
  
          <div className='flex-[3_1_0%] p-2  ml-[150px]'>
              <img
                  className='rounded-lg w-[150px] '
                  src={IMAGE + item?.card?.info?.imageId}
                  alt="Item Image"
              />
            
              <button className='absolute rounded-lg py-2 px-4 bg-white text-black mt-[-40px] ml-[-70px] hover:bg-gray-500' onClick={handleAddCart}>Add</button>
          </div>
      </div>
  );
  
}

export default ItemCard
