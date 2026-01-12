import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from "../redux/Slices/ProductSlice";
import Spinner from "../components/Spinner";
import Product from "../components/Product";


const Home = () => {

    const dispatch =useDispatch();
    const {items,status} =useSelector((state)=>state.products);

    useEffect(()=>{
        dispatch(fetchProducts());
    },[]);

    if (status==="loading") return <Spinner/>;
    if (status==="failed") return <p>Error!</p>;


  return (
    <div className='flex flex-wrap max-w-[1200px] w-9/10 justify-center items-center mx-auto gap-5 p-5'>
        {items.map((post)=><Product key={post.id} post={post}/>)}
    </div>
  );
};

export default Home;
