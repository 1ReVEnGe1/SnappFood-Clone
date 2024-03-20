import { logoSnappFood } from "@/data/database"
import Image from "next/image"

const HeaderTop = ()=> {
    return(
        <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'lightgoldenrodyellow',padding:'7px 15px 7px 15px'}}>
            <div style={{display:'flex',backgroundColor:'lightcyan',gap:'40px'}}>
                <div style={{width:'60px',height:'60px'}}>
                    <Image style={{width:'100%',height:'100%'}}  src={logoSnappFood}  alt={'لوگو اسنپ فود'} />
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    آدرس - فروزش ، خیابان حامام
                </div>
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <input type="text" style={{}} />
                </div>
            </div>
            <div style={{display:'flex',gap:'20px',justifyContent:'center',alignItems:'center'}}>
                <div >admak</div>
                <div>سفارش ها</div>
            </div>

        </div>
    )
}

export default HeaderTop