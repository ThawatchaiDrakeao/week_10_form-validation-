function WelcomeCard({ email, onLogout }) {
  const firstLetter = email?.charAt(0).toUpperCase() || 'U'

  return (
    <article className="welcome-card">
      <div className="avatar" aria-hidden="true">
        {firstLetter}
      </div>
      <h1>Welcome!</h1>
      <p className="subtitle">
        Login successful. / เข้าสู่ระบบสำเร็จ
      </p>

      <div className="email-box">
        <span>Email</span>
        <strong>{email}</strong>
      </div>

      <button type="button" className="logout-button" onClick={onLogout}>
        Logout
      </button>
    </article>
  )
}

export default WelcomeCard
