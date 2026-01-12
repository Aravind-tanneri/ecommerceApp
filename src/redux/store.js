import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import ProductSlice from "./Slices/ProductSlice";
import ThemeReducer from "./Slices/ThemeSlice";

export const store = configureStore({
    reducer: {
        cart: CartSlice,
        products: ProductSlice,
        theme: ThemeReducer,
    }
});