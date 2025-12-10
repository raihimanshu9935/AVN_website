import React from "react";

const testimonials = [
    {
        name: "Parent of Class VI student",
        role: "2 years with the school",
        quote:
            "We have seen a remarkable improvement in our child's confidence and communication skills. Teachers are supportive and approachable.",
    },
    {
        name: "Parent of Class II student",
        role: "New admission",
        quote:
            "The transition from preschool to primary was smooth. The school focuses on values as much as academics.",
    },
    {
        name: "Alumni (Batch 2023)",
        role: "Now pursuing Engineering",
        quote:
            "Strong fundamentals in Maths and Science helped me in competitive exams. Co-curricular activities gave me leadership opportunities.",
    },
];

function Testimonials() {
    return (
        <section
            id="testimonials"
            className="py-12 sm:py-16 bg-white border-t border-slate-100"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                            Testimonials
                        </p>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
                            What parents and students say
                        </h2>
                    </div>
                    <p className="max-w-md text-sm text-slate-600">
                        Feedback from our parent and student community motivates us to keep
                        improving our teaching and campus experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            className="rounded-2xl bg-slate-50 border border-slate-200 p-4 sm:p-5 shadow-sm flex flex-col gap-3"
                        >
                            <p className="text-sm text-slate-700 leading-relaxed">
                                "{t.quote}"
                            </p>
                            <div className="mt-auto pt-2 border-t border-slate-200 text-xs sm:text-sm">
                                <p className="font-semibold text-slate-900">{t.name}</p>
                                <p className="text-slate-500">{t.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
