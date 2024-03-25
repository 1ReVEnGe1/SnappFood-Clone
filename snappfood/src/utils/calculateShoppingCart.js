export const calculateShoppingCart = (cart)=> {
    return cart.reduce((init, current)=> (current.price * current.count ) + init ,0 )
}
