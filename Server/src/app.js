import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: process.env.CLIENT_URL }));
app.use(cookieParser());

// Routes
import userRoute from "./routes/user.route.js";
app.use("/api/v1/user", userRoute);

export { app };
