import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        userId:1,
        cart:[
            {
                id:1,
                title:'پیتزا پپرونی ایتالیایی 24 سانتی',
                image:'',
                category:'پیتزا',
                seller:'فرنام ویچ',
                price:2000,
                fullTitle:'پیتزا پپرونی ایتالیایی 24 سانتی',
                count:2,
            }

        ]
    },
    reducers:{
        addToCart : (state,action)=> {
            const { payload } = action;
            const index = state.cart.findIndex( item => item.id === payload.id);
            const isNotFound = index === -1
            if(isNotFound){
                state.cart.push({...payload , count:1})
            }else{
                state.cart[index].count += 1
            }
        },
        deleteItem : ()=> {}
    }
})


export const {addToCart} = cartSlice.actions
export default cartSlice.reducer