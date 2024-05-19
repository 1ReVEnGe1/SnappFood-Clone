'use client'

import { HEADERCATEGORY } from "@/data/database"
import HeaderItems from "./HeaderItems"
import { usePathname } from "next/navigation";

//css files
import './Header.css'
import { useEffect, useState } from "react";
import HeaderTop from "./HeaderTop";

const Header = () => {
    const [isMainPage, setIsMainPage] = useState(true)
    const router = usePathname()

    useEffect(() => {
        if (router == '/') {
            setIsMainPage(prev => true)
        } else {
            setIsMainPage(prev => false)
        }

    }, [router])

    return (
        <>
            <div className={`${isMainPage ? 'mainPage_header_styles' : 'mainPage_header_styles2'}`} style={{width:'100%'}}>
                <HeaderTop isMainPage={isMainPage} />

                <div>
                    <div className={`bg_white ${isMainPage ? 'box_shadow' : ''} `} style={{ paddingBottom: '10px',paddingTop:'10px', display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                        {
                            HEADERCATEGORY.map(item => (
                                <HeaderItems key={item.id} item={item} />
                            ))
                        }

                    </div>
                </div>
            </div>
        </>
    )
}

export default Header