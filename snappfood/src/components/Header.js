

import { HEADERCATEGORY } from "@/data/database"
import Image from "next/image"
import Link from "next/link"
import HeaderItems from "./HeaderItems"

const Header = ()=> {
    return(
        <div>
            <div></div>
            <div style={{display:"flex",justifyContent:'center',alignItems:'center'}}>
                {
                    HEADERCATEGORY.map(item => (
                        <HeaderItems key={item.id} item={item} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default Header