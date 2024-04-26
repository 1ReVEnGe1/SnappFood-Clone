import { USER } from "@/data/database"
import Image from "next/image"
import { useSelector } from "react-redux"


const UserProfileOrders = () => {
    const [user1] = useSelector(store => store.purchaseHistory)
    const purchaseHistory = user1?.historyCart
    
    return (
        <>
            <div style={{ padding: '1rem' }}>
                <h1 style={{ color: 'rgb(83, 86, 92)', fontSize: '1rem' }}>سفارش های من</h1>
            </div>
            {
                purchaseHistory?.map(historyItem => (
                    <div key={historyItem.id} style={{ display: 'flex' }}>
                        <div style={{ width: '50%' }}>
                            <div style={{ display: 'flex' }}>
                                <div> <Image src={historyItem.resLogo} alt={historyItem.restaurantName} /> </div>
                                <div>
                                    <p>{historyItem.restaurantName}</p>
                                    <div style={{ display: 'flex' }}>
                                        <span>خوابگاه</span>
                                        <span>شنبه 11 فروردین</span>
                                        <span>16:24</span>
                                    </div>
                                </div>
                            </div>
                            <div style={{ display: 'flex' }} >
                                <div>image</div>
                                <div>image</div>
                                <p>2</p>
                            </div>
                        </div>

                        <div style={{ width: '50%' }}>
                            <div style={{ width: '100%' }}>
                                <p style={{ textAlign: 'left' }}>262000 تومان</p>
                            </div>
                            <div style={{ display: 'flex' }}>
                                <button style={{ width: '50%' }}>مشاهده فاکتور</button>
                                <button style={{ width: '50%' }}>سفارش مجدد</button>
                            </div>
                        </div>
                    </div>
                ))
            }


        </>

    )
}

export default UserProfileOrders