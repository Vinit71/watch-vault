import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        allProducts: ["a", "b", "c"],
    },
    reducers:{
        addProduct: (state, action) =>{
            state.allProducts.push(action.payload);
        }
    }
})

export const {addProduct} = productSlice.actions;
export default productSlice.reducer;