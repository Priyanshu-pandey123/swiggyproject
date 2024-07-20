import { useDispatch, useSelector } from "react-redux"
import { clearCart } from "../utils/cartSlice";

import ItemList from "./ItemList";




const Cart=()=>{

  const dispatch=useDispatch();

  const handleClearCart=()=>{
     dispatch(clearCart());
  }

    
    const cartItem=useSelector((store)=>store.cart.items);
    return<div className="text-center m-2 p-2">


       <div className="w-6/12 m-auto">
       {cartItem.length==0 && <h1>hey your card is clear ! ADD cart Now</h1>}
       <ItemList items={cartItem}/> 
       </div>
       <button className="p-2 m-2 bg-black text-white" onClick={handleClearCart}>clear Cart</button>
  



    </div>
}

export default Cart;