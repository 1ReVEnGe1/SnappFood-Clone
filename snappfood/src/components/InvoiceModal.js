import { useSelector } from "react-redux"


const InvoiceModal = ({ purchaseId }) => {
    const [user_1] = useSelector(store => store.purchaseHistory)
    const purchaseHistory = user_1.historyCart

    const Invoice = purchaseHistory.filter(facture => facture.id === purchaseId)[0]
    console.log(Invoice)


    return (
        <div className='invoice-overlay' style={{ width: '100%', height: '100vh', zIndex: 999, position: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.6)', top: '0', right: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ padding: '1rem', width: '25rem', backgroundColor: '#fff', maxHeight: '80vh', }}>
                <div>
                    <p style={{ fontSize: '1.5rem', fontWeight: '700', lineHeight: '2rem', margin: '0.25rem 0rem' }}>فاکتور سفارش</p>
                    <p style={{ fontSize: '0.875rem', margin: '0px 0rem 1rem' }}>{Invoice.restaurantName}</p>
                </div>
                <div >
                    {
                        Invoice.items.map(item => (
                            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06)', height: '3rem' }}>
                                <p style={{ fontSize: '0.875rem' }}>{item.fullTitle}</p>
                                <div style={{ display: 'flex' }}>
                                    <p style={{ fontSize: '0.875rem' }}> {item.count} * </p>
                                    <p style={{ fontSize: '0.875rem' }}> {item.price} تومان </p>
                                </div>
                            </div>
                        ))
                    }
                    <div style={{ borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>جمع کل</p>
                            <p>{Invoice.totalPrice}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p>هزینه ارسال</p>
                            <p>{Invoice.courierPrice}</p>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <p style={{ color: 'rgb(255, 0, 166)' }}>تخفیف</p>
                            <p style={{ color: 'rgb(255, 0, 166)' }}>{Invoice.profit} <span style={{ color: 'rgb(83, 86, 92)' }}>تومان</span> </p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p>مجموع</p>
                        <p>{Invoice.finalPayment}</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default InvoiceModal