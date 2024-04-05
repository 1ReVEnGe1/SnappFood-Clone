'use client'
import { USER } from "@/data/database"
import HeaderTop from "@/components/HeaderTop"
import UserNav from "@/components/UserNav"
import ProfileNav from "@/components/ProfileNav"
import WriteSvg from "@/components/SVG/WriteSvg"


const Profile = () => {
    const user = USER[0]




    return (
        <>
            <HeaderTop />
            <section style={{ marginTop: '50px', display: 'flex', width: "100%", justifyContent: 'center' }} >
                <div style={{ width: '80%', maxWidth: '85.375rem', display: 'flex', justifyContent: 'center' }}>

                    <aside style={{ width: '30%', padding: '1.5rem' }}>
                        <div style={{ borderRadius: '0.75rem', border: '0.0625rem solid rgba(58, 61, 66, 0.06)', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px' }}>

                            <UserNav {...user} />

                            <ProfileNav>سفارش های من</ProfileNav>

                            <ProfileNav>تخفیف ها</ProfileNav>

                            <ProfileNav>دعوت از دوستان</ProfileNav>

                            <ProfileNav>لیست تراکنش ها</ProfileNav>

                            <ProfileNav>خروج</ProfileNav>
                        </div>
                    </aside>


                    <main style={{ width: '70%', padding: '1.5rem' }}>
                        <div style={{ backgroundColor: '#fff', borderRadius: '0.875rem', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px' }} >
                            <div style={{ padding: '1rem' }}>
                                <h2 style={{ fontSize: '1rem', fontWeight: '700' }}>حساب کاربری</h2>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <div style={{ padding: '0.875rem', width: '50%' }}>
                                    <p style={{ color: '#A6AAAD', fontWeight: '400', fontSize: '0.875rem' }}>نام و نام خانوادگی</p>
                                    <p style={{ fontWeight: '700', fontSize: '1.125rem' }}>{user.name}{user.lastname}</p>
                                </div>
                                <div style={{ padding: '0.875rem', width: '50%' }}>
                                    <p style={{ color: '#A6AAAD', fontWeight: '400', fontSize: '0.875rem' }}>ایمیل</p>
                                    <p style={{ fontWeight: '700', fontSize: '1.125rem' }}>{user.email}</p>
                                </div>
                            </div>
                            <div style={{ padding: '1rem 1rem 1rem', marginTop: '3rem' }}>
                                <button style={{ width: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.5rem', border: '0.09375rem solid transparent', backgroundColor: 'transparent',color:'rgb(0, 184, 98)',fontWeight:'700',fontSize:'1rem' }}>
                                    <WriteSvg />
                                    تغییر اطلاعات کاربر
                                </button>
                                <button style={{ width: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.5rem', border: '0.09375rem solid transparent', backgroundColor: 'transparent',color:'rgb(0, 184, 98)',fontWeight:'700',fontSize:'1rem' }}>
                                    <WriteSvg />
                                    تغییر رمز عبور
                                </button>
                                
                            </div>
                        </div>
                    </main>
                </div>

            </section>
        </>

    )
}

export default Profile