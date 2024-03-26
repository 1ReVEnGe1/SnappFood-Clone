export const calculateFinalPayment = (tax, profit, totalPrice, courierPrice)=> {
    const isFreeCourierPrice = courierPrice === 'رایگان'
    if(isFreeCourierPrice){
         return totalPrice - profit + tax 
    }else {
         return totalPrice - profit + tax + courierPrice
    }
    
}