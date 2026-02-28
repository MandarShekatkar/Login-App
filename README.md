# 🚀 MERN Login Authentication App

A full-stack authentication system built using the MERN stack (MongoDB, Express, React, Node.js).

---

## 🛠 Tech Stack

### Frontend
- React.js
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt (Password Hashing)

---

## ✨ Features

- User Signup
- User Login
- Password Hashing using bcrypt
- JWT Authentication
- Protected Routes
- Logout Functionality
- MongoDB Database Integration

---

## 📂 Project Structure
Login/
│
├── Backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
│
├── frontend/
│ ├── src/
│ └── package.json
│
└── README.md


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository
git clone https://github.com/MandarShekatkar/Login-App.git

### 2️⃣ Backend Setup
cd Backend
npm install
npm run dev

### 3️⃣ Frontend Setup
cd frontend
npm install
npm start


## 🔐 Environment Variables
Create a `.env` file inside the Backend folder:
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000


---

## 🎯 Learning Outcomes

- Understanding JWT-based authentication
- Secure password storage using bcrypt
- Connecting React frontend with Node backend
- Handling protected routes
- Full-stack project structure

---

## 📸 Future Improvements

- Add refresh tokens
- Add forgot password feature
- Add role-based authentication
- Deploy on Render / Vercel

---

## 👨‍💻 Author
Mandar Shekatkar
