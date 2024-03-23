'use client'

import { useSelector } from "react-redux"

const CartPage = ()=> {
    const {cart} = useSelector(store => store.cart)
    console.log(cart)
    return (
        <div>
            {
                cart.map( product =>(
                    <h1>{product.fullTitle}</h1>
                ))
            }
            
        </div>
    )
}

export default CartPage