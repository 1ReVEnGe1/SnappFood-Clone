'use client'
import { logoSnappFood } from "@/data/database"
import Image from "next/image"
import Link from "next/link"
import { useSelector } from "react-redux"

const HeaderTop = () => {
    const { cart } = useSelector(store => store.cart)
    const productsCount = cart.reduce((init, current) => init = init + current.count, 0)


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 15px 7px 15px',backgroundColor:'#fff' }}>
            <div style={{ display: 'flex', gap: '40px',backgroundColor:'#fff' }}>
                <Link href={'/'} style={{ width: '60px', height: '60px' }}>
                    <Image style={{ width: '100%', height: '100%' }} src={logoSnappFood} alt={'لوگو اسنپ فود'} />
                </Link>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff' }}>
                    آدرس - فروزش ، خیابان حامام
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff' }}>
                    <input type="text" placeholder="جست‌و‌جو در رستوران" />
                </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff' }}>
                <div style={{backgroundColor:'#fff'}} >
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="#3A3D42">
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.49992 10.666C11.8011 10.666 13.6666 12.5315 13.6666 14.8327V16.4993C13.6666 16.9596 13.2935 17.3327 12.8333 17.3327C12.373 17.3327 11.9999 16.9596 11.9999 16.4993V14.8327C11.9999 13.452 10.8806 12.3327 9.49992 12.3327H4.49992C3.11921 12.3327 1.99992 13.452 1.99992 14.8327V16.4993C1.99992 16.9596 1.62682 17.3327 1.16659 17.3327C0.706348 17.3327 0.333252 16.9596 0.333252 16.4993V14.8327C0.333252 12.5315 2.19873 10.666 4.49992 10.666H9.49992ZM6.99992 0.666016C9.3011 0.666016 11.1666 2.5315 11.1666 4.83268C11.1666 7.13387 9.3011 8.99935 6.99992 8.99935C4.69873 8.99935 2.83325 7.13387 2.83325 4.83268C2.83325 2.5315 4.69873 0.666016 6.99992 0.666016ZM6.99992 2.33268C5.61921 2.33268 4.49992 3.45197 4.49992 4.83268C4.49992 6.21339 5.61921 7.33268 6.99992 7.33268C8.38063 7.33268 9.49992 6.21339 9.49992 4.83268C9.49992 3.45197 8.38063 2.33268 6.99992 2.33268Z"></path>
                    </svg>
                </div>
                <div style={{backgroundColor:'#fff'}}>سفارش ها({productsCount})</div>
            </div>

        </div>
    )
}

export default HeaderTop