import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser"

import connectDB from "./config/mongodb.js"
import AuthRouter from "./routes/AuthRoutes.js"
import userRouter from "./routes/userRoutes.js"


const app = express();
const port = process.env.PORT || 3000
connectDB()

const allowedOrigins = [process.env.ALLOWED_ORIGIN, 'http://localhost:5173']

app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: allowedOrigins, credentials: true }))

// API Endpoints
app.get("/", (req, res) => res.json({ msg: "working" }))
app.use('/api/auth', AuthRouter)
app.use('/api/user', userRouter)

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))