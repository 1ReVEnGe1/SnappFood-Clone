import { useSelector } from "react-redux"
import CalendarSvg from "./SVG/CalendarSvg"


const UserTransactions = ()=> {
    const [user1]= useSelector(store => store.purchaseHistory)
    const purchaseHistory = user1?.historyCart
    console.log(purchaseHistory)
    return(
        
        <div>
            <h2>لیست تراکنش ها</h2>
            <p>در پرداخت‌های ناموفق بانکی اگر مبلغ از حسابتان کسر شود، معمولاً در کمتر از یک ساعت و نهایتاً تا ۷۲ ساعت به حساب شما برگردانده خواهد شد.</p>
            <div>
                {
                    purchaseHistory.map(historyItem => (
                        <div key={historyItem.id} >
                            <div style={{display:'flex',justifyContent:'space-between'}}>
                                <p>سفارش از {historyItem.restaurantName}</p>
                                <div style={{display:'flex',justifyContent:'center',gap:'5px',alignItems:'center'}}>
                                    <CalendarSvg />
                                    <p>{historyItem.orderTime}</p>
                                </div>
                                <div>
                                    روش پرداخت : {historyItem.paymentMethod}
                                    از طریق : {historyItem.paymentName}
                                </div>
                            </div>
                        </div>  
                    ))
                }
            </div>
        </div>
    )
}
export default UserTransactions