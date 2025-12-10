import React from "react";

const stages = [
    {
        tag: "Pre-Primary (Nursery – KG)",
        highlight: "Play-based learning",
        points: [
            "Focus on motor skills, phonics, and early numeracy.",
            "Theme-based activities, rhymes, and storytelling.",
            "Safe, colourful and child-friendly classrooms.",
        ],
    },
    {
        tag: "Primary (Classes I – V)",
        highlight: "Strong foundations",
        points: [
            "Concept clarity in English, Maths, EVS, and Languages.",
            "Activity-based learning, projects, and regular skill checks.",
            "Reading habits encouraged through class libraries.",
        ],
    },
    {
        tag: "Middle (Classes VI – VIII)",
        highlight: "Exploration & skills",
        points: [
            "Introduction to Science labs and Computer education.",
            "Critical thinking and project-based learning.",
            "Exposure to Olympiads and competitive exam patterns.",
        ],
    },
    {
        tag: "Secondary (Classes IX – X)",
        highlight: "Board exam readiness",
        points: [
            "Structured preparation for board examinations.",
            "Chapter-wise tests, revisions, and doubt-clearing sessions.",
            "Career guidance and counselling support.",
        ],
    },
];

const streams = [
    "Science (PCM / PCB)",
    "Commerce",
    "Humanities (where applicable)",
];

function Academics() {
    return (
        <section
            id="academics"
            className="relative rounded-3xl border border-slate-700/70 bg-slate-900/80 backdrop-blur-xl px-4 sm:px-6 py-7 sm:py-9 shadow-soft"
        >
            <div className="pointer-events-none absolute -bottom-10 right-0 h-24 w-24 rounded-full bg-cyan-500/20 blur-2xl" />
            <div className="relative flex flex-col lg:flex-row lg:items-start gap-8 mb-7">
                <div className="flex-1">
                    <p className="text-[11px] font-semibold tracking-wide text-cyan-300 uppercase">
                        Academics
                    </p>
                    <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-slate-50">
                        Structured learning for each stage of schooling
                    </h2>
                    <p className="mt-3 text-sm text-slate-300 max-w-xl">
                        The curriculum is aligned with CBSE guidelines and designed to
                        gradually build knowledge, skills, and confidence. We use a mix of
                        textbooks, activities, experiments, and digital resources.
                    </p>

                    <div className="mt-4 rounded-2xl bg-slate-900/80 border border-slate-700 px-4 sm:px-5 py-4 sm:py-5 text-xs sm:text-sm">
                        <p className="font-semibold text-slate-50 mb-1">
                            Senior Secondary (XI – XII)
                        </p>
                        <p className="text-slate-300 mb-2">
                            School offers the following streams (subject combination can be
                            customised as per board norms):
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-slate-300">
                            {streams.map((stream) => (
                                <li key={stream}>{stream}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex-1 grid sm:grid-cols-2 gap-4">
                    {stages.map((stage) => (
                        <div
                            key={stage.tag}
                            className="rounded-2xl bg-slate-900/80 border border-slate-700 shadow-soft p-4 sm:p-5"
                        >
                            <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-300 mb-1.5">
                                {stage.tag}
                            </p>
                            <p className="text-sm font-semibold text-slate-50 mb-2">
                                {stage.highlight}
                            </p>
                            <ul className="list-disc list-inside text-xs sm:text-sm text-slate-300 space-y-1.5">
                                {stage.points.map((p) => (
                                    <li key={p}>{p}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            {/* Teaching approach bar */}
            <div className="relative rounded-2xl bg-slate-900/90 border border-slate-700 px-4 sm:px-5 py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-3 text-xs sm:text-sm">
                <div className="sm:w-1/3">
                    <p className="font-semibold text-slate-50">
                        Teaching–Learning Approach
                    </p>
                </div>
                <div className="sm:flex-1 grid sm:grid-cols-3 gap-3 text-slate-300">
                    <p>Activity-based and experiential learning.</p>
                    <p>Continuous and comprehensive evaluation.</p>
                    <p>Individual attention to learners’ pace and style.</p>
                </div>
            </div>
        </section>
    );
}

export default Academics;

