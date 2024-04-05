const ProfileNav = ({ children }) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '1rem', alignItems: 'center', borderBottom: '0.0625rem solid rgba(58, 61, 66, 0.06)' }}>
            <span>{children}</span>
        </div>
    )
}

export default ProfileNav