'use client'
import { RESTAURANTS } from "@/data/database"
import Image from "next/image"


const category = ({params})=> {
    const categoryTitle = params.category
    const RESTAURANTS_LIST = RESTAURANTS.filter(restaurant => restaurant.category === categoryTitle)

    return (
        <>
            <div>
                {RESTAURANTS_LIST.map(restaurant => (
                    <div>
                        <Image src={restaurant.image} alt={restaurant.title} />
                        <h2>{restaurant.title}</h2>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <span>{restaurant.score}</span>
                            <span>({restaurant.totalVote})</span>
                        </div>
                        <p>{restaurant.orders}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </>
    )
}

export default category