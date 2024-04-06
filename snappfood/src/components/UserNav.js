import { useCallback } from "react"
import LeftArrowSvg from "./SVG/LeftArrowSvg"
const UserNav = ({name, number, lastname , handleNavProfile}) => {

    const handleIndex = useCallback(()=> {
        handleNavProfile(4)
    },[])

    return (
        <div onClick={handleIndex } style={{ cursor:'pointer',padding: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06)' }}>
            <div>
                <h2>{name} {lastname} </h2>
                <span>{number}</span>
            </div>
            <div>
                <LeftArrowSvg />
            </div>
        </div>
    )
}

export default UserNav