import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slice/CartSlice";
import ProductSlice from "./Slices/ProductSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        products: ProductSlice,
    }
});