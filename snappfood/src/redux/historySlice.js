import { logoSnappFood } from "@/data/database";
import { createSlice } from "@reduxjs/toolkit";


const historySlice = createSlice({
    name: 'purchaseHistory',
    initialState: [
        {
            userId: 1,
            historyCart: [
                // {
                //     id: 1,
                //     items: [
                //         // {
                //         //     id: 1,
                //         //     title: 'ساده',
                //         //     image: '',
                //         //     category: 'برگر',
                //         //     seller: 'فرنام ویچ',
                //         //     price: 200000,
                //         //     fullTitle: 'دوبل برگر ساده',
                //         //     discount: '',
                //         //     count: 2,
                //         // }
                //     ],
                //     totalPrice: 400000,
                //     resLogo: logoSnappFood,
                //     restaurantName : 'فرنام ویچ',
                //     status: 'pending'
                // },
                
            ]
        },
    ],
    reducers: {
        addToHistory:(state ,action)=> {
            const {payload}=action;
            // const index = state.findIndex( user => user.userId === action.payload.userId )
            
            state[0].historyCart.push({
                id:Math.floor(Math.random()*1000),
                items : payload.items,
                totalPrice : payload.totalPrice,
                restaurantName:payload.restaurantName,
                finalPayment: payload.finalPayment,
                resLogo : payload.resLogo,
                profit: payload.profit,
                address: payload.address,
                orderTime : payload.orderTime,
                paymentMethod : payload.paymentMethod,
                paymentName : payload.paymentName,
                status:'pending'
            })
            
            
        }
    }
})

export const { addToHistory } = historySlice.actions
export default historySlice.reducer