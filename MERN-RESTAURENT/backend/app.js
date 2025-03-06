import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";

const app = express();

// Load environment variables
dotenv.config({ path: "./.env" });

// Define the port
const port = process.env.PORT || 3005; // Fallback to 7000 if PORT is not defined

// Middleware
app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

app.get("/", (req, res, next) => {
    return res.status(200).json({
        success: true,
        message: "HELLO WORLD AGAIN",
    });
});

// Database Connection
dbConnection();

// Error Middleware
app.use(errorMiddleware);

// Start Server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

export default app;