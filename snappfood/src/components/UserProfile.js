import { USER } from "@/data/database"
import WriteSvg from "./SVG/WriteSvg"

const UserProfile = () => {
    const user = USER[0]
    return (
        <>
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
                <button style={{ width: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.5rem', border: '0.09375rem solid transparent', backgroundColor: 'transparent', color: 'rgb(0, 184, 98)', fontWeight: '700', fontSize: '1rem' }}>
                    <WriteSvg />
                    تغییر اطلاعات کاربر
                </button>
                <button style={{ width: 'fit-content', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '2.5rem', border: '0.09375rem solid transparent', backgroundColor: 'transparent', color: 'rgb(0, 184, 98)', fontWeight: '700', fontSize: '1rem' }}>
                    <WriteSvg />
                    تغییر رمز عبور
                </button>

            </div>
        </>

    )
}

export default UserProfile