'use client'
import { RESTAURANTS, logoSnappFood } from "@/data/database"
import Image from "next/image"
import Link from "next/link"
import PurchaseHistory from "./PurchaseHistory"
import { useCallback, useEffect, useState, useRef } from "react"
import SearchSvg from "./SVG/SearchSvg"

const HeaderTop = ({ isMainPage }) => {
    const [searchedArray, setSearchedArray] = useState([]);
    const [isShowInput, setIsShowInput] = useState(false);
    const [isOpenOrdersHistory, setIsOpenOrdersHistory] = useState(false);

    const openOrdersSection = useCallback(() => {
        setIsOpenOrdersHistory(true)
    }, [])
    const closeOrdersSection = useCallback(() => {
        setIsOpenOrdersHistory(false)
    }, [])

    useEffect(() => {

        const handleOutsideClick = (e) => {
            if (e.target.classList.contains('orders-history-overlay')) {
                closeOrdersSection()
            }
        }


        if (isOpenOrdersHistory) {
            document.addEventListener('mousedown', handleOutsideClick)
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [isOpenOrdersHistory])

    //-----------------------------------------------------------
    const openInputModal = useCallback(() => {
        setIsShowInput(true)
    }, [])
    const closeInputModal = useCallback(() => {
        setIsShowInput(false)
    }, [])

    useEffect(() => {
        const handleOutClick = (e) => {
            if (e.target.classList.contains('search-input-overlay')) {
                closeInputModal()
            }
        }
        if (isShowInput) {
            document.addEventListener('mousedown', handleOutClick)
        }

        return () => {
            document.removeEventListener('mousedown', handleOutClick)
        }

    }, [isShowInput])

    const handleSearch = (e) => {

        const searchedItems = RESTAURANTS.filter(RES => (
            RES.title.includes(e)
        ))
        setSearchedArray(prev => searchedItems);
        if (e.length === 0) {
            setSearchedArray(searchedArray.length = 0)
        }

    }



    return (
        <>
            {
                isShowInput &&
                <div className={`search-input-overlay`} style={{ backgroundColor: 'rgb(0,0,0,0.5)', width: '100%', height: '100vh', zIndex: 10, display: 'flex', justifyContent: 'center',position:'fixed',top:'0',bottom:'0',right:0 }}>
                    <div style={{ width: '33vw',marginTop:'10px' ,display: 'flex', flexDirection: 'column', alignItems: 'center',justifyContent:'flex-start',height:'fit-content' }}>
                        <div style={{ width: '95%' }} >
                            <div  >
                                <div style={{ position: 'relative' }}>
                                    <div style={{position:'absolute' , top:'50%',transform:'translateY(-40%)',right:'1rem'}}>
                                        <SearchSvg />
                                    </div>
                                    <input type="text" onChange={(e) => handleSearch(e.target.value)} style={{ width: '100%',padding:'0.75rem 2.5rem 0.75rem 0.75rem',borderRadius:'0.625rem',border:'1px solid #eee',fontSize:'1rem' }}  />
                                </div>

                                <div style={{ width: '100%', minHeight: '50px', backgroundColor: '#fff',marginTop:'10px',borderRadius:'0.5rem' }}>
                                    {
                                        searchedArray.length > 0 &&
                                        searchedArray.slice(0, 3).map(item => (
                                            <div key={item.id}>
                                                <Link href={`/${item.category}/${item.id}`} style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                                                    <Image src={item.logo} alt={'slm'} width={50} />
                                                    <h3>{item.title}</h3>
                                                </Link>

                                            </div>
                                        ))
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


            <div className={`${isMainPage ? '' : 'otherPage_header_styles'}`} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 15px 7px 15px', backgroundColor: '#fff', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.05) 0px 2px 8px -2px' }}>
                <div style={{ display: 'flex', gap: '40px', backgroundColor: '#fff', width: '33%' }}>
                    <div style={{ display: 'flex', columnGap: '30px' }}>
                        <Link href={'/'} style={{ width: '60px', height: '60px' }}>
                            <Image style={{ width: '100%', height: '100%' }} src={logoSnappFood} alt={'لوگو اسنپ فود'} />
                        </Link>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                            آدرس - فروزش ، خیابان حامام
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', width: '33%' }}>


                    <div onClick={openInputModal} style={{ backgroundColor: 'rgb(235, 237, 240)', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', columnGap: '10px', width: '450px', padding: '1rem', borderRadius: '0.625rem' }}>
                        <SearchSvg />
                        <p style={{ color: 'rgb(166, 170, 173)' }}>جست‌و‌جو در اسنپ فود</p>
                    </div>
                </div>
                <div style={{ display: 'flex', gap: '20px', justifyContent: 'flex-end', alignItems: 'center', backgroundColor: '#fff', width: '33%' }}>
                    <Link href={'/profile'} style={{ backgroundColor: '#fff' }} >
                        <svg width="14" height="18" viewBox="0 0 14 18" fill="#3A3D42">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9.49992 10.666C11.8011 10.666 13.6666 12.5315 13.6666 14.8327V16.4993C13.6666 16.9596 13.2935 17.3327 12.8333 17.3327C12.373 17.3327 11.9999 16.9596 11.9999 16.4993V14.8327C11.9999 13.452 10.8806 12.3327 9.49992 12.3327H4.49992C3.11921 12.3327 1.99992 13.452 1.99992 14.8327V16.4993C1.99992 16.9596 1.62682 17.3327 1.16659 17.3327C0.706348 17.3327 0.333252 16.9596 0.333252 16.4993V14.8327C0.333252 12.5315 2.19873 10.666 4.49992 10.666H9.49992ZM6.99992 0.666016C9.3011 0.666016 11.1666 2.5315 11.1666 4.83268C11.1666 7.13387 9.3011 8.99935 6.99992 8.99935C4.69873 8.99935 2.83325 7.13387 2.83325 4.83268C2.83325 2.5315 4.69873 0.666016 6.99992 0.666016ZM6.99992 2.33268C5.61921 2.33268 4.49992 3.45197 4.49992 4.83268C4.49992 6.21339 5.61921 7.33268 6.99992 7.33268C8.38063 7.33268 9.49992 6.21339 9.49992 4.83268C9.49992 3.45197 8.38063 2.33268 6.99992 2.33268Z"></path>
                        </svg>
                    </Link>
                    <div style={{ backgroundColor: '#fff' }}>
                        <button onClick={openOrdersSection} >سفارش ها</button>
                    </div>
                </div>
            </div >

            {
                isOpenOrdersHistory &&
                <PurchaseHistory />

            }





        </>

    )
}

export default HeaderTop