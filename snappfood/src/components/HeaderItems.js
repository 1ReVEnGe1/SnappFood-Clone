import Image from "next/image"
import Link from "next/link"

const HeaderItems = ({item})=> {
    return(
            <Link style={{width:'10%',textDecoration:'none'}} href={'/'}>
                <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
                    <Image src={item.image} alt={item.title} style={{width:'40px',height:'40px'}} />
                    <span>{item.title}</span>
                </div>
            </Link>
        
    )
}

export default HeaderItems