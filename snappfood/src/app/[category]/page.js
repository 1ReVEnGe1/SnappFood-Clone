'use client'

import { categoryProvider } from "@/utils/categoryProvider"
import { RESTAURANTS } from "@/data/database"
import RestaurantCard from "@/components/RestaurantCard"
import Header from "@/components/Header"
import { FOODKINDS } from "@/data/database"
import BtnFilter from "@/components/BtnFilter"
import { useState } from "react"

const Category = ({ params }) => {
    const [clickedType , setClickedType] = useState(null);
    const [isClickedFilter , setIsClickedFilter] = useState(false);
    const categoryTitle = params.category
    const RESTAURANTS_LIST = categoryProvider(RESTAURANTS, categoryTitle)
    const FOOD_KINDS = categoryProvider(FOODKINDS , categoryTitle)

    
    const selectedType = (type)=> {
        if(type !== 'همه'){
            setIsClickedFilter( prev => true)
        }else{
            setIsClickedFilter(prev => false)
        }

        const targetValues = RESTAURANTS_LIST.filter( restaurant => (
            restaurant.orders.includes(type)
        ) )
        setClickedType(prev => targetValues)
        
    }

    return (
        <>
            
            <Header />
            <main style={{ width: '100%' }}>
                <div style={{ width: '100%' }}>
                    filter
                </div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }} >
                    <div style={{ width: '20%' }}> 
                    <div>
                        <button>بازگشت</button>
                    </div>
                        <span>همه فست فود ها</span>
                        <div style={{display:'flex',flexDirection:'column'}}>
                            {
                                FOOD_KINDS[0].types.map( type => (
                                    <BtnFilter key={type} type={type} selectedType={selectedType} /> 
                                ))
                            }

                        </div>

                    </div>
                    <div style={{ width: '80%', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        
                        {
                            isClickedFilter ? 
                                clickedType ? 
                                clickedType.map(restaurant => (
                                    <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                                )) :
                                ""
                                :
                            RESTAURANTS_LIST.map(restaurant => (
                                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                            ))
                        }
                        
                    </div>
                </div>

            </main>
        </>
    )
}

export default Category