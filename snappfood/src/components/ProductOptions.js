// import { iranSans } from "@/app/layout"

import AddButton from "./AddButton"

const ProductOptions = ({ option }) => {
    return (

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
            <div>
                <p style={{ fontSize: 11 }}>{option.title}</p>
                <div style={{ display: 'flex', gap: '5px' }}>
                    {
                        Boolean(option.discount) === true ?
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold', width: 'fit-content', padding: 3, borderRadius: 5, height: '25px', backgroundColor: 'rgba(255, 0, 166, 0.06)' }}>
                                <span style={{ color: 'rgb(255, 0, 166)', fontSize: '14px' }}>{option.discount}% </span>
                            </div>
                            :
                            ''
                    }

                    {
                        Boolean(option.discount) === true ?
                            <div style={{ display: 'flex', flexDirection: 'column', fontSize: '11px', gap: '3px' }}>
                                <span style={{ fontSize: 12, fontWeight: 'bold' }}><s style={{ color: 'rgb(166, 170, 173)' }}>{option.price}</s><span style={{ fontWeight: '300' }}>تومان</span></span>
                                <span style={{ fontSize: 12, fontWeight: 'bold' }}>{option.price * (100 - option.discount) / 100} تومان</span>
                            </div>

                            :
                            <div>
                                <span style={{ fontSize: 12, fontWeight: 'bold' }}>{option.price} تومان </span>
                            </div>
                    }


                </div>

            </div>
            <AddButton option={option} />
        </div>

    )
}
export default ProductOptions