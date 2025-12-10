import Contact from "../models/Contact.js";

// Submit contact form
export const submitContactForm = async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validation
        if (!name || !phone) {
            return res.status(400).json({
                success: false,
                message: "Please provide name and phone number.",
            });
        }

        // Extract class from subject (format: "Admission enquiry for Class X")
        const classMatch = subject?.match(/for (.+)/) || [];
        const classApplyingFor = classMatch[1] || "Not specified";

        // Extract student name from message
        const studentMatch = message?.match(/Student: (.+)/) || [];
        const studentName = studentMatch[1]?.trim() || "";

        // Create new contact entry
        const contact = await Contact.create({
            parentName: name,
            studentName: studentName !== "N/A" ? studentName : "",
            classApplyingFor,
            phone,
            email: email || "",
            message: message || "",
        });

        res.status(201).json({
            success: true,
            message: "Thank you for your enquiry. Our team will contact you shortly.",
            data: contact,
        });
    } catch (error) {
        console.error("Error submitting contact form:", error);
        res.status(500).json({
            success: false,
            message: "Failed to submit enquiry. Please try again later.",
        });
    }
};

// Get all contacts (for admin)
export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: contacts.length,
            data: contacts,
        });
    } catch (error) {
        console.error("Error fetching contacts:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch contacts.",
        });
    }
};
