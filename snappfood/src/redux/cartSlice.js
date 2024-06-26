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

        ],
        
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
        },
        clearCart : (state)=> {
            state.cart.length =0
        },
        addPaymentData : (state ,action)=> {
            // const index = state.findIndex(item => item.paymentMethod === action.)
            console.log(action.payload.name)
            state.paymentName = action.payload.name
            state.paymentMethod = action.payload.method
            
            
        }
    }
})


export const {addToCart , deleteItem, decreaseItem, clearCart, addPaymentData} = cartSlice.actions
export default cartSlice.reducer