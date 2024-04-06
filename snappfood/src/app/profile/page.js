'use client'
import { USER } from "@/data/database"
import HeaderTop from "@/components/HeaderTop"
import UserNav from "@/components/UserNav"
import { useCallback, useState } from "react"
import UserProfile from "@/components/UserProfile"
import UserProfileOrders from "@/components/UserProfileOrders"


const Profile = () => {
    const user = USER[0]
    const [isOpenProfile, setIsOpenProfile] = useState(true)
    const [isOpenOrders, setIsOpenOrders] = useState(false)
    const [isOpenDiscounts, setIsOpenDiscounts] = useState(false)
    const [isOpenInvite, setIsOpenInvite] = useState(false)
    const [isOpenTransaction, setIsOpenTransaction] = useState(false)


    const profileNavItems = ['سفارش های من', 'تخفیف ها', 'دعوت از دوستان', 'لیست نراکنش ها', 'خروج']

    const handleNavProfile = useCallback((index) => {
        console.log(index)
        switch (index) {
            case 0:
                setIsOpenDiscounts(prev => false)
                setIsOpenInvite(prev => false)
                setIsOpenTransaction(prev => false)
                setIsOpenProfile(prev => false)
                setIsOpenOrders(prev => true)
                break;
            case 1:
                setIsOpenInvite(prev => false)
                setIsOpenTransaction(prev => false)
                setIsOpenProfile(prev => false)
                setIsOpenOrders(prev => false)
                setIsOpenDiscounts(prev => true)
                break;
            case 2:
                setIsOpenOrders(prev => false)
                setIsOpenTransaction(prev => false)
                setIsOpenProfile(prev => false)
                setIsOpenDiscounts(prev => false)
                setIsOpenInvite(prev => true)
                break;
            case 3:
                setIsOpenOrders(prev => false)
                setIsOpenProfile(prev => false)
                setIsOpenDiscounts(prev => false)
                setIsOpenInvite(prev => false)
                setIsOpenTransaction(prev => true)
                break;
            case 4:
                setIsOpenOrders(prev => false)
                setIsOpenDiscounts(prev => false)
                setIsOpenInvite(prev => false)
                setIsOpenTransaction(prev => false)
                setIsOpenProfile(prev => true)
                break;

        }
    }, [])

    return (
        <>
            <HeaderTop />
            <section style={{ marginTop: '50px', display: 'flex', width: "100%", justifyContent: 'center' }} >
                <div style={{ width: '80%', maxWidth: '85.375rem', display: 'flex', justifyContent: 'center' }}>

                    <aside style={{ width: '30%', padding: '1.5rem' }}>
                        <div style={{ borderRadius: '0.75rem', border: '0.0625rem solid rgba(58, 61, 66, 0.06)', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px',backgroundColor:'#fff' }}>

                            <UserNav handleNavProfile={handleNavProfile} {...user} />

                            <div onClick={()=> handleNavProfile(0)} style={{ display: 'flex', justifyContent: 'flex-start', padding: '1rem', alignItems: 'center', borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06),',cursor:'pointer' }}>
                                <span>سفارش های من</span>
                            </div>
                            {/* ---------- */}
                            <div onClick={()=> handleNavProfile(1)} style={{ display: 'flex', justifyContent: 'flex-start', padding: '1rem', alignItems: 'center', borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06),',cursor:'pointer' }}>
                                <span>تخفیف ها</span>
                            </div>
                            {/* ---------- */}
                            <div onClick={()=> handleNavProfile(2)} style={{ display: 'flex', justifyContent: 'flex-start', padding: '1rem', alignItems: 'center', borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06),',cursor:'pointer' }}>
                                <span>دعوت از دوستان</span>
                            </div>
                            {/* ---------- */}
                            <div onClick={()=> handleNavProfile(3)} style={{ display: 'flex', justifyContent: 'flex-start', padding: '1rem', alignItems: 'center', borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06),',cursor:'pointer' }}>
                                <span>لیست تراکنش ها</span>
                            </div>
                            {/* ---------- */}
                            <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '1rem', alignItems: 'center', borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06)',cursor:'pointer' }}>
                                <span>خروج</span>
                            </div>
                            {/* ---------- */}
                            

                        </div>
                    </aside>


                    <main style={{ width: '70%', padding: '1.5rem' }}>
                        <div style={{ backgroundColor: '#fff', borderRadius: '0.875rem', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px' }} >
                            {isOpenProfile && <UserProfile />}
                            {isOpenOrders && <UserProfileOrders />}
                            {isOpenDiscounts && <h1>تخفیف ها</h1>}
                            {isOpenInvite && <h1>دعوت از دوستان</h1>}
                            {isOpenTransaction && <h1>لیست تراکنش ها</h1>}
                        </div>

                    </main>
                </div>

            </section>
        </>

    )
}

export default Profile