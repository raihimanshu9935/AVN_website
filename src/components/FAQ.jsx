import React from "react";

const faqs = [
    {
        q: "What is the age criteria for Nursery admission?",
        a: "Generally, children between 3 to 4 years as on 31st March of the academic year are eligible. Exact criteria can be confirmed from the school office.",
    },
    {
        q: "Is school transport available?",
        a: "Yes, the school provides transport on selected routes. Details about routes and charges are available at the school office.",
    },
    {
        q: "Which board is the school affiliated to?",
        a: "The school follows the CBSE curriculum and teaching-learning guidelines.",
    },
    {
        q: "What are the school timings?",
        a: "Regular school timings are usually 8:00 AM to 2:00 PM (may vary for different classes).",
    },
    {
        q: "How can parents track their child's progress?",
        a: "Through periodic PTMs, report cards, and regular interaction with class teachers. The school may also use a mobile app / portal for updates.",
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = React.useState(0);

    return (
        <section
            id="faq"
            className="py-12 sm:py-16 bg-slate-50 border-t border-slate-100"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                    <div>
                        <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                            FAQs
                        </p>
                        <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-900">
                            Frequently asked questions
                        </h2>
                    </div>
                    <p className="max-w-md text-sm text-slate-600">
                        Here are answers to some of the most common questions asked by
                        parents during the admission process.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="space-y-3">
                        {faqs.map((item, index) => (
                            <button
                                key={item.q}
                                type="button"
                                onClick={() =>
                                    setOpenIndex((prev) => (prev === index ? -1 : index))
                                }
                                className="w-full text-left rounded-2xl border border-slate-200 bg-white px-4 py-3 sm:px-5 sm:py-4 shadow-sm hover:border-primary/50 transition-colors"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <p className="text-sm font-semibold text-slate-900">
                                        {item.q}
                                    </p>
                                    <span className="text-lg text-slate-500">
                                        {openIndex === index ? "−" : "+"}
                                    </span>
                                </div>
                                {openIndex === index && (
                                    <p className="mt-2 text-xs sm:text-sm text-slate-600">
                                        {item.a}
                                    </p>
                                )}
                            </button>
                        ))}
                    </div>

                    <div className="rounded-2xl bg-white border border-slate-200 p-4 sm:p-6 text-xs sm:text-sm text-slate-700 shadow-sm h-max">
                        <p className="font-semibold text-slate-900 mb-2">
                            Didn't find your question?
                        </p>
                        <p className="mb-3">
                            You can call the school office during working hours or send us
                            your query through the enquiry form.
                        </p>
                        <ul className="space-y-1.5">
                            <li>📞 Office: +91-6394015344</li>
                            <li>✉ Email: raihimanshu9935@gmail.com</li>
                        </ul>
                        <a
                            href="#contact"
                            className="inline-flex mt-3 items-center justify-center rounded-full border border-primary px-4 py-1.5 text-xs sm:text-sm font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
                        >
                            Go to Enquiry Form
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
