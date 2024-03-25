'use client'


import { addToCart, decreaseItem, deleteItem } from "@/redux/cartSlice"
import { calculateProfit } from "@/utils/calculateProfit"
import { calculateShoppingCart } from "@/utils/calculateShoppingCart"
import { useCallback, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"

import { calculateTax } from "@/utils/calculateTax"
import { calculateFinalPayement } from "@/utils/calculateFinalPayement"


const CartPage = ({singleRes})=> {
    const {cart} = useSelector(store => store.cart)    
    const totalPrice = useMemo(()=> calculateShoppingCart(cart), [cart]) 
    const profit = useMemo(()=> calculateProfit(cart), [cart]) 
    const tax = useMemo(()=> calculateTax(totalPrice),[totalPrice])
    const finalPayment =useMemo(()=>calculateFinalPayement(tax, profit, totalPrice, singleRes.courierPrice) ,[totalPrice,profit,tax]) 
    const totalProducts = cart.reduce( (init, current)=> current.count + init , 0 )
    console.log(cart)
    const dispatch = useDispatch()
    
    

    const handleAddToCart = useCallback((product)=> {
        dispatch(addToCart(product))
    } , [])

    const handleDecreaseItem = useCallback((product)=> {
        dispatch(decreaseItem(product))
    } , [])
    const handleDeleteItem = useCallback((product)=> {
        dispatch(deleteItem(product))
    } , [])


    return (
        <>
            {totalPrice === 0 ? <p>سبد خرید شما خالی است</p> : 
            
                <div style={{padding:'14px 10px',backgroundColor:'white',borderRadius:'0.5rem',border:"1px solid rgba(58, 61, 66, 0.06)"}}>
                    <h2>سبد خرید ({totalProducts})</h2>
                    {
                        cart.map( product =>(
                            <div>
                                <p>{product.fullTitle}</p>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <div style={{display:'flex',gap:'5px'}}>
                                        <div style={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:'bold',width:'fit-content',padding:3,borderRadius:5,height:'25px',backgroundColor:'rgba(255, 0, 166, 0.06)'}}>
                                            <span style={{color:'rgb(255, 0, 166)',fontSize:'14px'}}>{product.discount}% </span>
                                        </div>
                                        <div style={{display:'flex',flexDirection:'column',fontSize:'11px',gap:'3px'}}>
                                            <span><s style={{color:'rgb(166, 170, 173)'}}>{product.price} تومان</s></span>
                                            <span>{product.price * (100 - product.discount)/100} تومان</span>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        
                                        <button onClick={()=> handleAddToCart(product)} style={{padding:'6px 6px'}}>+</button>
                                        {product.count}
                                        {
                                            product.count > 1 ?  
                                                <button onClick={()=> handleDecreaseItem(product)} style={{padding:'6px 6px'}}>-</button>
                                                    : 
                                                        <button onClick={()=> handleDeleteItem(product)} style={{padding:'6px 6px'}}>trash</button>

                                        }
                                        
                                    </div>
                                </div>
                                <hr />
                            </div>
                            
                        ))
                    }
                    
                    <div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <span>مجموع</span>
                            <span>{totalPrice}</span>
                        </div>
                    
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <span>مالیات</span>
                            <span>{tax}</span>
                        </div>

                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <span>هزینه ارسال</span>
                            <span>{singleRes.courierPrice}</span>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <span>سود شما</span>
                            <span>{profit}</span>
                        </div>
                        
                        
                        <hr />
                    </div>
                    <div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                                <span>قابل پرداخت</span>
                                <span>{finalPayment}</span>
                        </div>
                    </div>
                </div>    
            
            }
        </>

        
    )
}

export default CartPage