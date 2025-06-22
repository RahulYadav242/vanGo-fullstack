import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.route.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// ✅ Setup CORS first
const allowedOrigins = [
  "http://localhost:5173",
  "https://vango-fullstack.onrender.com"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);


// ✅ Then parse cookies and JSON
app.use(cookieParser());
app.use(express.json());

// ✅ Then your routes
app.use('/api/auth', authRoutes);








import {connectDB} from '../src/lib/db.js'






const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);
    connectDB()
})

