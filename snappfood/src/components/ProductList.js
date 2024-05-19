
import Image from "next/image"
import ProductOptions from "./ProductOptions"
import { useCallback, useEffect, useState } from "react"
//css
import './ProductList.css'
import MultiplySvg from "./SVG/MultiplySvg"
import StarSvg from "./SVG/StarSvg"


const ProductList = ({ item, productCategory }) => {
    const [recipeMin, setRecipeMin] = useState(item.recipe)

    const [isProductsModalOpen, setIsProductsModalOpen] = useState(false)

    const openProductDetails = useCallback(() => {
        setIsProductsModalOpen(true)
    }, [])
    const closeProductDetails = useCallback(() => {
        setIsProductsModalOpen(false)
    }, [])


    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (e.target.classList.contains('product-details-popUp')) {
                closeProductDetails()
            }
        }
        if (isProductsModalOpen) {
            document.addEventListener('mousedown', handleOutsideClick)
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    }, [isProductsModalOpen, closeProductDetails])

    useEffect(() => {
        if (item.recipe.length > 120) {
            setRecipeMin(prev => prev.slice(0, 117) + '...')
        }
    }, [item.recipe])



    return (
        <>


            {

                isProductsModalOpen &&

                <div className="product-details-popUp" >
                    <div className="product-details-popUp-content" >
                        <div className="product-details-popUp-content-head">
                            <button onClick={closeProductDetails}>
                                <MultiplySvg />
                            </button>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '0px 1rem 1rem', gap: '10px' }}>
                            <div style={{ maxWidth: '17.5rem' }}>
                                <Image width={280} height={280} style={{ borderRadius: '0.5rem', objectFit: 'contain' }} src={item.image} alt={item.model} />
                            </div>
                            <div style={{ width: '24rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                                    <h2 style={{ fontSize: '1.125rem' }}>{item.model}</h2>
                                    <span style={{ border: '0.0625rem solid rgb(235, 237, 240)', padding: '0.125rem 0.375rem', borderRadius: '0.25rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '2px' }}>
                                        <span>
                                            <StarSvg />
                                        </span>
                                        <span style={{ fontSize: '0.75rem', fontWeight: 'bold' }}>{item.score}</span>
                                    </span>
                                </div>
                                <div style={{ marginBottom: '2.5rem' }}>
                                    <p style={{ fontSize: '0.875rem' }}>{item.recipe}</p>
                                </div>
                                <div>
                                    {
                                        item.options.map(option => (
                                            <ProductOptions key={option.id} option={option} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2>Comments Section</h2>
                        </div>

                    </div>
                </div>
            }

            {
                productCategory == item.category ?
                    <div style={{ width: "50%", padding: 10 }}>

                        <div onClick={openProductDetails} style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: 10, gap: '5px', cursor: 'pointer' }}>
                            <div style={{ width: '55%', display: 'flex', justifyContent: 'center', flexDirection: 'column', paddingTop: 10 }}>
                                <h2 style={{ fontSize: '13px', marginBottom: 8 }}>{item.model}</h2>
                                <p style={{ fontSize: '11px', lineHeight: '14px', color: 'rgb(57 57 57)' }}>

                                    {recipeMin}
                                </p>
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