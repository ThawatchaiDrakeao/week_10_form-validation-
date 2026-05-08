# Week 10 Form Validation

## English

### Overview
This project is a React login form built for a classroom assignment and refined to be more suitable for a portfolio.

Key improvements:

- Built with React and Vite
- Email validation with Regex
- Password visibility toggle
- Loading state during login
- Welcome screen after login
- Logout flow
- Store only the email in `localStorage`
- Cleaner component-based structure

### Features
- Login form with `email` and `password`
- Form validation before submit
- Regular Expression email validation
- Password minimum length validation
- `Show Password` / `Hide Password`
- Loading simulation during submit
- Welcome card that displays the user's email
- Logout button that clears saved login data
- Thai and English documentation

### Project Structure
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

### Why This Version Is Better
Concept:
This version avoids storing the password permanently in the browser.

Why:
Saving passwords in `localStorage` is unsafe and reflects poorly in a portfolio review.

How:
The app stores only the email in `localStorage` and keeps the password only in memory while the form is being used.

### Regular Expression Example
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

### Getting Started
```bash
npm install
npm run dev
```

For a production build:

```bash
npm run build
```

### Validation Rules
- Email must not be empty
- Email must match regex format
- Password must not be empty
- Password must be at least 8 characters

### Portfolio Notes
This project is good for demonstrating:

- React state management
- Conditional rendering
- Form validation
- UI/UX flow handling
- Safer frontend decisions
- Code organization with reusable components

### Important Security Note
This is still a frontend demo project, not a real authentication system.

For real production systems, you should use:

- Backend API
- Password hashing
- Database storage on the server
- Token or session-based authentication
- HTTPS and secure validation

### Author
Built for the JSD Week 10 assignment and portfolio improvement.

## ภาษาไทย

### ภาพรวม
โปรเจกต์นี้เป็นฟอร์มล็อกอินด้วย React ที่สร้างขึ้นสำหรับงานส่งในชั้นเรียน และปรับให้เหมาะกับการใช้ใน portfolio มากขึ้น

จุดเด่นของงาน:

- พัฒนาด้วย React และ Vite
- ตรวจสอบอีเมลด้วย Regex
- มีปุ่มแสดงและซ่อนรหัสผ่าน
- มี loading ตอน login
- มีหน้า welcome หลังเข้าสู่ระบบ
- มีระบบ logout
- เก็บเฉพาะ email ใน `localStorage`
- โครงสร้างโค้ดแยก component อ่านง่ายขึ้น

### ฟีเจอร์
- ฟอร์มล็อกอินที่มี `email` และ `password`
- ตรวจสอบข้อมูลก่อน submit
- ตรวจสอบรูปแบบอีเมลด้วย Regular Expression
- ตรวจสอบความยาวขั้นต่ำของรหัสผ่าน
- ปุ่ม `Show Password` / `Hide Password`
- จำลองสถานะ loading ตอน submit
- การ์ด welcome ที่แสดงอีเมลของผู้ใช้
- ปุ่ม logout ที่ล้างข้อมูลการล็อกอินที่บันทึกไว้
- เอกสารทั้งภาษาไทยและภาษาอังกฤษ

### โครงสร้างโปรเจกต์
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

### ทำไมเวอร์ชันนี้ดีกว่าเดิม
แนวคิด:
เวอร์ชันนี้หลีกเลี่ยงการเก็บรหัสผ่านแบบถาวรใน browser

เหตุผล:
การเก็บรหัสผ่านใน `localStorage` ไม่ปลอดภัย และทำให้พอร์ตดูไม่ดีในสายตาคนรีวิวงาน

วิธีที่ใช้:
แอปจะเก็บเฉพาะ email ใน `localStorage` และเก็บ password ไว้ในหน่วยความจำชั่วคราวระหว่างใช้งานฟอร์มเท่านั้น

### ตัวอย่าง Regex
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

### วิธีเริ่มต้นใช้งาน
```bash
npm install
npm run dev
```

สำหรับ production build:

```bash
npm run build
```

### กฎการตรวจสอบ
- Email ต้องไม่ว่าง
- Email ต้องตรงตามรูปแบบ regex
- Password ต้องไม่ว่าง
- Password ต้องยาวอย่างน้อย 8 ตัวอักษร

### หมายเหตุสำหรับพอร์ต
โปรเจกต์นี้เหมาะสำหรับใช้โชว์:

- การจัดการ state ใน React
- การ render แบบมีเงื่อนไข
- การทำ form validation
- การออกแบบ flow การใช้งาน
- การตัดสินใจด้าน frontend ที่ปลอดภัยขึ้น
- การจัดโครงสร้างโค้ดด้วย component ที่นำกลับมาใช้ได้

### หมายเหตุด้านความปลอดภัย
นี่เป็นโปรเจกต์เดโมฝั่ง frontend ยังไม่ใช่ระบบ authentication จริง

สำหรับระบบ production ควรมี:

- Backend API
- Password hashing
- การเก็บข้อมูลในฐานข้อมูลฝั่ง server
- Token หรือ session-based authentication
- HTTPS และการตรวจสอบความปลอดภัยที่เหมาะสม

### ผู้จัดทำ
สร้างสำหรับงาน JSD Week 10 และปรับให้เหมาะกับการใช้งานใน portfolio
