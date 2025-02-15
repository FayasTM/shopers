import { configureStore } from "@reduxjs/toolkit";
import shoppersReducer from "./shoppersSlice"; // Import the reducer

export const store = configureStore({
  reducer: {
    shoppers: shoppersReducer, 
  },
});
