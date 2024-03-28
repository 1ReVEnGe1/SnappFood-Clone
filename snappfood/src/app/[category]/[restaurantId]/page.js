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



const restaurant = ({ params }) => {
    const restaurantId = Number(params.restaurantId)
    const singleRes = findRestaurantById(RESTAURANTS, restaurantId)

    const subtitle = singleRes.products.find(product => product.category === 'پیتزا')
    const subtitle2 = singleRes.products.find(product => product.category === 'برگر')
    const subtitle3 = singleRes.products.find(product => product.category === 'ساندویچ')
    const subtitlePizzaDetails = singleRes.products.filter(product => product.category === 'پیتزا')
    const subtitleBurgurDetails = singleRes.products.filter(product => product.category === 'برگر')
    const subtitleSandDetails = singleRes.products.filter(product => product.category === 'ساندویچ')
    const [popUpDelete, setPopUpDelete] = useState(false)

    const dispatch = useDispatch()
    const togglePopUpDelete = useCallback(() => {
        setPopUpDelete(prevPopUp => !prevPopUp)
    }, [popUpDelete])

    const handleClearCart = useCallback(() => {
        dispatch(clearCart())
        setPopUpDelete(prevPopUp => !prevPopUp)
    }, [])

    const resProductsCategory = uniqueArrayElementMaker(singleRes)


    return (
        <div style={{ backgroundColor: '#F9FAFB' }}>
            {popUpDelete &&
                <div style={{ width: '100%', height: '100vh', backgroundColor: 'rgba(0,0,0,0.4)', position: 'fixed', top: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
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
                <aside style={{ width: '28%', padding: '1rem' }}>
                    <div style={{ position: 'sticky', top: '1rem' }}>
                        <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: 25 }}>
                            <div style={{ width: '80px', height: '80px', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.3) 0px 8px 32px -16px' }}>
                                <Image src={singleRes.logo} style={{ width: '100%', height: '100%', border: '1px solid rgba(58, 61, 66, 0.06)', borderRadius: '0.75rem' }} alt={singleRes.title} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: "column", justifyContent: 'space-evenly' }}>
                                <div style={{ display: 'flex', gap: '5px' }}>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="#FFCE00"><path fillRule="evenodd" clipRule="evenodd" d="M5.99984 9.62097L2.42572 11.5L3.10832 7.52016L0.216797 4.70163L4.21278 4.12098L5.99984 0.5L7.7869 4.12098L11.7829 4.70163L8.89136 7.52016L9.57395 11.5L5.99984 9.62097Z"></path></svg>
                                    <p>{singleRes.score}</p>
                                    <p style={{ color: 'rgb(166, 170, 173)' }}>({singleRes.totalVote})</p>
                                </div>
                                <h1 style={{ fontSize: 17 }}>{singleRes.title}</h1>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <button style={{ display: 'flex', width: '100%', justifyContent: 'center', alignItems: 'center', gap: '10px', paddingTop: '8px', paddingBottom: '8px', color: '#D2D4D6', backgroundColor: '#fff', border: '0.09375rem solid rgba(0, 133, 66, 0.06)', borderRadius: '3rem', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.0625rem" height="1.0625rem" viewBox="0 0 20 20" fill="#D2D4D6">
                                    <path d="M9.00033 0.666016C13.5952 0.666016 17.3337 4.40435 17.3337 8.99935C17.3337 13.5944 13.5953 17.3327 9.00033 17.3327C4.40532 17.3327 0.666992 13.5944 0.666992 8.99935C0.666992 4.40435 4.40532 0.666016 9.00033 0.666016ZM9.00033 2.33268C5.32413 2.33268 2.33366 5.32751 2.33366 8.99935C2.33366 12.6712 5.32413 15.666 9.00033 15.666C12.6765 15.666 15.667 12.6712 15.667 8.99935C15.667 5.32755 12.6765 2.33268 9.00033 2.33268ZM8.17072 8.99242C8.17072 8.53602 8.5407 8.16604 8.9971 8.16602H9.011C9.4674 8.16603 9.83739 8.53602 9.83739 8.99242V11.9866C9.83739 12.0849 9.83722 12.1999 9.83689 12.3316C9.83572 12.7928 9.46152 13.166 9.00033 13.166C8.54196 13.166 8.17039 12.7944 8.17039 12.3361C8.17039 12.3355 8.17039 12.335 8.17038 12.3345C8.17061 12.217 8.17072 12.101 8.17072 11.9866V8.99242ZM7.95866 5.89252C7.95866 5.31723 8.42102 4.85086 9.00033 4.85086C9.57562 4.85086 10.042 5.31322 10.042 5.89252C10.042 6.46782 9.57963 6.93419 9.00033 6.93419C8.42503 6.93419 7.95866 6.47183 7.95866 5.89252Z" fill="#00D170"></path>
                                </svg>
                                <p style={{ color: '#00D170' }}>اطلاعات و نظرات</p>
                            </button>
                        </div>
                        <nav style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'flex-end', marginTop: 30 }}>
                            {
                                resProductsCategory.map(category => <RestaurantCategoryList key={category} category={category} />)
                            }

                        </nav>
                    </div>

                </aside>

                {/* middle */}
                <main style={{ width: '44%', borderRadius: 8 }}>
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
                </main>

                {/* leftBar */}

                <aside style={{ width: '28%', padding: '1rem' }}>
                    <div style={{ position: 'sticky', top: '1rem', }} >
                        <div style={{ display: 'flex', justifyContent: 'space-evenly', padding: '14px 10px', backgroundColor: 'white', borderRadius: '0.5rem', border: "1px solid rgba(58, 61, 66, 0.06)", marginBottom: '10px' }}>
                            <svg width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M15.5003 10.1667C15.8685 10.4429 15.9431 10.9652 15.667 11.3334L14.167 13.3334H15.8337C16.1493 13.3334 16.4379 13.5117 16.579 13.794C16.7202 14.0764 16.6897 14.4142 16.5003 14.6667L14.0003 18C13.7242 18.3682 13.2019 18.4429 12.8337 18.1667C12.4655 17.8906 12.3909 17.3682 12.667 17L14.167 15H12.5003C12.1847 15 11.8961 14.8217 11.755 14.5394C11.6138 14.2571 11.6443 13.9192 11.8337 13.6667L14.3337 10.3334C14.6098 9.96519 15.1321 9.89057 15.5003 10.1667Z" fill="#FFCE00"></path>
                                <path d="M12.1572 1.95046C10.7442 1.57185 9.25646 1.57185 7.8435 1.95045C6.43054 2.32906 5.14213 3.07292 4.10777 4.10728C3.07341 5.14164 2.32955 6.43005 1.95094 7.84301C1.57234 9.25597 1.57234 10.7437 1.95094 12.1567C2.32955 13.5696 3.07341 14.858 4.10777 15.8924C5.14213 16.9268 6.43054 17.6706 7.8435 18.0492C8.28805 18.1683 8.745 17.9045 8.86412 17.46C8.98324 17.0154 8.71942 16.5585 8.27486 16.4393C7.1445 16.1365 6.11377 15.5414 5.28628 14.7139C4.45879 13.8864 3.8637 12.8557 3.56082 11.7253C3.25794 10.5949 3.25794 9.40475 3.56082 8.27438C3.8637 7.14401 4.45879 6.11328 5.28628 5.28579C6.11377 4.4583 7.1445 3.86321 8.27487 3.56033C9.40524 3.25745 10.5954 3.25745 11.7258 3.56033C12.8562 3.86321 13.8869 4.45831 14.7144 5.28579C15.5419 6.11328 16.137 7.14401 16.4398 8.27438C16.5589 8.71893 17.0159 8.98275 17.4605 8.86363C17.905 8.74452 18.1688 8.28757 18.0497 7.84301C17.6711 6.43005 16.9272 5.14164 15.8929 4.10728C14.8585 3.07292 13.5701 2.32906 12.1572 1.95046Z" fill="#676A70"></path>
                                <path d="M10.0003 4.99984C9.57296 4.99984 9.22074 5.32154 9.1726 5.73599L9.16699 5.83317V9.72984L7.08043 10.9467C6.71129 11.162 6.56914 11.6174 6.73638 11.9996L6.78051 12.0864C6.99585 12.4555 7.4512 12.5977 7.83345 12.4304L7.92022 12.3863L10.4202 10.928C10.6478 10.7952 10.7975 10.5639 10.8279 10.306L10.8337 10.2082L10.8337 5.83317C10.8337 5.37293 10.4606 4.99984 10.0003 4.99984Z" fill="#676A70"></path>
                            </svg>
                            <p>دریافت در سریع ترین زمان ممکن</p>
                            <Link href={'#'}> + </Link>
                        </div>
                        <div style={{ padding: '14px 10px', display: 'flex', backgroundColor: 'white', borderRadius: '0.5rem', border: "1px solid rgba(58, 61, 66, 0.06)", gap: '10px', marginBottom: '10px' }}>
                            <div >
                                <svg width="1.25rem" height="1.25rem" viewBox="0 0 20 20" fill="#FA284B" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6.22208 2.0811C7.25604 1.17639 8.62397 0.833252 10 0.833252C11.376 0.833252 12.744 1.17639 13.7779 2.0811C14.7742 2.95289 15.3514 4.25004 15.4115 5.9513C16.2602 6.3957 16.6667 6.94781 16.6667 7.49992L15.3278 7.49992C15.1623 8.65756 14.7722 9.73999 14.2132 10.6511C15.0794 10.9899 15.7307 11.4367 16.2155 11.9028C17.4544 13.094 17.5 14.8769 17.5 16.147L17.5 18.3332C17.5 18.7935 17.1269 19.1666 16.6667 19.1666H14.1707L14.1667 19.1666L14.1626 19.1666L5.83736 19.1666L5.83333 19.1666L5.8293 19.1666H3.33333C3.11232 19.1666 2.90036 19.0788 2.74408 18.9225C2.5878 18.7662 2.5 18.5543 2.5 18.3332V16.147C2.5 14.8769 2.54557 13.094 3.7845 11.9028C4.26932 11.4367 4.92061 10.9899 5.78679 10.6511C5.22781 9.73999 4.83772 8.65756 4.67221 7.49992H3.33333C3.33333 6.94781 3.73977 6.3957 4.58854 5.9513C4.64857 4.25004 5.22575 2.95289 6.22208 2.0811ZM6.35982 7.49992C6.53911 8.51064 6.92727 9.4232 7.44478 10.1348C8.17273 11.1357 9.09342 11.6666 10 11.6666C10.9066 11.6666 11.8273 11.1357 12.5552 10.1348C13.0727 9.4232 13.4609 8.51064 13.6402 7.49992L6.35982 7.49992ZM13.6867 5.35216C12.7116 5.13157 11.4875 4.99992 10 4.99992C8.51254 4.99992 7.28839 5.13157 6.3133 5.35216C6.45885 4.38885 6.84178 3.75348 7.31959 3.3354C7.95229 2.78178 8.87603 2.49992 10 2.49992C11.124 2.49992 12.0477 2.78178 12.6804 3.3354C13.1582 3.75348 13.5411 4.38885 13.6867 5.35216ZM10 13.3333C11.1832 13.3333 12.2438 12.8219 13.0958 12.0301L13.0997 12.0312C14.0439 12.307 14.6591 12.7184 15.0604 13.1042C15.7203 13.7387 15.8333 14.783 15.8333 16.147L15.8333 17.4999H15L15 16.6666C15 16.4716 14.9317 16.2829 14.8069 16.1331L13.7652 14.8831C13.6069 14.6931 13.3723 14.5833 13.125 14.5833L6.875 14.5833C6.62768 14.5833 6.39314 14.6931 6.23482 14.8831L5.19315 16.1331C5.06835 16.2829 5 16.4716 5 16.6666V17.4999H4.16667V16.147C4.16667 14.783 4.27975 13.7387 4.93963 13.1042C5.3409 12.7184 5.95613 12.307 6.90031 12.0312L6.90424 12.0301C7.75623 12.8219 8.81679 13.3333 10 13.3333ZM13.3333 17.4999L13.3333 16.9683L12.7347 16.2499H7.26531L6.66667 16.9683V17.4999H13.3333Z" fill="#53565C"></path>
                                </svg>
                            </div>

                            <p>{singleRes.courier}</p>
                            {singleRes.courier === 'رایگان' ? 'تومان' : ' '}
                            {singleRes.courierPrice}
                        </div>
                        <CartPage singleRes={singleRes} togglePopUpDelete={togglePopUpDelete} />
                    </div>

                </aside>
            </div>
        </div>
    )
}

export default restaurant