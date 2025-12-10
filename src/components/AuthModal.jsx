import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const initialForm = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    classOrSubject: "",
};

function AuthModal({ isOpen, onClose, onAuthSuccess }) {
    const [mode, setMode] = React.useState("login"); // 'login' | 'signup'
    const [role, setRole] = React.useState("student"); // 'student' | 'teacher'
    const [form, setForm] = React.useState(initialForm);
    const [error, setError] = React.useState("");
    const [success, setSuccess] = React.useState("");

    React.useEffect(() => {
        if (isOpen) {
            setError("");
            setSuccess("");
        }
    }, [isOpen, mode, role]);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setError("");
        setSuccess("");

        if (!form.email || !form.password) {
            setError("Email aur password required hai.");
            return;
        }

        if (mode === "signup") {
            if (!form.name) {
                setError("Full name required hai.");
                return;
            }
            if (form.password.length < 6) {
                setError("Password kam se kam 6 characters ka hona chahiye.");
                return;
            }
            if (form.password !== form.confirmPassword) {
                setError("Password aur confirm password match nahi ho rahe.");
                return;
            }
        }

        // Yahan baad me real API call aayega
        console.log("AUTH SUBMIT:", {
            mode,
            role,
            form,
        });

        const userPayload = {
            role, // 'student' | 'teacher'
            email: form.email,
            name:
                form.name && form.name.trim().length > 0
                    ? form.name.trim()
                    : role === "student"
                        ? "Student"
                        : "Teacher",
            classOrSubject: form.classOrSubject || "",
            loggedInAt: new Date().toISOString(),
            authMode: mode,
        };

        setSuccess(
            mode === "login"
                ? "Login successful (dummy). Baad mein backend se connect karenge."
                : "Account created (dummy). Baad mein backend se connect karenge."
        );

        if (onAuthSuccess) {
            onAuthSuccess(userPayload);
        }

        // success message thoda dikh jaye, fir close
        setTimeout(() => {
            onClose && onClose();
        }, 600);
    }

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            <motion.div
                key="auth-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 backdrop-blur-md"
                onClick={onClose}
            >
                <motion.div
                    key="auth-modal"
                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 30, scale: 0.95 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative w-full max-w-md mx-3 rounded-3xl border border-slate-700 bg-slate-950/90 shadow-soft p-5 sm:p-6"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Close button */}
                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute right-4 top-3 text-slate-400 hover:text-slate-200 text-lg"
                    >
                        ×
                    </button>

                    {/* Title + Tabs */}
                    <div className="mb-4">
                        <p className="text-[11px] font-semibold tracking-wide text-cyan-300 uppercase">
                            Welcome to Sunrise Portal
                        </p>
                        <h2 className="mt-1 text-xl sm:text-2xl font-bold text-slate-50">
                            {mode === "login" ? "Login" : "Create your account"}
                        </h2>
                    </div>

                    {/* Mode toggle */}
                    <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm">
                        <button
                            type="button"
                            onClick={() => setMode("login")}
                            className={`flex-1 rounded-full px-3 py-1.5 border ${mode === "login"
                                    ? "bg-cyan-400 text-slate-950 border-cyan-300 shadow-soft"
                                    : "bg-slate-900 text-slate-200 border-slate-700"
                                }`}
                        >
                            Login
                        </button>
                        <button
                            type="button"
                            onClick={() => setMode("signup")}
                            className={`flex-1 rounded-full px-3 py-1.5 border ${mode === "signup"
                                    ? "bg-cyan-400 text-slate-950 border-cyan-300 shadow-soft"
                                    : "bg-slate-900 text-slate-200 border-slate-700"
                                }`}
                        >
                            Sign up
                        </button>
                    </div>

                    {/* Role toggle */}
                    <div className="flex items-center gap-2 mb-4 text-[11px] sm:text-xs">
                        <span className="text-slate-400">I am a</span>
                        <div className="inline-flex rounded-full bg-slate-900 border border-slate-700 p-1">
                            <button
                                type="button"
                                onClick={() => setRole("student")}
                                className={`px-3 py-1 rounded-full ${role === "student"
                                        ? "bg-cyan-400 text-slate-950 text-[11px] font-semibold"
                                        : "text-slate-200"
                                    }`}
                            >
                                Student
                            </button>
                            <button
                                type="button"
                                onClick={() => setRole("teacher")}
                                className={`px-3 py-1 rounded-full ${role === "teacher"
                                        ? "bg-cyan-400 text-slate-950 text-[11px] font-semibold"
                                        : "text-slate-200"
                                    }`}
                            >
                                Teacher
                            </button>
                        </div>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3 text-xs sm:text-sm">
                        {mode === "signup" && (
                            <div className="flex flex-col gap-1">
                                <label className="text-slate-200">Full Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                    placeholder="Enter your full name"
                                />
                            </div>
                        )}

                        <div className="flex flex-col gap-1">
                            <label className="text-slate-200">Email *</label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                placeholder="you@example.com"
                            />
                        </div>

                        {mode === "signup" && (
                            <div className="flex flex-col gap-1">
                                <label className="text-slate-200">
                                    {role === "student" ? "Class" : "Subject"} (optional)
                                </label>
                                <input
                                    type="text"
                                    name="classOrSubject"
                                    value={form.classOrSubject}
                                    onChange={handleChange}
                                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                    placeholder={
                                        role === "student" ? "e.g. Class 9" : "e.g. Mathematics"
                                    }
                                />
                            </div>
                        )}

                        <div className="flex flex-col gap-1">
                            <label className="text-slate-200">Password *</label>
                            <input
                                type="password"
                                name="password"
                                value={form.password}
                                onChange={handleChange}
                                className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                placeholder="Enter password"
                            />
                        </div>

                        {mode === "signup" && (
                            <div className="flex flex-col gap-1">
                                <label className="text-slate-200">Confirm Password *</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    className="rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/40"
                                    placeholder="Re-enter password"
                                />
                            </div>
                        )}

                        {error && (
                            <p className="text-[11px] text-red-400 mt-1">{error}</p>
                        )}
                        {success && (
                            <p className="text-[11px] text-emerald-300 mt-1">{success}</p>
                        )}

                        <button
                            type="submit"
                            className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-soft hover:shadow-glow transition-shadow"
                        >
                            {mode === "login"
                                ? `Login as ${role === "student" ? "Student" : "Teacher"}`
                                : `Create ${role === "student" ? "Student" : "Teacher"
                                } Account`}
                        </button>

                        {mode === "login" && (
                            <p className="mt-2 text-[11px] text-slate-400 text-center">
                                New here?{" "}
                                <button
                                    type="button"
                                    onClick={() => setMode("signup")}
                                    className="text-cyan-300 underline underline-offset-2"
                                >
                                    Create an account
                                </button>
                            </p>
                        )}
                    </form>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
}

export default AuthModal;


