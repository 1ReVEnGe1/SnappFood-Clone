'use client'

import Image from "next/image"
import Link from "next/link"
import { PAYMENTMETHODS, RESTAURANTS, USER } from "@/data/database"
import SnappfoodSvg from "@/components/SVG/SnappfoodSvg"
import { useCallback, useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import moment from "jalali-moment"
//css
import './cart.css'
import { useDispatch, useSelector } from "react-redux"
import { calculateShoppingCart } from "@/utils/calculateShoppingCart"
import { calculateProfit } from "@/utils/calculateProfit"
import { calculateTax } from "@/utils/calculateTax"
import { calculateFinalPayment } from "@/utils/calculateFinalPayment"
import { findRestaurantById } from "@/utils/findRestaurantById"
import { addToHistory } from "@/redux/historySlice"
import { addPaymentData, clearCart } from "@/redux/cartSlice"
import CartAddress from "@/components/CartAddress"

const Cart = ({ params }) => {
    const [selectedItem, setSelectedItem] = useState(null)
    
    const paymentMethods = PAYMENTMETHODS;
    const userDetails = USER;

    const router = useRouter()
    const dispatch = useDispatch()
    
    const { cart } = useSelector(store => store.cart)
    const { paymentMethod } = useSelector(store => store.cart)
    const { paymentName } = useSelector(store => store.cart)

    const productsCount = cart.reduce((init, current) => init = init + current.count, 0)

    const restaurantId = Number(params.restaurantId)
    const singleRes = findRestaurantById(RESTAURANTS, restaurantId)

    const totalPrice = useMemo(() => calculateShoppingCart(cart), [cart])
    const profit = useMemo(() => calculateProfit(cart), [cart])
    const tax = useMemo(() => calculateTax(totalPrice), [totalPrice])
    const finalPayment = useMemo(() => calculateFinalPayment(tax, profit, totalPrice, singleRes.courierPrice), [totalPrice, profit, tax])

    const currentDate = moment().locale('fa').format('dddd jD MMMM HH:mm')

    const handleInput = useCallback((index, name, method) => {
        setSelectedItem(prev => index)
        
        dispatch(addPaymentData({name, method}))
        
    }, [ selectedItem])
    

    const handleGoBack = useCallback(() => {
        router.back()
    })

    const handleSubmitCart = useCallback(() => {
        dispatch(addToHistory({
            userId: 1,
            items: cart,
            totalPrice,
            restaurantName: singleRes.title,
            courierPrice:singleRes.courierPrice,
            resLogo: singleRes.logo,
            finalPayment,
            profit,
            address:userDetails.address,
            orderTime:currentDate,
            paymentMethod:paymentMethod,
            paymentName:paymentName
        }));
        dispatch(clearCart());
        router.back()
    }, [totalPrice, cart])

    return (
        <>
            <section style={{ backgroundColor: 'lightgray', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <div className="cart-container" style={{ width: '83%', maxWidth: "1200px", }}>
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
                        <div style={{ width: '70%', backgroundColor: 'lightblue', padding: '20px' }}>
                            {
                                userDetails.map((item, index) => (
                                    <CartAddress key={index}  item={item} />
                                ))
                            }
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
                                    paymentMethods.map((item, index) => (
                                        <div style={{ marginBottom: '20px' }} key={item.name}>
                                            <label className={selectedItem === index ? 'active-payment' : ''} htmlFor={`item-${index}`} style={{ border: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }} >
                                                <input
                                                    type="checkbox"
                                                    checked={selectedItem === index}
                                                    onChange={() => handleInput(index, item.name, item.method)}
                                                    id={`item-${index}`}
                                                    // style={{ display: 'none' }}
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
                        {/* leftBar */}
                        <div style={{ width: '30%', backgroundColor: 'lightblue' }}>
                            <div style={{ borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06)', display: "flex", justifyContent: "flex-start", alignItems: 'center', minHeight: '3.5rem', padding: '0px 1rem' }}>
                                <p>سبد خرید ({productsCount})</p>
                            </div>
                            {
                                cart.map(item => (
                                    <div key={item.fullTitle} style={{ borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06)', minHeight: '3rem' }}>
                                        <span style={{ fontSize: '0.875rem' }}>{item.fullTitle}</span>
                                        <div style={{ minWidth: '7.1875rem' }}>
                                            <span style={{ fontSize: '0.875rem', fontWeight: '700' }}>
                                                {item.count} * {item.price} تومان

                                            </span>
                                        </div>

                                        {/* ------------------------ */}

                                    </div>
                                ))
                            }
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '0.75rem' }}>مجموع</span>
                                    <span style={{ fontSize: '0.75rem' }} >{totalPrice} تومان</span>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '0.75rem' }}>مالیات</span>
                                    <span style={{ fontSize: '0.75rem' }}>{tax} تومان</span>
                                </div>

                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '0.75rem' }}>هزینه ارسال</span>
                                    <span style={{ fontSize: '0.75rem' }}>{singleRes.courierPrice}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <span style={{ fontSize: '0.75rem' }}>سود شما</span>
                                    <span style={{ fontSize: '0.75rem' }}>{profit} تومان</span>
                                </div>
                                <hr style={{ marginTop: 10, border: '1px solid rgba(0, 0, 0, 0.05)' }} />
                            </div>
                            <div >
                                <div style={{ marginTop: '0.875rem', display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontWeight: 700, color: 'rgb(58, 61, 66)', fontSize: '0.875rem' }} >قابل پرداخت</span>
                                    <span style={{ fontWeight: 700, color: 'rgb(58, 61, 66)', fontSize: '0.875rem' }}>{finalPayment} تومان</span>
                                </div>
                            </div>
                            <div style={{ marginTop: 50 }}>

                                <button onClick={handleSubmitCart} style={{ cursor: 'pointer', width: '100%', height: '40px', fontSize: 17, backgroundColor: 'rgb(255, 0, 166)', border: '0.09375rem solid rgb(255, 0, 166)', borderRadius: '0.375rem', color: 'white' }}>ثبت سفارش</button>


                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>

    )
}

export default Cart