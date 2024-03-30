import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import historySlice from "./historySlice";


export const store = configureStore({
    reducer : {
        cart:cartSlice,
        purchaseHistory:historySlice
    }
})