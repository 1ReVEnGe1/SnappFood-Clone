export const calculateProfit = (cart)=> {
    return cart.reduce( (init , current)=> (current.price * current.count)*(current.discount)/100 + init ,0)
}