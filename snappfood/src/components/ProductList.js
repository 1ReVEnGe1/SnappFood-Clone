import { iranSans } from "@/app/layout"
import Image from "next/image"
import ProductOptions from "./ProductOptions"

const ProductList = ({item})=> {
    return (
        <>
            <div style={{width:"50%",padding:10}}>

                <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start',padding:10,gap:'5px'}}>
                    <div style={{width:'55%',display:'flex',justifyContent:'center',flexDirection:'column',paddingTop:10}}>
                        <h2 style={{fontSize:'13px',marginBottom:8}}>{item.model}</h2>
                        <p style={{fontSize:'11px',lineHeight:'14px',color:'rgb(57 57 57)'}}>{item.recipe}</p>
                    </div>
                    <div style={{width:"45%",height:'145px',display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
                        <Image src={item.image} alt={item.title} style={{width:"95px",height:'95px',borderRadius:8}}  />
                    </div>    
                </div>  

            <div >     
                {
                    item.options.map(option => (
                        <ProductOptions key={option.id} option={option} />
                    ))
                }
            </div>
                
                
            </div>
            
        </>
    )
}

export default ProductList