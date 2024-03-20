import Image from "next/image"
import Link from "next/link"
import './RestaurantCard.css'
const RestaurantCard = ({restaurant})=> {
    return(
        <Link href={'/'} style={{width:'300px',border:'1px solid rgba(58, 61, 66, 0.06)',textDecoration:'none',height:'400px',borderRadius:10,overflow:'hidden'}}>
            <Image src={restaurant.image} style={{width:'100%',height:'150px',objectFit:'cover'}} alt={restaurant.title} />
            <h2>{restaurant.title}</h2>
            <div style={{display:'flex',justifyContent:'center'}}>
                <span>{restaurant.score}</span>
                <span>({restaurant.totalVote})</span>
            </div>
            <p>{restaurant.orders}</p>
        </Link>
    )
}

export default RestaurantCard