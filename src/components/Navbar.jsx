import { FaShoppingCart } from "react-icons/fa"; 
import { NavLink } from "react-router-dom";

import { MdDarkMode,MdLightMode } from "react-icons/md";
import { useDispatch,useSelector } from "react-redux";
import {toggleTheme} from "../redux/Slices/ThemeSlice";


const Navbar = () => {
  
  const { cart } = useSelector((state) => state);
  const {darkMode} = useSelector((state)=>state.theme);
  const dispatch =useDispatch();


  return (
    <div className={`${darkMode?"":"shadow-md shadow-blue-200"}`}>
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto ">
        
        {/* Logo / Home Link */}
        <NavLink to="/">
          <div className="ml-5">
            
            <h1 className={`font-bold text-xl md:text-3xl transition-all duration-200 
   ${darkMode ? "text-white hover:text-emerald-400" : "text-slate-800 hover:text-indigo-600"}`}>
   Ecomzy
</h1>
            {/* <img src="../logo.png" className="h-14" alt="Logo"/> */} 
          </div>
        </NavLink>

        {/* Menu Items */}
        <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
          
          {/* Home Link */}
          <NavLink to="/">
            <p className={`font-bold text-xl transition-all duration-400
   ${darkMode ? "text-slate-200 hover:text-emerald-400" : "text-slate-700 hover:text-indigo-600"}`}>
   Home
</p>
          </NavLink>

          {/* Cart Icon + Badge Logic */}
          <NavLink to="/cart">
            <div className="relative top-[2px] ">
              <FaShoppingCart className={`text-2xl hover:text-green-400 transition-all duration-200  ${darkMode?"text-yellow-400":"text-slate-700"}`}/>
              
              {/* Badge*/}
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-2 bg-emerald-500 text-xs w-5 h-5 flex 
justify-center items-center animate-bounce rounded-full text-white">
  {cart.length}
</span>
              )}
            </div>
          </NavLink>

          <div className="flex items-center space-x-6 ">
            {/* toggle button */}
            <button 
            onClick={()=>dispatch(toggleTheme())}
            className={`text-2xl mt-1 hover:text-green-400 transition-all animate-[bounce_1500ms_infinite] duration-200`}>
              {darkMode?<MdLightMode className="text-yellow-600"/>:<MdDarkMode className="text-slate-500"/>}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;