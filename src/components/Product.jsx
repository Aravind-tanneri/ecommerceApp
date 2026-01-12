import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {toast} from "react-hot-toast"
import {add,remove} from "../redux/Slices/CartSlice";

const Product = ({post}) => {


    const cart= useSelector((state)=>state.cart);
    const {darkMode}=useSelector((state)=>state.theme);
    const dispatch =useDispatch();

    const addToCart= ()=>{
        dispatch(add(post));
        toast.success("item added to Cart")
    };

    const removeFromCart =()=>{
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    };

  return (                                         
    <div className={`flex flex-col items-center justify-between 
    hover:scale-104 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl
    ${darkMode ? "bg-[#1e293b] border-slate-700" : " bg-blue-100 border-transparent shadow-lg "}
`}>
        {/* title */}
        <div>
            <p className={`font-semibold text-lg text-left truncate w-40 mt-1 
            ${darkMode ? "text-slate-100" : "text-gray-700"}`}>
            {post.title}
        </p>
        </div>

        {/* description */}
        <div>
            <p className={`w-40 font-normal text-[10px] text-left 
            ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
            {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
        </div>

        {/* Image */}
        <div className='h-[180px]'>
            <img src={post.image} className='h-full w-full' alt="" />
        </div>

        {/* Price and buttons */}
        <div className='flex justify-between gap-12 items-center w-full mt-5'>
            <div>
                <p className={`font-semibold ${darkMode ? "text-emerald-400" : "text-emerald-600"}`}>
                ${post.price}
            </p>
            </div>

            {cart.some((p)=>p.id===post.id)?(
                <button
                className={`text-[12px] p-1 px-3 uppercase rounded-full font-semibold transition duration-300
                ${darkMode 
                    ? "text-slate-100 border-2 bg-red-500  border-transparent hover:bg-red-700" 
                    : "text-gray-700 border-2 bg-red-500 text-white border-transparent hover:bg-red-600 hover:text-white"
                }`}
                onClick={removeFromCart}>
                Remove Item
            </button>
            )
            :(
                <button
                className={`text-[12px] p-1 px-3 uppercase rounded-full font-semibold transition duration-300
                ${darkMode 
                    ? "text-slate-100 border-2 border-slate-100 hover:bg-green-800 " 
                    : "text-gray-700 border-2 border-gray-700 hover:bg-green-600 hover:text-white"
                }`}
                onClick={addToCart}>
                Add to Cart
            </button>
            )
        }
        </div>
    </div>                                
  )
}

export default Product;
