import React from 'react'
import { useSelector } from 'react-redux';

import {Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  const {darkMode} =useSelector((state)=>state.theme);
  return (
    <div className={`min-h-screen transition-all duration-300 select-none ${darkMode ? "bg-[#020617]" : "bg-gray-50"}`}>
      <div className={`${darkMode ? "bg-[#0f172a]" : "bg-white shadow-md"}`}>
        <Navbar/>
      </div>
      {/* routes */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      
    </div>
  )
}

export default App
