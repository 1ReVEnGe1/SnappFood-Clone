'use client'

import { addToCart } from "@/redux/cartSlice"
import { useCallback } from "react"
import { useDispatch } from "react-redux"


const AddButton = ({option})=> {
    const dispatch = useDispatch()

    const handleAddToCart = useCallback(()=>{
        dispatch(addToCart(option))
    },[])

    return(
        <div>
            <button onClick={handleAddToCart} style={{color:'rgb(255, 0, 166)',cursor:'pointer',padding:'5px 25px',backgroundColor:'white',border:'1px solid rgba(0,0,0,0.05)',borderRadius:20,boxShadow:'0 3px 6px #eee'}}>افزودن</button>
        </div>
    )
}

export default AddButton