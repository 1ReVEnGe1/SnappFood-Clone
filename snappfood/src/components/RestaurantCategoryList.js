'use client'

import Link from "next/link"
//css
import './RestaurantCategoryList.css'
import { useCallback, useEffect, useState } from "react"
// import { useRef } from "react"

const RestaurantCategoryList = ({category, index})=> {
    const [isActiveCategory , setIsActiveCategory]=useState(false)
    // const categoryRef = useRef(null)


    const handleClick = useCallback(()=> {
        setIsActiveCategory( prev => !prev)
    }, [isActiveCategory])

    // useEffect(()=>{
    //     if(categoryRef.current){
    //         categoryRef.current.focus()
    //     }
    // },[])

    return (
        <Link  onClick={handleClick} autoFocus={index===0} href={`#${category}`}>{category}</Link>
    )
}
export default RestaurantCategoryList