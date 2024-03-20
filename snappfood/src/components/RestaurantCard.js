import Image from "next/image"
import Link from "next/link"
import './RestaurantCard.css'
const RestaurantCard = ({restaurant})=> {
    return(
        <Link href={'/'} style={{width:'285px',border:'1px solid rgba(58, 61, 66, 0.06)',textDecoration:'none',height:'auto',borderRadius:10,overflow:'hidden',position:'relative'}}>
            <Image src={restaurant.image} style={{width:'100%',height:'120px',objectFit:'cover'}} alt={restaurant.title} />
            <div style={{height:'200px',display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'column'}}>
                <div >
                    <h2 style={{textAlign:'center',marginTop:'0px',fontSize:'16px'}}>{restaurant.title}</h2>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <span>{restaurant.score}</span>
                        <span>({restaurant.totalVote})</span>
                    </div>
                    <p style={{textAlign:'center'}}>{restaurant.orders}</p>
                </div>
                
                <div style={{width:'170px',padding:' 5px 10px',display:'flex',fontSize:13,justifyContent:'space-between',alignItems:'center',borderRadius:'20px',boxShadow:'0 5px 5px #eee'}}>
                    <span display={{display:'flex'}}>
                        {restaurant.courier}
                    </span>
                    <span>
                        {restaurant.courierPrice}
                        {restaurant.courierPrice === 'رایگان' ? '' : 'تومان'}
                    </span>

                </div>
            </div>
            
            <div style={{position:'absolute',top:'50%',right:'50%',transform:'translate(50%,-140%)',width:'75px',height:'75px',borderRadius:10,overflow:'hidden',boxShadow:'0 3px 10px rgb(217 217 217)'}}>
                <Image style={{width:"100%",height:"100%"}} src={restaurant.logo} alt={restaurant.title} />
            </div>
        </Link>
    )
}

export default RestaurantCard