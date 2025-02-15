import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    favorite: [],
    userInfo: null,
};

export const shoppersSlice = createSlice({
    name: "shoppers", // Matches the key in store.js
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.cart = action.payload;
        },
       
    },
});

export const { addToCart,  } = shoppersSlice.actions;
export default shoppersSlice.reducer;