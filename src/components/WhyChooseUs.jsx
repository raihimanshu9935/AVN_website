import React from "react";

const points = [
    {
        title: "Strong Academics",
        desc: "Concept-focused teaching, regular assessments, and personalised doubt-clearing sessions.",
    },
    {
        title: "Holistic Development",
        desc: "Sports, arts, clubs, and leadership opportunities for overall personality growth.",
    },
    {
        title: "Experienced Faculty",
        desc: "Qualified, caring teachers who mentor students beyond the classroom.",
    },
    {
        title: "Safe & Caring Campus",
        desc: "Secure environment with CCTV, trained staff, and child-friendly policies.",
    },
    {
        title: "Technology-Enabled Learning",
        desc: "Smart classrooms, digital content, and blended learning methodologies.",
    },
    {
        title: "Parent Partnership",
        desc: "Regular PTMs, transparent communication, and constructive feedback loops.",
    },
];

function WhyChooseUs() {
    return (
        <section
            id="why-us"
            className="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl px-4 sm:px-6 py-7 sm:py-9 shadow-soft"
        >
            <div className="pointer-events-none absolute top-0 right-0 h-24 w-24 rounded-full bg-emerald-500/20 blur-2xl" />
            <div className="relative">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-7">
                    <div>
                        <p className="text-[11px] font-semibold tracking-wide text-cyan-300 uppercase">
                            Why Choose Us
                        </p>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-50">
                            A school you can trust for your child’s future
                        </h2>
                    </div>
                    <p className="max-w-md text-sm text-slate-300">
                        We believe that every child is unique. Our systems, teaching
                        methods, and campus culture are designed to respect individuality
                        while maintaining high academic standards.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
                    {points.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-slate-700 bg-slate-900/80 hover:border-cyan-400/70 hover:bg-slate-900/90 transition-colors shadow-soft/50 p-4 sm:p-5"
                        >
                            <h3 className="text-sm sm:text-base font-semibold text-slate-50 mb-1.5">
                                {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;

