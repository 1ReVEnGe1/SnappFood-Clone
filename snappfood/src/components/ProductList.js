import { iranSans } from "@/app/layout"
import Image from "next/image"
import ProductOptions from "./ProductOptions"
import { useCallback, useState } from "react"

const ProductList = ({ item, productCategory }) => {
    const [productDetailsPopUp, setProductDetailsPopUp] = useState(false)
    const handleProductDetails = useCallback(() => {
        setProductDetailsPopUp(prev => !prev)
    }, [])

    return (
        <>
            {
                productDetailsPopUp &&
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', position: 'fixed', top: '0', right: '0', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <div style={{ backgroundColor: '#fff', width: '500px', height: '500px',maxHeight:'90vh',boxShadow:'rgba(0, 0, 0, 0.08) 0px 2px 8px, rgba(0, 0, 0, 0.16) 0px 8px 32px',borderRadius:'0.75rem',overflow:'hidden',padding:10 }}>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <div style={{width:'40%',height:'200px'}}>
                                <Image style={{width:'100%',height:'100%',borderRadius:'0.5rem'}} src={item.image} alt={item.model} />
                            </div>
                            <div style={{width:'60%'}}>
                                <div style={{display:'flex',justifyContent:'space-between'}}>
                                    <p>{item.model}</p>
                                    <span>
                                        <span>star</span>
                                        <span>{item.score}</span>
                                    </span>
                                </div>
                                <div>
                                    <p>{item.recipe}</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            }

            {
                productCategory == item.category ?
                    <div style={{ width: "50%", padding: 10 }}>

                        <div onClick={handleProductDetails} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 10, gap: '5px' }}>
                            <div style={{ width: '55%', display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: 10 }}>
                                <h2 style={{ fontSize: '13px', marginBottom: 8 }}>{item.model}</h2>
                                <p style={{ fontSize: '11px', lineHeight: '14px', color: 'rgb(57 57 57)' }}>{item.recipe}</p>
                            </div>
                            <div style={{ width: "45%", height: '145px', display: 'flex', justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Image src={item.image} alt={item.model} style={{ width: "95px", height: '95px', borderRadius: 8 }} />
                            </div>
                        </div>

                        <div >
                            {
                                item.options.map(option => (
                                    <ProductOptions key={option.id} option={option} />
                                ))
                            }
                        </div>


                    </div> :
                    ''

            }


        </>
    )
}

export default ProductList