'use client'

import { addToCart, decreaseItem, deleteItem } from "@/redux/cartSlice"
import { useCallback } from "react"
import { useDispatch } from "react-redux"
import TrashSvg from "./SVG/TrashSvg"
import MinusSvg from "./SVG/MinusSvg"
import PlusSvg from "./SVG/PlusSvg"

const CartCard = ({ product }) => {

    const dispatch = useDispatch()



    const handleAddToCart = useCallback((product) => {
        dispatch(addToCart(product))
    }, [])

    const handleDecreaseItem = useCallback((product) => {
        dispatch(decreaseItem(product))
    }, [])
    const handleDeleteItem = useCallback((product) => {
        dispatch(deleteItem(product))
    }, [])


    return (
        <div style={{ marginBottom: 10 }} >
            <p style={{color:'rgb(58, 61, 66)',fontSize:'0.875rem',fontWeight:'700'}}>{product.fullTitle}</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: '5px',justifyContent:'center',alignItems:'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', width: 'fit-content', padding:'0.145rem 0.15rem', borderRadius: 5, height: '25px', backgroundColor: 'rgba(255, 0, 166, 0.06)' }}>
                        <span style={{ color: 'rgb(255, 0, 166)', fontSize: '14px',fontWeight:700 }}>% {product.discount} </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', gap: '0px' }}>
                        <span><s style={{ color: 'rgb(166, 170, 173)',fontWeight:'400',fontSize:'0.75rem' }}>{product.price}</s></span>
                        <span style={{fontWeight:700,fontSize:'0.875rem'}}>{product.price * (100 - product.discount) / 100} <span style={{fontWeight:'300'}} >تومان</span></span>
                    </div>
                </div>

                <div style={{ direction: 'ltr', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 20 }}>

                    <button onClick={() => handleAddToCart(product)} style={{ padding: '6px 6px', width: '2rem', height: '2rem', borderRadius: "50%", border: '0.09375rem solid rgba(255, 0, 166, 0.06)', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px', cursor: 'pointer', backgroundColor: 'rgb(255, 255, 255)', color: 'rgb(255, 0, 166)' }}>
                        <PlusSvg />
                    </button>
                    {product.count}
                    {
                        product.count > 1 ?
                            <button onClick={() => handleDecreaseItem(product)} style={{ width: '2rem', height: '2rem', borderRadius: '50%', border: '0.09375rem solid rgba(255, 0, 166, 0.06)', color: 'rgb(255, 0, 166)', backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px', cursor: 'pointer' }}  >
                                <MinusSvg />
                            </button>
                            :
                            <button onClick={() => handleDeleteItem(product)} style={{ padding: '6px 6px', backgroundColor: 'transparent', width: '2rem', height: '2rem', border: '0.09375rem solid transparent', color: 'rgb(58, 61, 66)', borderRadius: '50%', cursor: 'pointer' }}>
                                <TrashSvg />
                            </button>

                    }

                </div>
            </div>
            <hr style={{ marginTop: 10 , border:'1px solid rgba(0, 0, 0, 0.05)'}} />
        </div>


    )
}

export default CartCard