import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import authRoutes from './routes/authRoutes.js'
import cookieParser from "cookie-parser";

dotenv.config()

const app = express();

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Vite default port
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());


app.use("/api/auth", authRoutes)

// test route
app.get("/", (req,res)=>{
    res.send("API Running...");
});

connectDb();

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is Running On Port ${PORT}`);
    
})