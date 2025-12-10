import React from "react";

const galleryItems = [
    {
        title: "School Assembly",
        tag: "Campus",
        imageUrl: "/images/gallery-assembly.jpg",
    },
    {
        title: "Smart Classroom",
        tag: "Academics",
        imageUrl: "/images/gallery-classroom.jpg",
    },
    {
        title: "Science Lab Activity",
        tag: "Labs",
        imageUrl: "/images/gallery-lab.jpg",
    },
    {
        title: "Sports Day",
        tag: "Sports",
        imageUrl: "/images/gallery-sports.jpg",
    },
    {
        title: "Annual Function",
        tag: "Events",
        imageUrl: "/images/gallery-function.jpg",
    },
    {
        title: "Art & Craft Exhibition",
        tag: "Activities",
        imageUrl: "/images/gallery-art.jpg",
    },
];

function Gallery() {
    return (
        <section
            id="gallery"
            className="py-12 sm:py-16 bg-white border-t border-slate-100"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                            Gallery
                        </p>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
                            Glimpses of our school life
                        </h2>
                    </div>
                    <p className="max-w-md text-sm text-slate-600">
                        A quick look at events, activities, and everyday moments that make
                        school life memorable for our students.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                    {galleryItems.map((item) => (
                        <div
                            key={item.title}
                            className="group relative overflow-hidden rounded-2xl bg-slate-200 shadow-sm border border-slate-100"
                        >
                            <div className="aspect-[4/3]">
                                <div className="h-full w-full flex items-center justify-center bg-gradient-to-br from-blue-50 via-slate-50 to-amber-50 text-xs sm:text-sm text-slate-500">
                                    <span className="text-center px-4">
                                        {item.title}
                                        <br />
                                        <span className="text-[11px] text-slate-400">
                                            (Add real photo here)
                                        </span>
                                    </span>
                                </div>
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="absolute inset-x-0 bottom-0 p-2 sm:p-3 flex flex-col gap-1">
                                <span className="inline-flex w-max rounded-full bg-white/80 px-2 py-0.5 text-[10px] font-medium text-slate-800 shadow-sm">
                                    {item.tag}
                                </span>
                                <p className="text-xs sm:text-sm font-semibold text-white drop-shadow">
                                    {item.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-4 text-[11px] sm:text-xs text-slate-500">
                    Note: You can replace these placeholder images and captions with
                    actual school photographs to align with your branding and campus.
                </p>
            </div>
        </section>
    );
}

export default Gallery;
