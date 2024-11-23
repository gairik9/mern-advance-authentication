import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { ConnectDB } from "./db/ConnectDB.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(cors({ origin: process.env.CLIENT_URL, credentials: true })); //* Allows Us To Make Requests From Different Origins.
app.use(express.json()); //* Allows Us To Parse Incoming Requests With JSON Payloads which is under : request.body
app.use(cookieParser()); //* Allows Us To Parse Incoming Requests With Cookies which is under : request.cookies

app.use("/api/v1/auth", authRoutes);

app.listen(PORT, () => {
  ConnectDB();
  console.log(`Server is running on port : ${PORT}`);
});
