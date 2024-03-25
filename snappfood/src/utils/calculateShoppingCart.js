export const calculateShoppingCart = (cart)=> {
    return cart.reduce((init, current)=> (current.price * current.count * (100 - current.discount)/100 ) + init ,0 )
}