import React from "react";

const items = [
    {
        title: "Modern Classrooms",
        desc: "Well-ventilated, digital classrooms that support interactive teaching.",
    },
    {
        title: "Library",
        desc: "A rich collection of storybooks, reference books, and periodicals.",
    },
    {
        title: "Science & Computer Labs",
        desc: "Hands-on experiments and coding exposure from an early age.",
    },
    {
        title: "Sports & Games",
        desc: "Indoor and outdoor sports facilities for physical fitness and teamwork.",
    },
    {
        title: "Co-Scholastic Activities",
        desc: "Music, dance, art & craft, dramatics, and hobby clubs.",
    },
    {
        title: "Transport Facility",
        desc: "Safe and reliable bus routes covering major areas of the city.",
    },
];

function CampusLife() {
    return (
        <section
            id="campus"
            className="py-12 sm:py-16 bg-slate-50 border-t border-slate-100"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                            Campus Life
                        </p>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
                            A vibrant campus that students love coming to
                        </h2>
                    </div>
                    <p className="max-w-md text-sm text-slate-600">
                        Learning continues beyond classrooms through events, competitions,
                        celebrations, and club activities planned throughout the year.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    {items.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl bg-white border border-slate-100 shadow-sm p-4 sm:p-5"
                        >
                            <p className="text-sm font-semibold text-slate-900 mb-1.5">
                                {item.title}
                            </p>
                            <p className="text-xs sm:text-sm text-slate-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Mini CTA to contact section */}
                <div className="rounded-2xl bg-primary text-white px-4 sm:px-6 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm">
                    <div>
                        <p className="font-semibold text-sm sm:text-base">
                            Visit our campus
                        </p>
                        <p className="text-white/90">
                            Book a school tour to experience the classrooms, labs, and
                            playgrounds in person.
                        </p>
                    </div>
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold border border-white/40 hover:bg-white/20 transition-colors"
                    >
                        Schedule a Campus Visit
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CampusLife;
