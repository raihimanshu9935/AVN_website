import React from "react";

function Footer() {
    return (
        <footer
            id="contact"
            className="border-t border-slate-200 bg-white mt-10"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-slate-600 grid gap-6 md:grid-cols-3">
                <div>
                    <p className="font-semibold text-slate-900 mb-2">
                        AVN Senior Secondary School
                    </p>
                    <p className="text-xs sm:text-sm">
                        Baghrain , Bansgaon , Gorakhpur
                        <br />
                        Bansgaon , Uttar Pradesh – 273403
                    </p>
                </div>

                <div>
                    <p className="font-semibold text-slate-900 mb-2">Contact</p>
                    <p className="text-xs sm:text-sm">
                        Phone: +91-6394015344
                        <br />
                        Email: raihimanshu9935@gmail.com
                    </p>
                </div>

                <div>
                    <p className="font-semibold text-slate-900 mb-2">Office Hours</p>
                    <p className="text-xs sm:text-sm">
                        Monday – Saturday: 8:00 AM – 2:30 PM
                        <br />
                        Sunday: Closed
                    </p>
                </div>
            </div>

            <div className="border-t border-slate-200">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-col sm:flex-row gap-2 items-center justify-between text-[11px] sm:text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} AVN Senior Secondary School. All rights reserved.</p>
                    <p>Designed & Developed by AVN@TECH.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
