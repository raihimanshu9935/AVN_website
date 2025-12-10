import React from "react";

function TopBar() {
    return (
        <div className="w-full bg-slate-900 text-slate-100 text-[11px] sm:text-xs">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-1.5 flex flex-col sm:flex-row gap-1.5 sm:gap-0 items-center justify-between">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-amber-300">
                        Admissions Open 2026–27
                    </span>
                    <span className="hidden sm:inline text-slate-300">
                        | Limited seats available from Nursery to Class IX
                    </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                    <a href="tel:+916394015344" className="hover:text-amber-300">
                        📞 +91-6394015344
                    </a>
                    <a
                        href="mailto:raihimanshu9935@gmail.com"
                        className="hover:text-amber-300"
                    >
                        ✉ raihimanshu9935@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
}

export default TopBar;
