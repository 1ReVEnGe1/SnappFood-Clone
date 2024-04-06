import { useCallback, useState } from "react"
import LocationSvg from "./SVG/LocationSvg"

const CartAddress = ({item, index}) => {
    const [selectedAddress, setSelectedAddress] = useState(null)
    
    const handleUserAddress = useCallback((index) => {
        setSelectedAddress(prev => index)
    }, [])


    return (
        <div style={{ marginBottom: '20px' }} key={index}>
            <label className={selectedAddress === index ? 'active-payment' : ''} htmlFor={`user-${index}`} style={{ border: '1px solid #eee', display: 'flex', justifyContent: 'space-between' }} >
                <input
                    type="checkbox"
                    checked={selectedAddress === index}
                    onChange={() => handleUserAddress(index)}
                    id={`user-${index}`}
                    style={{ display: 'none' }}
                />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '15px' }}>
                    <LocationSvg />
                    <div>
                        <p>{item.addressTitle}</p>
                        <p>{item.address}</p>
                    </div>
                </div>
                <p>svg</p>
            </label>
        </div>
    )
}

export default CartAddress