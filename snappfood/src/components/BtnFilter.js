'use client'

const BtnFilter = ({type, selectedType})=> {
    return(
        <button onClick={ ()=> selectedType(type) }>{type}</button>
    )
}

export default BtnFilter