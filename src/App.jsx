import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm.jsx'
import WelcomeCard from './components/WelcomeCard.jsx'
import {
  STORAGE_KEY,
  getStoredUser,
  initialForm,
  validateEmail,
  validatePassword,
} from './utils/auth.js'

function App() {
  const [formData, setFormData] = useState(initialForm)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [loggedInUser, setLoggedInUser] = useState(getStoredUser)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const trimmedEmail = formData.email.trim()
    const trimmedPassword = formData.password.trim()
    const emailError = validateEmail(trimmedEmail)
    const passwordError = validatePassword(trimmedPassword)

    if (emailError) {
      setErrorMessage(emailError)
      return
    }

    if (passwordError) {
      setErrorMessage(passwordError)
      return
    }

    setErrorMessage('')
    setIsLoading(true)

    window.setTimeout(() => {
      const userData = {
        email: trimmedEmail,
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData))
      setLoggedInUser(userData)
      setFormData(initialForm)
      setShowPassword(false)
      setIsLoading(false)
    }, 1400)
  }

  const handleLogout = () => {
    localStorage.removeItem(STORAGE_KEY)
    setLoggedInUser(null)
    setFormData(initialForm)
    setShowPassword(false)
    setErrorMessage('')
  }

  return (
    <main className="app-shell">
      <section className="panel">
        {loggedInUser ? (
          <WelcomeCard email={loggedInUser.email} onLogout={handleLogout} />
        ) : (
          <LoginForm
            formData={formData}
            showPassword={showPassword}
            isLoading={isLoading}
            errorMessage={errorMessage}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onTogglePassword={() => setShowPassword((current) => !current)}
          />
        )}
      </section>
    </main>
  )
}

export default App
