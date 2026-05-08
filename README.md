# Week 10 Form Validation

React login form project with bilingual documentation, email validation using Regular Expression, loading state, welcome screen, and logout flow.

โปรเจกต์ฟอร์มล็อกอินด้วย React พร้อมเอกสาร 2 ภาษา การตรวจสอบอีเมลด้วย Regular Expression, loading state, หน้า welcome และ logout

## Overview / ภาพรวม

This project was built for a classroom assignment and improved to be more suitable for a portfolio.

โปรเจกต์นี้สร้างขึ้นสำหรับงานส่งในชั้นเรียน และถูกปรับให้เหมาะกับการใช้เป็น portfolio มากขึ้น

Key improvements:

- Built with React and Vite
- Email validation with Regex
- Password visibility toggle
- Loading state during login
- Welcome screen after login
- Logout flow
- Store only email in `localStorage`
- Cleaner component-based structure

จุดเด่นของงาน:

- พัฒนาด้วย React และ Vite
- ตรวจสอบอีเมลด้วย Regex
- มีปุ่มแสดงและซ่อนรหัสผ่าน
- มี loading ตอน login
- มีหน้า welcome หลังเข้าสู่ระบบ
- มีระบบ logout
- เก็บเฉพาะ email ใน `localStorage`
- โครงสร้างโค้ดแยก component อ่านง่ายขึ้น

## Features / ฟีเจอร์

- Login form with `email` and `password`
- Form validation before submit
- Regular Expression email validation
- Password minimum length validation
- `Show Password` / `Hide Password`
- Loading simulation during submit
- Welcome card that displays the user's email
- Logout button that clears saved login data
- Thai and English documentation

## Project Structure / โครงสร้างโปรเจกต์

```text
src/
  components/
    LoginForm.jsx
    WelcomeCard.jsx
  utils/
    auth.js
  App.jsx
  App.css
  index.css
  main.jsx
```

## Why This Version Is Better / ทำไมเวอร์ชันนี้ดีกว่าเดิม

**Concept**  
This version avoids storing the password permanently in the browser.

เวอร์ชันนี้หลีกเลี่ยงการเก็บรหัสผ่านแบบถาวรใน browser

**Why**  
Saving passwords in `localStorage` is unsafe and looks weak in a portfolio review.

การเก็บรหัสผ่านใน `localStorage` ไม่ปลอดภัย และทำให้พอร์ตดูไม่ดีในสายตาคนรีวิวงาน

**How**  
The app stores only the email in `localStorage` and keeps the password only in memory while the form is being used.

แอปจะเก็บเฉพาะ email ใน `localStorage` และเก็บ password ไว้ในหน่วยความจำชั่วคราวระหว่างใช้งานฟอร์มเท่านั้น

## Regular Expression Example / ตัวอย่าง Regex

```js
function validateEmail(value) {
  if (value === '') {
    return 'Email is required'
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (!emailRegex.test(value)) {
    return 'Invalid email address'
  }

  return ''
}
```

## Getting Started / วิธีเริ่มต้นใช้งาน

```bash
npm install
npm run dev
```

For production build:

```bash
npm run build
```

## Validation Rules / กฎการตรวจสอบ

- Email must not be empty
- Email must match regex format
- Password must not be empty
- Password must be at least 8 characters

## Portfolio Notes / หมายเหตุสำหรับพอร์ต

This project is good for demonstrating:

- React state management
- Conditional rendering
- Form validation
- UI/UX flow handling
- Safer frontend decisions
- Code organization with reusable components

โปรเจกต์นี้เหมาะสำหรับโชว์:

- การจัดการ state ใน React
- การ render แบบมีเงื่อนไข
- การทำ form validation
- การออกแบบ flow การใช้งาน
- การตัดสินใจด้าน frontend ที่ปลอดภัยขึ้น
- การจัดโครงสร้างโค้ดด้วย component ที่นำกลับมาใช้ได้

## Important Security Note / หมายเหตุด้านความปลอดภัย

This is still a frontend demo project, not a real authentication system.

นี่เป็นโปรเจกต์เดโมฝั่ง frontend ยังไม่ใช่ระบบ authentication จริง

For real production systems, you should use:

- Backend API
- Password hashing
- Database storage on the server
- Token or session-based authentication
- HTTPS and secure validation

## Author / ผู้จัดทำ

Built for JSD Week 10 assignment and portfolio improvement.

สร้างสำหรับงาน JSD Week 10 และปรับให้เหมาะกับการใช้งานใน portfolio
