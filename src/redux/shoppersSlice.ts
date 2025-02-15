import { createSlice } from "@reduxjs/toolkit";
import { ProductData } from "../../type";
import { getProductsData } from "@/app/lib/getData";
interface userInfo{
    id:string;
    name:string;
    email:string;

}

interface InitialState{
    cart:ProductData[];
    wishList:ProductData[];
    userInfo: userInfo | null;

}
const initialState: InitialState = {
    cart: [],
    wishList: [],
    userInfo: null,
};

export const shoppersSlice = createSlice({
    name: "shoppers", // Matches the key in store.js
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingProduct =state.cart.find(
                (item) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            }else{
                state.cart.push(action.payload);
            }
        },

        increaseQuantity: (state, action) => {
            const existingProduct =state.cart.find(
                (item) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const existingProduct =state.cart.find(
                (item) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity -= 1;
            }
        },
       
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(
                (item) => item._id !== action.payload._id
            );
        },
        resetCart:(state)=>{
            state.cart = [];
        },

        addToWishList: (state, action) => {
            const existingProduct =state.wishList.find(
                (item) => item._id === action.payload._id
            );
            if (existingProduct) {
                existingProduct.quantity += 1;
            }else{
                state.wishList.push(action.payload);
            }
        },

        resetWishList:(state)=>{
            state.wishList = [];
        },

        addUser: (state, action) => {
            state.userInfo = action.payload;
        },

        removeUser: (state) => {
            state.userInfo = null;
        },
    },
});

export const { 
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    resetCart,
    addToWishList,
    resetWishList,
    addUser,
    removeUser
    } = shoppersSlice.actions;
export default shoppersSlice.reducer;