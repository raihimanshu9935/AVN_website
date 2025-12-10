import React from "react";

const initialFormState = {
    parentName: "",
    studentName: "",
    classApplyingFor: "",
    phone: "",
    email: "",
    message: "",
};

function Contact() {
    const [form, setForm] = React.useState(initialFormState);
    const [submitting, setSubmitting] = React.useState(false);
    const [success, setSuccess] = React.useState("");
    const [error, setError] = React.useState("");

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!form.parentName || !form.phone || !form.classApplyingFor) {
            setError("Please fill in all required fields marked with *.");
            return;
        }

        setSubmitting(true);

        try {
            const payload = {
                name: form.parentName,
                email: form.email,
                phone: form.phone,
                subject: `Admission enquiry for ${form.classApplyingFor}`,
                message: `
Parent/Guardian: ${form.parentName}
Student: ${form.studentName || "N/A"}
Class applying for: ${form.classApplyingFor}
Phone: ${form.phone}
Email: ${form.email || "N/A"}

Message:
${form.message || "N/A"}
        `.trim(),
            };

            console.log("Submitting to backend:", payload);

            const res = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            const data = await res.json();
            console.log("Backend response:", data);

            if (!res.ok || !data.success) {
                throw new Error(data.message || "Failed to submit enquiry");
            }

            setSuccess(
                data.message ||
                "Thank you for your enquiry. Our admission team will contact you shortly."
            );
            setForm(initialFormState);
        } catch (err) {
            console.error("Contact form error:", err);
            setError(
                err.message || "Unable to submit your enquiry. Please try again later."
            );
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <section
            id="contact"
            className="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl px-4 sm:px-6 py-7 sm:py-9 shadow-soft"
        >
            <div className="pointer-events-none absolute top-0 left-0 h-24 w-24 rounded-full bg-cyan-500/25 blur-2xl" />
            <div className="relative flex flex-col lg:flex-row gap-8">
                {/* Left info */}
                <div className="flex-1">
                    <p className="text-[11px] font-semibold tracking-wide text-cyan-300 uppercase">
                        Contact & Enquiry
                    </p>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-50">
                        We'd love to hear from you
                    </h2>
                    <p className="mt-3 text-sm text-slate-300 max-w-xl">
                        Share your details and our team will get in touch to help you with
                        admissions, campus visits, or any school-related queries.
                    </p>

                    <div className="mt-5 space-y-3 text-sm text-slate-200">
                        <div>
                            <p className="font-semibold text-slate-50 mb-1">School Address</p>
                            <p className="text-slate-300 text-xs sm:text-sm">
                                AVN Senior Secondary School
                                <br />
                                Baghrain, Bansgaon, Gorakhpur
                                <br />
                                Bansgaon, Uttar Pradesh – 273403
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-50 mb-1">Contact</p>
                            <p className="text-slate-300 text-xs sm:text-sm">
                                Phone: +91-6394015344
                                <br />
                                Email: raihimanshu9935@gmail.com
                            </p>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-50 mb-1">Office Hours</p>
                            <p className="text-slate-300 text-xs sm:text-sm">
                                Monday – Saturday: 8:00 AM – 2:30 PM
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right form */}
                <div className="flex-1">
                    <form
                        onSubmit={handleSubmit}
                        className="rounded-2xl bg-slate-950/80 border border-slate-700 p-4 sm:p-6 shadow-soft"
                    >
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1 text-xs sm:text-sm">
                                <label className="font-medium text-slate-100">
                                    Parent / Guardian Name *
                                </label>
                                <input
                                    type="text"
                                    name="parentName"
                                    value={form.parentName}
                                    onChange={handleChange}
                                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                    placeholder="Enter full name"
                                />
                            </div>

                            <div className="flex flex-col gap-1 text-xs sm:text-sm">
                                <label className="font-medium text-slate-100">Student Name</label>
                                <input
                                    type="text"
                                    name="studentName"
                                    value={form.studentName}
                                    onChange={handleChange}
                                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                    placeholder="Enter student's name"
                                />
                            </div>

                            <div className="flex flex-col gap-1 text-xs sm:text-sm">
                                <label className="font-medium text-slate-100">
                                    Class Applying For *
                                </label>
                                <select
                                    name="classApplyingFor"
                                    value={form.classApplyingFor}
                                    onChange={handleChange}
                                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                >
                                    <option value="">Select class</option>
                                    <option value="Nursery">Nursery</option>
                                    <option value="KG">KG</option>
                                    <option value="I">Class I</option>
                                    <option value="II">Class II</option>
                                    <option value="III">Class III</option>
                                    <option value="IV">Class IV</option>
                                    <option value="V">Class V</option>
                                    <option value="VI">Class VI</option>
                                    <option value="VII">Class VII</option>
                                    <option value="VIII">Class VIII</option>
                                    <option value="IX">Class IX</option>
                                    <option value="X">Class X</option>
                                    <option value="XI">Class XI</option>
                                    <option value="XII">Class XII</option>
                                </select>
                            </div>

                            <div className="flex flex-col gap-1 text-xs sm:text-sm">
                                <label className="font-medium text-slate-100">Mobile Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                    placeholder="+91-XXXXXXXXXX"
                                />
                            </div>

                            <div className="flex flex-col gap-1 text-xs sm:text-sm sm:col-span-2">
                                <label className="font-medium text-slate-100">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="flex flex-col gap-1 text-xs sm:text-sm sm:col-span-2">
                                <label className="font-medium text-slate-100">Message / Query</label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={4}
                                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40 resize-none"
                                    placeholder="Share your question or request here..."
                                />
                            </div>
                        </div>

                        {error && (
                            <p className="mt-3 text-xs sm:text-sm text-red-400">{error}</p>
                        )}
                        {success && (
                            <p className="mt-3 text-xs sm:text-sm text-emerald-300">
                                {success}
                            </p>
                        )}

                        <button
                            type="submit"
                            disabled={submitting}
                            className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft hover:shadow-glow disabled:opacity-60 disabled:cursor-not-allowed transition-shadow"
                        >
                            {submitting ? "Sending..." : "Submit Enquiry"}
                        </button>

                        <p className="mt-2 text-[11px] text-slate-400">
                            By submitting this form, you agree to be contacted by the school
                            via phone / email for admission-related communication.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
