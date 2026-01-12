import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const { cart } = useSelector((state) => state);
  const { darkMode } = useSelector((state) => state.theme); 
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-[1200px] w-8/10 mx-auto p-4">
      {cart.length > 0 ? (
        // Not Empty
        <div className="flex flex-col md:flex-row gap-5">
          
          {/* Left: Cart Items */}
          <div className="w-full mx-auto md:w-[70%] flex flex-wrap p-2">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>

          {/* Right Side: Summary (Bill) */}
          <div className="w-full md:w-[30%] mt-5 flex flex-col p-5 gap-5 my-14 h-full justify-between">
            <div className="flex flex-col gap-5 ">
                {/* YOUR CART Title */}
                <div className={`font-semibold text-xl uppercase 
                    ${darkMode ? "text-emerald-400" : "text-green-800"}`}>
                    Your Cart
                </div>
                
                {/* SUMMARY Title */}
                <div className={`font-semibold text-5xl uppercase -mt-5
                    ${darkMode ? "text-emerald-400" : "text-green-700"}`}>
                    Summary
                </div>
                
                <p className="text-xl">
                  {/* Total Items Text */}
                  <span className={`font-semibold text-xl 
                    ${darkMode ? "text-slate-200" : "text-gray-700"}`}>
                    Total Items: {cart.length}
                  </span>
                </p>
            </div>
            
            <div className="flex flex-col">
              {/* Total Amount Section */}
              <p className={`text-xl font-bold 
                 ${darkMode ? "text-white" : "text-black"}`}>
                
                <span className={`font-semibold 
                    ${darkMode ? "text-slate-200" : "text-gray-700"}`}>
                    Total Amount:
                </span> 
                {" "}${totalAmount.toFixed(2)}
              </p>

              {/* Checkout Button */}
              <button className={`w-full transition duration-300 ease-linear mt-5 border-2 font-bold p-3 text-xl rounded-lg
                  ${darkMode 
                    ? "bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700" 
                    : "bg-green-700 border-green-600 text-white hover:bg-purple-50 hover:text-green-700"
                  }`}>
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart State
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className={`font-semibold text-xl mb-2 
            ${darkMode ? "text-slate-200" : "text-gray-700"}`}>
            Your cart is empty!
          </h1>
          
          <Link to="/">
            <button className={`uppercase rounded-lg transition duration-300 ease-linear mt-5 border-2 font-semibold p-3 px-10 tracking-wider
                ${darkMode 
                    ? "bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700" 
                    : "bg-green-600 border-green-600 text-white hover:bg-purple-50 hover:text-green-700"
                }`}>
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;