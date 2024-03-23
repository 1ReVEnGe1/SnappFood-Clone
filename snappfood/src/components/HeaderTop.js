'use client'
import { logoSnappFood } from "@/data/database"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

const HeaderTop = ()=> {
    const {cart} = useSelector( store => store.cart)
    const productsCount = cart.reduce( (init,current)=> init = init + current.count,0 )
    
    
    return(
        <div style={{display:'flex',justifyContent:'space-between',padding:'7px 15px 7px 15px'}}>
            <div style={{display:'flex',gap:'40px'}}>
                <Link href={'/'} style={{width:'60px',height:'60px'}}>
                    <Image style={{width:'100%',height:'100%'}}  src={logoSnappFood}  alt={'لوگو اسنپ فود'} />
                </Link>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    آدرس - فروزش ، خیابان حامام
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <input type="text" style={{}} />
                </div>
            </div>
            <div style={{display:'flex',gap:'20px',justifyContent:'center',alignItems:'center'}}>
                <div >admak</div>
                <div>سفارش ها({productsCount})</div>
            </div>

        </div>
    )
}

export default HeaderTop