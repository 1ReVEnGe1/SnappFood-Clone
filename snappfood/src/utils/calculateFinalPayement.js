export const calculateFinalPayement = (tax, profit, totalPrice, courierPrice)=> {
    const isFreeCourierPrice = courierPrice === 'رایگان'
    if(isFreeCourierPrice){
         return totalPrice - profit + tax 
    }else {
         return totalPrice - profit + tax + courierPrice
    }
    
}