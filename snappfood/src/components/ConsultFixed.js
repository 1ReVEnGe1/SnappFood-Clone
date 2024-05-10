import Link from "next/link"
import ConsultSvg from "./SVG/ConsultSvg"

const ConsultFixed = () => {
    return (
        <>
            <Link href={'#'} style={{display:'flex',justifyContent:'center',alignItems:'center',position:'fixed',bottom:'16px',right:'16px',backgroundColor:'rgb(255, 0, 166)',fontSize:'1.125rem',fontWeight:'700',color:'rgb(255, 255, 255)',borderRadius:'50%',boxShadow:'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px',width:'3rem',height:'3rem'}}>
                <ConsultSvg />
            </Link>
        </>
    )
}

export default ConsultFixed