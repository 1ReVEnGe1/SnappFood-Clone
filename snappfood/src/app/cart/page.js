'use client'

import Image from "next/image"
import Link from "next/link"
import { PAYMENTMETHODS, logoSnappFood } from "@/data/database"
import SnappfoodSvg from "@/components/SVG/SnappfoodSvg"
import { useCallback, useState } from "react"
import { useRouter } from "next/navigation"
//css
import './cart.css'

const cart = () => {
    const router = useRouter()
    const paymentMethods = PAYMENTMETHODS
    const [selectedItem , setSelectedItem] = useState(null)


    const handleInput = useCallback((index)=> {
        setSelectedItem(prev => index)
    },[])

    const handleGoBack = useCallback( ()=> {
        router.back()
    })

    return (

        <section style={{ backgroundColor: 'lightgray', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <div className="cart-container" style={{ border: '1px solid red', width: '83%', maxWidth: "1200px", }}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Link href={'/'}>
                        <SnappfoodSvg />
                    </Link>
                </div>
                <div>
                    <button onClick={handleGoBack}>
                        <p>بارگشت و ویرایش سبد خرید</p>
                    </button>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ width: '70%', backgroundColor: 'lightblue',padding:'20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>آدرس</p>
                            <div style={{ display: 'flex', justifyContent: 'center' }} >
                                <p>تغییر آدرس</p>
                                <p>left icon </p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>svg</p>
                            <div>
                                <h2>address title</h2>
                                <p>address details</p>
                            </div>
                            <p>svg</p>
                        </div>
                        <div>
                            <p>روش پرداخت</p>
                        </div>
                        <div>
                            
                            {
                                paymentMethods.map((item,index) => (
                                    <div style={{marginBottom:'20px'}} key={index}>
                                        <label className={selectedItem === index ? 'active-payment' : ''} htmlFor={`item-${index}`} style={{ border:'1px solid #eee',display: 'flex', justifyContent: 'space-between' }} >
                                            <input 
                                                type="checkbox"
                                                checked={selectedItem === index}
                                                onChange={()=> handleInput(index)}
                                                id={`item-${index}`}
                                                style={{display:'none'}}
                                            />
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                                                <Image width={30} height={30} src={item.logo} alt={item.name} />
                                                <div>
                                                    <p>{item.method}</p>
                                                    <p>{item.name}</p>
                                                </div>
                                            </div>
                                            <p>svg</p>
                                        </label>
                                    </div>
                                ))
                            }
                            <div>

                            </div>
                        </div>
                    </div>
                    <div style={{ width: '30%', backgroundColor: 'lightblue' }}>
                        left
                    </div>
                </div>

            </div>

        </section>
    )
}

export default cart