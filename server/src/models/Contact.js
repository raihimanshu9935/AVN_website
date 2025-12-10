import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
    {
        parentName: {
            type: String,
            required: true,
            trim: true,
        },
        studentName: {
            type: String,
            trim: true,
        },
        classApplyingFor: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            trim: true,
        },
        message: {
            type: String,
            trim: true,
        },
        status: {
            type: String,
            enum: ["new", "contacted", "resolved"],
            default: "new",
        },
    },
    {
        timestamps: true,
    }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
