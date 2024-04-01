'use client'
import moment from "jalali-moment"
import Image from "next/image"
import { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import InvoiceModal from "./InvoiceModal"


const PurchaseHistory = () => {
    const [isOpenInvoice, setIsOpenInvoice] = useState(false)
    const [purchasedItem , setPurchasedItem ] = useState(null)
    const currentDate = moment().locale('fa').format('dddd jD MMMM HH:mm')

    const [user_1] = useSelector(store => store.purchaseHistory)
    const purchaseHistory = user_1.historyCart


    const openInvoiceModal = useCallback((id) => {
        setPurchasedItem(prev => id)
        setIsOpenInvoice(true)
    }, [])
    
    const closeInvoiceModal = useCallback(() => {
        setIsOpenInvoice(false)
    }, [])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (e.target.classList.contains('invoice-overlay')) {
                closeInvoiceModal()
            }

        }

        if (isOpenInvoice) {
            document.addEventListener('mousedown', handleClickOutside)
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isOpenInvoice, closeInvoiceModal])


    return (
        <>
            {
                isOpenInvoice && 
                <InvoiceModal purchaseId={purchasedItem} />
            }

            {/* -------------------------- */}
            <div className='orders-history-overlay' style={{ width: '100%', height: '100vh', zIndex: 99, position: 'fixed', backgroundColor: 'rgba(0, 0, 0, 0.6)', top: '0', right: '0' }}>
                <div style={{ padding: '1rem', width: '25rem', backgroundColor: '#fff', height: '100vh', position: 'fixed', left: '0', top: '0' }}>
                    <div>
                        <p>سفارش های پیشین</p>
                    </div>
                    <div style={{ border: '0.0625rem solid rgba(58, 61, 66, 0.12)', borderRadius: '0.75rem 0.75rem 0px 0px' }}>
                        {
                            purchaseHistory.map(item => (
                                <>
                                    <div style={{ borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.12)', }}>
                                        <div style={{ display: 'flex', padding: '0.75rem 0px 0.5rem' }}>
                                            <div style={{ width: '3rem', height: '3rem', marginRight: '0.75rem' }}>
                                                <Image src={item.resLogo} style={{ width: '100%', height: '100%' }} alt={item.restaurantName} />
                                            </div>
                                            <div style={{ marginRight: '1rem' }}>
                                                <p>{item.restaurantName}</p>
                                                <p>{currentDate}</p>
                                            </div>
                                        </div>
                                        <div style={{ margin: '1rem', display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(0, 133, 66, 0.06)' }}>
                                            <p style={{ fontSize: '0.875rem' }}>نظرتان را درباره این سفارش به اشتراک بگذارید.</p>
                                            <p style={{ fontSize: '0.875rem' }}>ثبت نظر نظر</p>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                            <button onClick={() => openInvoiceModal(item.id)} style={{ padding: '0.2rem 1.5rem', marginLeft: '1rem', minWidth: '6.6875rem', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                                                <p style={{ fontSize: '0.875rem' }}>svg</p>
                                                <p style={{ fontSize: '0.875rem' }}>مشاهده فاکتور</p>
                                                
                                            </button>
                                            <button style={{ padding: '0.2rem 1.5rem', minWidth: '6.6875rem', display: 'flex', justifyContent: 'center', gap: '1rem', alignItems: 'center' }}>
                                                <p>svg</p>
                                                <p>سفارش مجدد</p>
                                            </button>
                                        </div>
                                    </div>
                                </>
                            ))
                        }

                    </div>
                </div>
            </div>
        </>


    )
}

export default PurchaseHistory