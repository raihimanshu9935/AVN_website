import React from "react";
import { motion } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#top" },
    { label: "Dashboard", href: "#dashboard" },
    { label: "Notices", href: "#notice" },
    { label: "About", href: "#about" },
    { label: "Academics", href: "#academics" },
    { label: "Admissions", href: "#admissions" },
    { label: "Campus Life", href: "#campus" },
    { label: "Gallery", href: "#gallery" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact", href: "#contact" },
];

function Navbar({ onLoginClick, currentUser, onLogout }) {
    const [open, setOpen] = React.useState(false);

    const userLabel =
        currentUser?.name ||
        currentUser?.email ||
        (currentUser?.role === "teacher" ? "Teacher" : "Student");

    return (
        <header id="top" className="sticky top-0 z-30 px-2 sm:px-4 pt-2 sm:pt-4">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="max-w-6xl mx-auto rounded-3xl border border-slate-700/40 bg-slate-900/70 backdrop-blur-xl px-3 sm:px-5 py-2.5 shadow-soft"
            >
                <div className="flex items-center justify-between gap-3">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-2xl bg-gradient-to-br from-cyan-400 to-sky-500 flex items-center justify-center font-bold text-xl text-slate-950 shadow-glow">
                            S
                        </div>
                        <div className="leading-tight">
                            <p className="text-xl sm:text-2xl font-extrabold tracking-wide bg-gradient-to-r from-cyan-200 via-white to-sky-300 bg-clip-text text-transparent drop-shadow">
                                A V N Senior Secondary School
                            </p>
                            <p className="mt-[2px] text-[11px] sm:text-xs text-slate-400">
                                Nurturing minds, shaping futures
                            </p>
                        </div>
                    </div>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-4 text-xs sm:text-sm font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-slate-300 hover:text-cyan-300 transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}

                        {currentUser ? (
                            <>
                                <div className="flex items-center gap-2 text-[11px] sm:text-xs text-slate-300">
                                    <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-600 px-3 py-1">
                                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                        {currentUser.role === "teacher" ? "Teacher" : "Student"}
                                    </span>
                                    <span className="hidden sm:inline truncate max-w-[140px]">
                                        {userLabel}
                                    </span>
                                </div>
                                <button
                                    type="button"
                                    onClick={onLogout}
                                    className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/80 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-slate-200 hover:border-red-400 hover:text-red-200 transition-colors"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <button
                                    type="button"
                                    onClick={onLoginClick}
                                    className="inline-flex items-center rounded-full border border-slate-600 bg-slate-900/80 px-4 py-1.5 text-xs sm:text-sm font-semibold text-cyan-200 hover:border-cyan-400 hover:text-cyan-100 transition-colors"
                                >
                                    Login
                                </button>
                                <a
                                    href="#admissions"
                                    className="inline-flex items-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-1.5 text-xs sm:text-sm font-semibold text-slate-950 shadow-soft hover:shadow-glow transition-shadow"
                                >
                                    Apply Now
                                </a>
                            </>
                        )}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        onClick={() => setOpen((o) => !o)}
                        className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-700 bg-slate-900/80 p-2"
                    >
                        <span className="sr-only">Toggle menu</span>
                        <div className="space-y-1.5">
                            <span className="block h-[2px] w-5 bg-slate-100" />
                            <span className="block h-[2px] w-5 bg-slate-100" />
                        </div>
                    </button>
                </div>

                {/* Mobile dropdown */}
                {open && (
                    <div className="mt-2 md:hidden border-t border-slate-700/60 pt-2">
                        <div className="flex flex-col gap-1 text-sm">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setOpen(false)}
                                    className="py-1.5 text-slate-200 hover:text-cyan-300"
                                >
                                    {link.label}
                                </a>
                            ))}

                            {currentUser ? (
                                <>
                                    <div className="mt-2 flex items-center gap-2 text-xs text-slate-300">
                                        <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/80 border border-slate-600 px-3 py-1">
                                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                                            {currentUser.role === "teacher" ? "Teacher" : "Student"}
                                        </span>
                                        <span className="truncate max-w-[140px]">{userLabel}</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOpen(false);
                                            onLogout && onLogout();
                                        }}
                                        className="mt-2 inline-flex w-max items-center rounded-full border border-slate-600 bg-slate-900/80 px-4 py-1.5 text-xs font-semibold text-slate-200 hover:border-red-400 hover:text-red-200 transition-colors"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setOpen(false);
                                            onLoginClick && onLoginClick();
                                        }}
                                        className="mt-1 inline-flex w-max items-center rounded-full border border-slate-600 bg-slate-900/80 px-4 py-1.5 text-xs font-semibold text-cyan-200"
                                    >
                                        Login
                                    </button>
                                    <a
                                        href="#admissions"
                                        onClick={() => setOpen(false)}
                                        className="mt-1 inline-flex w-max items-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-soft"
                                    >
                                        Apply Now
                                    </a>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </motion.nav>
        </header>
    );
}

export default Navbar;


