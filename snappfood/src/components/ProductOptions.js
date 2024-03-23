// import { iranSans } from "@/app/layout"

import AddButton from "./AddButton"

const ProductOptions = ({option})=> {
    return (
        
            <div style={{display:'flex',justifyContent:'space-between'}}>
                <div>
                    <p style={{fontSize:11}}>{option.title}</p>
                    <span style={{fontSize:12,fontWeight:'bold'}}>{option.price}<span style={{fontWeight:'300'}}>تومان</span></span>
                </div>
                <AddButton option={option} />        
            </div>
        
    )
}
export default ProductOptions