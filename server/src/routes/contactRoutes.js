import express from "express";
import {
    submitContactForm,
    getAllContacts,
} from "../controllers/contactController.js";

const router = express.Router();

// POST /api/contact  -> user submits contact form
router.post("/", submitContactForm);

// GET /api/contact   -> (later for admin) list all messages
router.get("/", getAllContacts);

export default router;
