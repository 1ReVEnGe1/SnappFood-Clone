import Link from "next/link"
import Image from "next/image"
import { logoSnappFood } from "@/data/database"
import kasbokar from '../assets/mainPagePics/senf.png'
import AparatSvg from "./SVG/AparatSvg"
import InstagramSvg from "./SVG/InstagramSvg"
import LinkedinSvg from "./SVG/LinkedinSvg"
import TelegramSvg from "./SVG/TelegramSvg"
import TwiterSvg from "./SVG/TwiterSvg"

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'rgb(249, 250, 251)', boxSizing: 'border-box', padding: '3rem', width: '100%', direction: 'rtl', display: 'flex' }}>
            <div style={{ width: '40%' }}>
                <div style={{ display: 'flex' }}>
                    <Link href={'#'} style={{ marginLeft: '20px' }}>
                        <Image src={logoSnappFood} alt="اسنپ فود" width={70} />
                    </Link>
                    <div>
                        <h4 style={{ color: 'rgb(255, 0, 166)' }}>اسنپ‌ فود</h4>
                        <h5 style={{ color: 'rgb(83, 86, 92)', fontSize: '0.75rem', fontWeight: '400' }}>تجربه سفارش غذا از رودفود تا اسنپ فود</h5>
                    </div>
                </div>
                <div style={{display:'flex',justifyContent:'flex-start',flexWrap:'wrap',gap:'15px',marginTop:'20px'}}>
                    <Link style={{color:'rgb(58, 61, 66)', backgroundColor:'rgb(255, 255, 255)',boxShadow:'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px',fontSize:'1rem',fontWeight:'700',borderRadius:'50%',border:'0.09375rem solid rgba(58, 61, 66, 0.06)',width:'2.5rem',height:'2.5rem',display:'flex', justifyContent:'center',alignItems:'center'}} href={'https://twitter.com/snappfood'}>
                        <TwiterSvg />
                    </Link>
                    <Link style={{color:'rgb(58, 61, 66)', backgroundColor:'rgb(255, 255, 255)',boxShadow:'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px',fontSize:'1rem',fontWeight:'700',borderRadius:'50%',border:'0.09375rem solid rgba(58, 61, 66, 0.06)',width:'2.5rem',height:'2.5rem',display:'flex', justifyContent:'center',alignItems:'center'}} href={'https://t.me/snappfood'}>
                        <TelegramSvg />
                    </Link>
                    <Link style={{color:'rgb(58, 61, 66)', backgroundColor:'rgb(255, 255, 255)',boxShadow:'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px',fontSize:'1rem',fontWeight:'700',borderRadius:'50%',border:'0.09375rem solid rgba(58, 61, 66, 0.06)',width:'2.5rem',height:'2.5rem',display:'flex', justifyContent:'center',alignItems:'center'}} href={'https://www.linkedin.com/company/snappfood'}>
                        <LinkedinSvg />
                    </Link>
                    <Link style={{color:'rgb(58, 61, 66)', backgroundColor:'rgb(255, 255, 255)',boxShadow:'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px',fontSize:'1rem',fontWeight:'700',borderRadius:'50%',border:'0.09375rem solid rgba(58, 61, 66, 0.06)',width:'2.5rem',height:'2.5rem',display:'flex', justifyContent:'center',alignItems:'center'}} href={'http://instagram.com/snappfood_ir'}>
                        <InstagramSvg />
                    </Link>
                    <Link style={{color:'rgb(58, 61, 66)', backgroundColor:'rgb(255, 255, 255)',boxShadow:'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px',fontSize:'1rem',fontWeight:'700',borderRadius:'50%',border:'0.09375rem solid rgba(58, 61, 66, 0.06)',width:'2.5rem',height:'2.5rem',display:'flex', justifyContent:'center',alignItems:'center'}} href={'https://www.aparat.com/snappfood'}>
                        <AparatSvg />
                    </Link>

                </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }} >
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'} >درباره اسنپ فود</Link>
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'} >فرصت های شغلی</Link>
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'} >وبلاگ</Link>
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'} >قوانین سایت</Link>
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'} >حریم خصوصی</Link>
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'} >ثبت نام فروشندگان</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', width: '25%' }} >
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'}>تماس با اسنپ فود</Link>
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'}>پرسش های متداول</Link>
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'}>ثبت شکایات</Link>
                <Link style={{fontWeight:'400',fontSize:'0.75rem',textDecoration:'none',color:'rgb(58, 61, 66)',lineHeight:'1rem',padding:'0.5rem'}} href={'#'}>اپلیکیشن موبایل</Link>
            </div>
            <div style={{ width: '10%' , display:'flex',justifyContent:'flex-end' }} >
                <Image src={kasbokar} alt="کسب و کار" />
            </div>
        </footer>
    )
}

export default Footer