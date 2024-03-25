import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        userId:1,
        cart:[
            // {
            //     id:1,
            //     title:'پیتزا پپرونی ایتالیایی 24 سانتی',
            //     image:'',
            //     category:'پیتزا',
            //     seller:'فرنام ویچ',
            //     price:200000,
            //     fullTitle:'پیتزا پپرونی ایتالیایی 24 سانتی',
            //     discount:5
            //     count:2,
            // }

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
        decreaseItem : (state , action)=> {
            //action : product
            const index = state.cart.findIndex( item => item.id === action.payload.id )
            state.cart[index].count -= 1
        },
        deleteItem : (state , action)=> {
            const index = state.cart.findIndex( item => item.id === action.payload.id )
            state.cart.splice(index , 1)
        }
    }
})


export const {addToCart , deleteItem, decreaseItem} = cartSlice.actions
export default cartSlice.reducer