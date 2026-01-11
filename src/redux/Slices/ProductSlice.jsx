import {createSlice,createAysncThunk} from '@reactjs/tookit';

//thunk
export const fetchProducts = createAysncThunk("product/fetchProducts",async() => {
    console.log("truck departed..");
    const result = await fetch("https://fakestoreapi.com/products");
    const data = await result.json();
    console.log("truck arrived:",data);
    return data;
});

export const ProductSlice = createSlice({
    name:"products",
    initialState: {
        items: [],
        status: "idle",
        error: null,
    },
    reducers:{

    },
    extraReducers: (builder)=>{
        builder
            .addCase(fetchProducts.pending,(state)=>{
                state.status = "loading";
            })
            .addCase(fetchProducts.fulfilled, (state,action)=>{
                state.status = "success";
                state.items = action.payload;
            })
            .addCase(fetchProducts.rejected, (state,action)=>{
                state.status = "failed";
                state.error = "Kuch toh gadbad hai Daya!";
            })
    },
});

export default ProductSlice.reducer;
