import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection function
const connectDB = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.log("⚠️  MONGO_URI not found. Running without database.");
            return;
        }

        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "school_website",
        });

        console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB connection error:", error.message);
        console.log("⚠️  Server will run without database functionality.");
    }
};

// Middlewares
app.use(express.json());

app.use(
    cors({
        origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    })
);

// Health check route
app.get("/api/health", (req, res) => {
    res.json({
        status: "ok",
        message: "School website backend is running 🚀",
        database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    });
});

// Contact routes
app.use("/api/contact", contactRoutes);

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`🚀 Server started on http://localhost:${PORT}`);
    });
});
