function LoginForm({
  formData,
  showPassword,
  isLoading,
  errorMessage,
  onChange,
  onSubmit,
  onTogglePassword,
}) {
  return (
    <article className="login-card">
      <div className="title-group">
        <p className="eyebrow">'The School of Athens'</p>
        <h1>Welcome to <br /> 'The School of Athens'.</h1>
        <p className="subtitle">
          Enter your email and password to continue.
          <br />
          กรอกอีเมลและรหัสผ่านเพื่อเข้าสู่ระบบ
        </p>
      </div>

      <form className="login-form" onSubmit={onSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="example@mail.com"
          value={formData.email}
          onChange={onChange}
          autoComplete="username"
          disabled={isLoading}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          placeholder="At least 8 characters"
          value={formData.password}
          onChange={onChange}
          autoComplete="current-password"
          disabled={isLoading}
        />

        <div className="actions-row">
          <button
            type="button"
            className="ghost-button"
            onClick={onTogglePassword}
            disabled={isLoading}
          >
            {showPassword ? 'Hide Password' : 'Show Password'}
          </button>
        </div>

        {errorMessage ? (
          <p className="error-message" role="alert">
            {errorMessage}
          </p>
        ) : null}

        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>

      <footer className="credit">
      Crafted by Fong, a scholar at 'The School of Athens'        
      </footer>
    </article>
  )
}

export default LoginForm
