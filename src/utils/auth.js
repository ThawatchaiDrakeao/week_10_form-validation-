export const STORAGE_KEY = 'week10-login-user'

export const initialForm = {
  email: '',
  password: '',
}

export const getStoredUser = () => {
  const savedUser = localStorage.getItem(STORAGE_KEY)

  if (!savedUser) {
    return null
  }

  try {
    const parsedUser = JSON.parse(savedUser)
    return parsedUser?.email ? parsedUser : null
  } catch {
    localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export function validateEmail(value) {
  if (value === '') {
    return 'Email is required / จำเป็นต้องกรอกอีเมล'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(value)) {
    return 'Invalid email address / รูปแบบอีเมลไม่ถูกต้อง'
  }

  return ''
}

export function validatePassword(value) {
  if (value === '') {
    return 'Password is required / จำเป็นต้องกรอกรหัสผ่าน'
  }

  if (value.length < 8) {
    return 'Password must be at least 8 characters / รหัสผ่านต้องยาวอย่างน้อย 8 ตัวอักษร'
  }

  return ''
}
