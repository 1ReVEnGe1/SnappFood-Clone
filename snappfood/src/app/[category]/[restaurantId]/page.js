'use client'

import { RESTAURANTS } from "@/data/database"
import ProductList from "@/components/ProductList"
import CartPage from "@/components/CartPage"
import Link from "next/link"
import { findRestaurantById } from "@/utils/findRestaurantById"
import { useCallback, useState } from "react"
import { useDispatch } from "react-redux"
import { clearCart } from "@/redux/cartSlice"



const restaurant = ({ params }) => {
    const restaurantId = Number(params.restaurantId)
    const singleRes = findRestaurantById(RESTAURANTS, restaurantId)

    const subtitle = singleRes.products.find(product => product.category === 'پیتزا')
    const subtitle2 = singleRes.products.find(product => product.category === 'برگر')
    const subtitlePizzaDetails = singleRes.products.filter(product => product.category === 'پیتزا')
    const subtitleBurgurDetails = singleRes.products.filter(product => product.category === 'برگر')
    const [popUpDelete, setPopUpDelete] = useState(false)

    const dispatch = useDispatch()
    const togglePopUpDelete = useCallback(() => {
        setPopUpDelete(prevPopUp => !prevPopUp)
    }, [popUpDelete])

    const handleClearCart = useCallback(()=> {
        dispatch(clearCart())
        setPopUpDelete(prevPopUp => !prevPopUp)
    }, [])

    return (
        <div style={{ backgroundColor: '#F9FAFB' }}>

            {popUpDelete &&
                <div style={{ width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ backgroundColor: '#fff', boxShadow: 'rgba(0, 0, 0, 0.08) 0px 2px 8px, rgba(0, 0, 0, 0.16) 0px 8px 32px', borderRadius: '0.75rem', width: '30rem' }}>
                        <p style={{ padding: '1rem' }}>آیا از حذف سبد خرید خود مطمئن هستید ؟</p>
                        <div>
                            <button onClick={togglePopUpDelete} >انصراف</button>
                            <button onClick={handleClearCart}>حذف سبد خرید</button>
                        </div>
                    </div>
                </div>
            }


            <div>{params.category}/{singleRes.title}</div>


            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>

                {/* rightBar */}
                <div style={{ backgroundColor: 'lightcyan', width: '28%' }}>
                    <h2>{singleRes.title}</h2>
                </div>

                {/* middle */}
                <div style={{ width: '44%', borderRadius: 8 }}>
                    <div style={{ padding: 10 }}>
                        <p style={{ textAlign: 'center', fontSize: '13px' }}>
                            {subtitle.category}
                        </p>
                        <hr />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {subtitlePizzaDetails.map(item => <ProductList key={item.id} item={item} />)}
                    </div>
                    {/* ------------------------------------ */}

                    <div style={{ padding: 10 }}>
                        <p style={{ textAlign: 'center', fontSize: '13px' }}>
                            {subtitle2.category}
                        </p>
                        <hr />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {subtitleBurgurDetails.map(item => <ProductList key={item.id} item={item} />)}
                    </div>
                </div>

                {/* leftBar */}
                <div style={{ width: '28%', display: "flex", flexDirection: 'column', gap: '10px', padding: 30 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '14px 10px', backgroundColor: 'white', borderRadius: '0.5rem', border: "1px solid rgba(58, 61, 66, 0.06)" }}>
                        <p>clock</p>
                        <p>دریافت در سریع ترین زمان ممکن</p>
                        <Link href={'#'}> + </Link>
                    </div>
                    <div style={{ padding: '14px 10px', display: 'flex', backgroundColor: 'white', borderRadius: '0.5rem', border: "1px solid rgba(58, 61, 66, 0.06)", gap: '10px' }}>
                        <div >
                            <svg width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="#FA284B" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.22208 2.0811C7.25604 1.17639 8.62397 0.833252 10 0.833252C11.376 0.833252 12.744 1.17639 13.7779 2.0811C14.7742 2.95289 15.3514 4.25004 15.4115 5.9513C16.2602 6.3957 16.6667 6.94781 16.6667 7.49992L15.3278 7.49992C15.1623 8.65756 14.7722 9.73999 14.2132 10.6511C15.0794 10.9899 15.7307 11.4367 16.2155 11.9028C17.4544 13.094 17.5 14.8769 17.5 16.147L17.5 18.3332C17.5 18.7935 17.1269 19.1666 16.6667 19.1666H14.1707L14.1667 19.1666L14.1626 19.1666L5.83736 19.1666L5.83333 19.1666L5.8293 19.1666H3.33333C3.11232 19.1666 2.90036 19.0788 2.74408 18.9225C2.5878 18.7662 2.5 18.5543 2.5 18.3332V16.147C2.5 14.8769 2.54557 13.094 3.7845 11.9028C4.26932 11.4367 4.92061 10.9899 5.78679 10.6511C5.22781 9.73999 4.83772 8.65756 4.67221 7.49992H3.33333C3.33333 6.94781 3.73977 6.3957 4.58854 5.9513C4.64857 4.25004 5.22575 2.95289 6.22208 2.0811ZM6.35982 7.49992C6.53911 8.51064 6.92727 9.4232 7.44478 10.1348C8.17273 11.1357 9.09342 11.6666 10 11.6666C10.9066 11.6666 11.8273 11.1357 12.5552 10.1348C13.0727 9.4232 13.4609 8.51064 13.6402 7.49992L6.35982 7.49992ZM13.6867 5.35216C12.7116 5.13157 11.4875 4.99992 10 4.99992C8.51254 4.99992 7.28839 5.13157 6.3133 5.35216C6.45885 4.38885 6.84178 3.75348 7.31959 3.3354C7.95229 2.78178 8.87603 2.49992 10 2.49992C11.124 2.49992 12.0477 2.78178 12.6804 3.3354C13.1582 3.75348 13.5411 4.38885 13.6867 5.35216ZM10 13.3333C11.1832 13.3333 12.2438 12.8219 13.0958 12.0301L13.0997 12.0312C14.0439 12.307 14.6591 12.7184 15.0604 13.1042C15.7203 13.7387 15.8333 14.783 15.8333 16.147L15.8333 17.4999H15L15 16.6666C15 16.4716 14.9317 16.2829 14.8069 16.1331L13.7652 14.8831C13.6069 14.6931 13.3723 14.5833 13.125 14.5833L6.875 14.5833C6.62768 14.5833 6.39314 14.6931 6.23482 14.8831L5.19315 16.1331C5.06835 16.2829 5 16.4716 5 16.6666V17.4999H4.16667V16.147C4.16667 14.783 4.27975 13.7387 4.93963 13.1042C5.3409 12.7184 5.95613 12.307 6.90031 12.0312L6.90424 12.0301C7.75623 12.8219 8.81679 13.3333 10 13.3333ZM13.3333 17.4999L13.3333 16.9683L12.7347 16.2499H7.26531L6.66667 16.9683V17.4999H13.3333Z" fill="#53565C"></path>
                            </svg>
                        </div>

                        <p>{singleRes.courier}</p>
                        {singleRes.courier === 'رایگان' ? 'تومان' : ' '}
                        {singleRes.courierPrice}
                    </div>
                    <CartPage singleRes={singleRes} togglePopUpDelete={togglePopUpDelete} />
                </div>
            </div>
        </div>
    )
}

export default restaurant