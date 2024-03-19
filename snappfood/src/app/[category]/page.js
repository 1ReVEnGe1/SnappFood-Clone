'use client'
import { RESTAURANTS } from "@/data/database"


const category = ({params})=> {
    const categoryTitle = params.category
    const RESTAURANTS_LIST = RESTAURANTS.filter(restaurant => restaurant.category === categoryTitle)
    console.log(RESTAURANTS_LIST)
    return (
        <>
            <div>
                {RESTAURANTS_LIST.map(restaurant => (
                    <div>
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