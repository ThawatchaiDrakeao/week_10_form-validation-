# Understanding Summary

## English

### Project Overview
This project is a small React login application created to satisfy a classroom assignment.

The app has two main screens:

- Login screen
- Welcome screen

### What the App Does
The app allows a user to:

- Enter an email
- Enter a password
- Toggle password visibility with show/hide
- Submit the form
- See a loading state while login is processing
- Move to a welcome page after login
- View the saved email on the welcome page
- Logout and clear saved data

### Technical Approach
The project uses:

- React functional components
- React hooks: `useState`
- Browser `localStorage`
- CSS for layout and styling

### Why `localStorage` Was Used
`localStorage` was chosen because it is:

- Simple for beginners
- Easy to demonstrate in class
- Persistent after page refresh
- Good enough for a UI assignment

Important warning:

- It is not safe for real password storage

In the improved version, only the `email` is saved there.

### Feature Breakdown

#### 1. Login Form
The login form collects email and password from the user.

#### 2. Show/Hide Password
The password field changes between hidden and visible text by toggling the input type.

#### 3. Email Validation with Regex
The app uses a regular expression to check whether the email looks like a valid email format.

#### 4. Submit
When the submit button is clicked, the app validates the form and starts a fake loading process.

#### 5. Loading State
The loading state improves UX by showing that the app is processing the login action.

#### 6. Welcome Screen
After login succeeds, the app switches to a welcome screen and displays the user's email.

#### 7. Logout
Logout removes the saved login data from `localStorage` and returns the UI to the login screen.

### Data Flow
The data flow is simple:

1. User types values into inputs
2. State updates in React
3. User submits the form
4. App validates input
5. App shows loading state
6. App stores only the email in `localStorage`
7. App updates the UI to the welcome page

### Security Reality
This solution is correct for the assignment, but not correct for a real secure authentication system.

For production, the proper solution would include:

- Backend API
- Password hashing
- Database storage on the server side
- Authentication tokens or sessions
- Secure validation and authorization flow

### Final Understanding
This assignment is mainly about React UI, state handling, conditional rendering, and browser storage.

The final implementation matches the teacher's requested features while keeping the code readable and easy to explain.

## ภาษาไทย

### ภาพรวมโปรเจกต์
โปรเจกต์นี้คือแอปล็อกอินขนาดเล็กที่สร้างด้วย React เพื่อใช้ส่งงานในชั้นเรียน

แอปมี 2 หน้าหลัก:

- หน้า Login
- หน้า Welcome

### แอปนี้ทำอะไรได้
แอปนี้อนุญาตให้ผู้ใช้:

- กรอกอีเมล
- กรอกรหัสผ่าน
- สลับการแสดงและซ่อนรหัสผ่าน
- ส่งฟอร์ม
- เห็นสถานะ loading ระหว่างระบบกำลังประมวลผล
- ไปยังหน้า welcome หลัง login
- เห็นอีเมลที่บันทึกไว้บนหน้า welcome
- logout และล้างข้อมูลที่บันทึกไว้

### วิธีทางเทคนิคที่ใช้
โปรเจกต์นี้ใช้:

- React functional components
- React hooks: `useState`
- Browser `localStorage`
- CSS สำหรับ layout และ styling

### ทำไมถึงใช้ `localStorage`
เลือกใช้ `localStorage` เพราะว่า:

- ง่ายสำหรับผู้เริ่มต้น
- เหมาะกับการสาธิตในห้องเรียน
- ข้อมูลยังอยู่หลัง refresh หน้า
- เพียงพอสำหรับงาน UI assignment

คำเตือนสำคัญ:

- ไม่ปลอดภัยสำหรับการเก็บรหัสผ่านจริง

ในเวอร์ชันที่ปรับปรุงแล้ว จะบันทึกเฉพาะ `email` เท่านั้น

### แยกฟีเจอร์ทีละส่วน

#### 1. ฟอร์มล็อกอิน
ฟอร์มล็อกอินรับค่า email และ password จากผู้ใช้

#### 2. ปุ่มแสดงและซ่อนรหัสผ่าน
ช่องรหัสผ่านจะสลับระหว่างซ่อนและแสดงด้วยการเปลี่ยน `type` ของ input

#### 3. การตรวจสอบอีเมลด้วย Regex
แอปใช้ regular expression เพื่อตรวจว่าอีเมลมีรูปแบบใกล้เคียงอีเมลที่ถูกต้องหรือไม่

#### 4. ปุ่มส่งข้อมูล
เมื่อกด submit ระบบจะตรวจข้อมูลและเริ่มแสดงสถานะ loading แบบจำลอง

#### 5. สถานะโหลด
สถานะ loading ช่วยให้ผู้ใช้รู้ว่าระบบกำลังประมวลผล

#### 6. หน้า Welcome
เมื่อ login สำเร็จ แอปจะเปลี่ยนไปหน้า welcome และแสดง email ของผู้ใช้

#### 7. การออกจากระบบ
การ logout จะลบข้อมูลที่บันทึกไว้ใน `localStorage` และพากลับไปที่หน้า login

### การไหลของข้อมูล
การไหลของข้อมูลมีลำดับง่าย ๆ ดังนี้:

1. ผู้ใช้พิมพ์ข้อมูลลงใน input
2. State ใน React อัปเดตตามข้อมูลที่กรอก
3. ผู้ใช้ submit ฟอร์ม
4. แอปตรวจสอบข้อมูล
5. แอปแสดง loading state
6. แอปบันทึกเฉพาะ email ลง `localStorage`
7. แอปอัปเดต UI ไปหน้า welcome

### ความจริงด้าน Security
วิธีนี้ถูกต้องสำหรับงานส่ง แต่ไม่ถูกต้องสำหรับระบบยืนยันตัวตนจริงที่ปลอดภัย

ถ้าจะทำ production จริง ควรมี:

- Backend API
- Password hashing
- การเก็บข้อมูลในฐานข้อมูลฝั่ง server
- Authentication tokens หรือ sessions
- Secure validation และ authorization flow

### สรุปสุดท้าย
งานนี้เน้นเรื่อง React UI, การจัดการ state, การ render ตามเงื่อนไข, และการใช้ browser storage

ผลลัพธ์สุดท้ายตรงกับฟีเจอร์ที่อาจารย์สั่ง และยังคงให้โค้ดอ่านง่าย อธิบายง่าย และเหมาะกับการเรียนรู้
