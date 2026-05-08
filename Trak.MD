# Track / แผนงาน

## Project Goal / เป้าหมายโปรเจกต์
- Build a React login page based on the reference images.
- สร้างหน้า Login ด้วย React ให้หน้าตาใกล้เคียงภาพตัวอย่าง
- Store only the user `email` in browser `localStorage`.
- เก็บเฉพาะ `email` ของผู้ใช้ไว้ใน `localStorage` ของเบราว์เซอร์
- Add `Show Password`, `Hide Password`, `Submit`, loading state, welcome page, and logout.
- เพิ่มปุ่ม `Show Password`, `Hide Password`, `Submit`, หน้าโหลดตอน login, หน้า welcome และปุ่ม logout

## Task List / รายการงาน
- [x] Create React project structure
- [x] สร้างโครงสร้างโปรเจกต์ React
- [x] Replace starter template with login form UI
- [x] แทนโค้ดเริ่มต้นด้วยหน้า login form
- [x] Add form state management with React hooks
- [x] เพิ่มการจัดการ state ด้วย React hooks
- [x] Add email and password input fields
- [x] เพิ่มช่องกรอก email และ password
- [x] Add show/hide password button
- [x] เพิ่มปุ่มแสดงและซ่อนรหัสผ่าน
- [x] Add submit button and loading state
- [x] เพิ่มปุ่ม submit และสถานะ loading
- [x] Save login data to localStorage
- [x] บันทึกข้อมูล login ลง localStorage
- [x] Add regex-based email validation
- [x] เพิ่มการตรวจสอบอีเมลด้วย Regular Expression
- [x] Remove password persistence from browser storage
- [x] เอาการเก็บรหัสผ่านถาวรออกจาก browser storage
- [x] Build welcome page with email display
- [x] สร้างหน้า welcome สำหรับแสดง email
- [x] Add logout button and clear storage
- [x] เพิ่มปุ่ม logout และล้างข้อมูลใน storage
- [x] Write detailed thinking-process document
- [x] เขียนไฟล์อธิบายกระบวนการคิดอย่างละเอียด
- [x] Write detailed understanding summary document
- [x] เขียนไฟล์สรุปความเข้าใจอย่างละเอียด
- [x] Install dependencies
- [x] ติดตั้ง dependencies
- [x] Run production build test
- [x] ทดสอบ build สำหรับใช้งานจริง

## Important Notes / หมายเหตุสำคัญ
- `localStorage` is fine for classroom demos, but it is not safe for real authentication systems.
- `localStorage` เหมาะกับงานสาธิตในห้องเรียน แต่ไม่ปลอดภัยพอสำหรับระบบล็อกอินจริง
- In production, passwords should never be stored in plain text on the client.
- ในระบบจริง ห้ามเก็บรหัสผ่านแบบ plain text ไว้ฝั่ง client
