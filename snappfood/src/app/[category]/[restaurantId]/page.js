import { RESTAURANTS } from "@/data/database"
import ProductList from "@/components/ProductList"
import CartPage from "@/components/CartPage"
import Link from "next/link"
import { useMemo } from "react"
import { useSelector } from "react-redux"

const restaurant = ({params})=> {
    const restaurantId = Number(params.restaurantId) 
    const singleRes = RESTAURANTS.filter( restaurant => restaurant.id === restaurantId )[0]
    const subtitle = singleRes.products.find( product => product.category === 'پیتزا')
    const subtitle2 = singleRes.products.find( product => product.category === 'برگر')
    const subtitlePizzaDetails = singleRes.products.filter( product => product.category === 'پیتزا')
    const subtitleBurgurDetails = singleRes.products.filter( product => product.category === 'برگر')

    // const {cart}= useSelector( store => store.cart)
    // const totalPrice = useMemo(()=>{
    //     cart.reduce((init, current)=> (current.price * current.count) + init ,0 )
    // }, [cart]) 

    return(
        <div style={{backgroundColor:'#F9FAFB'}}>
            <div>{params.category}/{singleRes.title}</div>

            <div style={{display:'flex',justifyContent:'center',gap:'20px'}}>

                {/* rightBar */}
                <div style={{backgroundColor:'lightcyan',width:'28%'}}>
                    <h2>{singleRes.title}</h2>
                </div>

                {/* middle */}
                <div style={{width:'44%',borderRadius:8}}>
                    <div style={{padding:10}}>
                        <p style={{textAlign:'center',fontSize:'13px'}}>
                            {subtitle.category}
                        </p>
                        <hr />
                    </div>
                    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                        {subtitlePizzaDetails.map(item => <ProductList key={item.id} item={item} />)}
                    </div>
                    {/* ------------------------------------ */}

                    <div style={{padding:10}}>
                        <p style={{textAlign:'center',fontSize:'13px'}}>
                            {subtitle2.category}
                        </p>
                        <hr />
                    </div>
                    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
                        {subtitleBurgurDetails.map(item => <ProductList key={item.id} item={item} />)}    
                    </div>
                </div>

                {/* leftBar */}
                <div style={{width:'28%',display:"flex",flexDirection:'column',gap:'10px',padding:30}}>
                    <div style={{display:'flex',justifyContent:'space-evenly',padding:'14px 10px',backgroundColor:'white',borderRadius:'0.5rem',border:"1px solid rgba(58, 61, 66, 0.06)"}}>
                        <p>clock</p>
                        <p>دریافت در سریع ترین زمان ممکن</p>
                        <Link href={'#'}> + </Link>
                    </div>
                    <div style={{padding:'14px 10px',display:'flex',backgroundColor:'white',borderRadius:'0.5rem',border:"1px solid rgba(58, 61, 66, 0.06)"}}>
                        <div>adamak</div>
                        {singleRes.courier} 
                        {singleRes.courier === 'رایگان' ? 'تومان' : ' '}
                        {singleRes.courierPrice}
                    </div>
                    <CartPage />
                </div>
            </div>
        </div>
    )
}

export default restaurant