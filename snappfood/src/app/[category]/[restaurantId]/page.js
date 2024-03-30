'use client'

import { RESTAURANTS } from "@/data/database"
import ProductList from "@/components/ProductList"
import CartPage from "@/components/CartPage"
import Link from "next/link"
import { findRestaurantById } from "@/utils/findRestaurantById"
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { clearCart } from "@/redux/cartSlice"
import Image from "next/image"
import { uniqueArrayElementMaker } from "@/utils/uniqueArrayElementMaker"
import RestaurantCategoryList from "@/components/RestaurantCategoryList"
//svg
import ClockSvg from "@/components/SVG/ClockSvg"
import CourierSvg from "@/components/SVG/CourierSvg"
import ZooksSvg from "@/components/SVG/ZooksSvg"
import LowerSvg from "@/components/SVG/LowerSvg"
//css files
import './popupDeleteCard.css'
import './breadCrumbRestaurantPage.css'
import './restaurant.css'
import StarSvg from "@/components/SVG/StarSvg"
import HeaderTop from "@/components/HeaderTop"

const restaurant = ({ params }) => {
    const [popUpDelete, setPopUpDelete] = useState(false)
    const dispatch = useDispatch()

    const restaurantId = Number(params.restaurantId)
    const singleRes = findRestaurantById(RESTAURANTS, restaurantId)


    const togglePopUpDelete = useCallback(() => {
        setPopUpDelete(prevPopUp => !prevPopUp)
    }, [popUpDelete])

    const handleClearCart = useCallback(() => {
        dispatch(clearCart())
        setPopUpDelete(prevPopUp => !prevPopUp)
    }, [])

    const resProductsCategory = uniqueArrayElementMaker(singleRes)


    return (
        <>
            <HeaderTop />
            <main style={{ backgroundColor: '#F9FAFB' }} >
                {popUpDelete &&
                    <div className="popup-overlay">
                        <div className="popup-contentbox" >
                            <p>آیا از حذف سبد خرید خود مطمئن هستید ؟</p>
                            <div>
                                <button className="reject-modal-btn" onClick={togglePopUpDelete} >انصراف</button>
                                <button className="accept-modal-btn" onClick={handleClearCart}>حذف سبد</button>
                            </div>
                        </div>
                    </div>
                }


                <div className="breadcrumb-restaurant-page">
                    <Link href={`/`}>
                        اسنپ فود
                        <LowerSvg />
                    </Link>

                    <Link href={`/${params.category}`}>
                        {params.category}
                        <LowerSvg />
                    </Link>
                    <p>{singleRes.title}</p>
                </div>

                <div className="restaurant-content-container">
                    <div className="restaurant-content">

                        {/* rightBar */}
                        <aside className="restaurant-content-rightbar-container" >
                            <div className="restaurant-content-rightbar" >
                                <div className="restaurant-content-rightbar-head" >
                                    <div className="restaurant-content-rightbar-head-imgbox" >
                                        <Image src={singleRes.logo} alt={singleRes.title} />
                                    </div>
                                    <div className="restaurant-content-rightbar-head-details" >
                                        <div>
                                            <StarSvg />
                                            <p style={{ fontWeight: 'bold' }} >{singleRes.score}</p>
                                            <p style={{ color: 'rgb(166, 170, 173)' }}>({singleRes.totalVote} امتیاز)</p>
                                        </div>
                                        <h1 >{singleRes.title}</h1>
                                    </div>
                                </div>

                                <div className="restaurant-content-rightbar-comments" >
                                    <button >
                                        <ZooksSvg />
                                        <p style={{ color: '#00D170' }}>اطلاعات و نظرات</p>
                                    </button>
                                </div>
                                <nav className="restaurant-content-rightbar-categories" >
                                    {
                                        resProductsCategory.map((category, index) => <RestaurantCategoryList key={category} category={category} index={index} />)
                                    }

                                </nav>
                            </div>

                        </aside>

                        {/* middle */}
                        <section className="restaurant-content-middle" >
                            {
                                resProductsCategory.map(productCategory => (
                                    <div key={productCategory}>
                                        <div style={{ padding: 10 }} id={productCategory} >
                                            <p style={{ textAlign: 'center', fontSize: '13px' }}>
                                                {productCategory}
                                            </p>
                                            <hr />
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                                            {singleRes.products.map(item => (
                                                <ProductList key={item.id} item={item} productCategory={productCategory} />
                                            ))}
                                        </div>

                                    </div>
                                ))
                            }
                        </section>

                        {/* leftBar */}

                        <aside style={{ width: '25%', padding: '1rem' }}>
                            <div style={{ position: 'sticky', top: '1rem', }} >
                                <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '14px 10px', backgroundColor: 'white', borderRadius: '0.5rem', border: "1px solid rgba(58, 61, 66, 0.06)", marginBottom: '10px' }}>
                                    <ClockSvg />
                                    <p style={{ fontSize: '0.75rem' }}>دریافت در سریع ترین زمان ممکن</p>
                                    <Link href={'#'}> + </Link>
                                </div>
                                <div style={{ padding: '14px 10px', display: 'flex', backgroundColor: 'white', borderRadius: '0.5rem', border: "1px solid rgba(58, 61, 66, 0.06)", gap: '10px', marginBottom: '10px' }}>
                                    <div >
                                        <CourierSvg />
                                    </div>

                                    <p style={{ fontSize: '0.75rem' }}>{singleRes.courier}{singleRes.courier === 'رایگان' ? 'تومان' : ' '}
                                        {singleRes.courierPrice}</p>

                                </div>
                                <CartPage singleRes={singleRes} togglePopUpDelete={togglePopUpDelete} routes={params} />
                            </div>

                        </aside>
                    </div>
                </div>

            </main>
        </>

    )
}

export default restaurant