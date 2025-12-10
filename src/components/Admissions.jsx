import React from "react";

const steps = [
    {
        title: "1. Enquiry & Counselling",
        desc: "Parents can visit the school or call the office for basic information about classes, fee structure, and facilities.",
    },
    {
        title: "2. Registration",
        desc: "Fill out the admission form and submit the required documents along with the registration fee.",
    },
    {
        title: "3. Interaction / Test",
        desc: "For selected classes, a short interaction or entrance assessment is conducted to understand the child's learning level.",
    },
    {
        title: "4. Confirmation of Admission",
        desc: "On selection, parents need to complete fee payment and document verification to confirm admission.",
    },
];

const docs = [
    "Birth certificate (attested copy)",
    "Previous class report card / transfer certificate",
    "Passport size photographs of student and parents",
    "Aadhaar card copy (where applicable)",
];

function Admissions() {
    return (
        <section
            id="admissions"
            className="py-12 sm:py-16 bg-white border-t border-slate-100"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col lg:flex-row gap-8 mb-8">
                    <div className="flex-1">
                        <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                            Admissions
                        </p>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
                            Simple and transparent admission process
                        </h2>
                        <p className="mt-3 text-sm text-slate-600 max-w-xl">
                            Admissions are usually open from January to March every
                            year. Seats are limited in each class and are allotted on a first
                            come, first served basis, subject to eligibility and interaction.
                        </p>

                        <div className="mt-4 rounded-2xl bg-slate-50 border border-dashed border-primary/40 p-4 text-xs sm:text-sm">
                            <p className="font-semibold text-slate-900 mb-1">
                                Quick Admission Enquiry
                            </p>
                            <p className="text-slate-600">
                                Call: +91-6394015344 or email{" "}
                                <span className="font-medium text-primary">
                                    raihimanshu9935@gmail.com
                                </span>{" "}
                                for seat availability, fee structure, and campus visit slots.
                            </p>
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="rounded-2xl bg-slate-50 border border-slate-100 p-4 sm:p-5 mb-4">
                            <p className="text-sm font-semibold text-slate-900 mb-2">
                                Admission Steps
                            </p>
                            <div className="space-y-3">
                                {steps.map((step) => (
                                    <div key={step.title} className="text-xs sm:text-sm">
                                        <p className="font-semibold text-slate-800">
                                            {step.title}
                                        </p>
                                        <p className="text-slate-600">{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-2xl bg-white border border-slate-100 p-4 sm:p-5 text-xs sm:text-sm">
                            <p className="text-sm font-semibold text-slate-900 mb-2">
                                Documents Required
                            </p>
                            <ul className="list-disc list-inside text-slate-600 space-y-1.5">
                                {docs.map((d) => (
                                    <li key={d}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Small note bar */}
                <div className="rounded-2xl bg-amber-50 border border-amber-200 px-4 py-3 text-xs sm:text-sm text-amber-900">
                    Note: Exact admission dates, age criteria, and fee details may vary
                    each session. Please confirm with the school office for the current
                    academic year.
                </div>
            </div>
        </section>
    );
}

export default Admissions;
