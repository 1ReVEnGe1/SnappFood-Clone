import { createSlice } from "@reduxjs/toolkit";


const historySlice = createSlice({
    name: 'purchaseHistory',
    initialState: [
        {
            userId: 1,
            historyCart: [
                {
                    id: 1,
                    items: [
                        {
                            id: 1,
                            title: 'ساده',
                            image: '',
                            category: 'برگر',
                            seller: 'فرنام ویچ',
                            price: 200000,
                            fullTitle: 'دوبل برگر ساده',
                            discount: '',
                            count: 2,
                        }
                    ],
                    totalPrice: 400000,
                    restaurantName : 'فرنام ویچ',
                    status: 'pending'
                },
                {
                    id: 2,
                    items: [
                        {
                            id: 1,
                            title: 'پیتزا پپرونی ایتالیایی 24 سانتی',
                            image: '',
                            category: 'پیتزا',
                            seller: 'فرنام ویچ',
                            price: 200000,
                            fullTitle: 'پیتزا پپرونی ایتالیایی 24 سانتی',
                            discount: 5,
                            count: 4,
                        }
                    ],
                    totalPrice: 600000,
                    restaurantName : 'فرنام ویچ',
                    status: 'delivered'
                },
            ]
        },
    ],
    reducers: {
        addToHistory:(state ,action)=> {
            const index = state.findIndex( user => user.userId === action.payload.userId )
            
            state[index].historyCart.push({
                id:Math.floor(Math.random() * 1000),
                items: action.payload.items,
                totalPrice:action.payload.totalPrice,
                restaurantName:action.payload.restaurantName,
                status:'pending'
            })
        }
    }
})

export const { addToHistory } = historySlice.actions
export default historySlice.reducer