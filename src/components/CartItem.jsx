import React from 'react';
import {MdDelete} from "react-icons/md";
import { useDispatch,useSelector } from 'react-redux';
import {remove } from "../redux/Slices/CartSlice";
import {toast} from "react-hot-toast";

const CartItem = ({item}) => {

    const dispatch =useDispatch();
    const {darkMode} = useSelector((state)=>state.theme);

    const removeFromCart=()=>{
        dispatch(remove(item.id));
        toast.error("Item Removed");
    };
    
  return (
    <div className={`flex flex-wrap items-center p-2 md:px-5 justify-between border rounded shadow-md mt-2 mb-2 md:mx-5 
        ${darkMode 
            ? "bg-[#1e293b] border-none" // Dark Mode: Deep Blue Bg, No Border
            : "bg-white border-slate-200" // Light Mode: White Bg, Grey Border
        }`}>
      
        <div className={`flex flex-col md:flex-row w-fit px-3 gap-5 max-w-[600px] items-center`}>

            {/* Product Image */}
            <div className='w-40 mx-auto'>
                <img src={item.image} alt={item.title} className='object-contain h-40 max-w-40 mx-auto' />
            </div>

            {/* Details */}
            <div className='md:ml-5 self-start space-y-5 w-[100%] md:w-[70%] '>
                
                {/* 1. TITLE FIX */}
                <h1 className={`text-xl font-semibold 
                    ${darkMode ? "text-slate-100" : "text-slate-700"}`}>
                    {item.title}
                </h1>

                {/* 2. DESCRIPTION FIX */}
                <h1 className={`text-base font-medium 
                    ${darkMode ? "text-slate-300" : "text-slate-700"}`}>
                    {item.description.split(" ").slice(0,15).join(" ")+"..."}
                </h1>
            
                <div className='flex items-center justify-between'>
                      {/*price  */}
                    <p className={`font-bold text-lg 
                        ${darkMode ? "text-emerald-400" : "text-green-600"}`}>
                        ${item.price}
                    </p>

                    {/* Delete Button */}
                    <div onClick={removeFromCart} 
                    className={`group transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3
                        ${darkMode ? "bg-red-900 hover:bg-red-800" : "bg-red-200 hover:bg-red-400"}
                    `}>
                        <MdDelete className={`group-hover:text-white 
                            ${darkMode ? "text-red-200" : "text-red-800"}`}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem