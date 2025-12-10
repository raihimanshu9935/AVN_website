import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="about"
      className="relative mt-4 mb-10"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-4xl border border-slate-700/50 bg-slate-900/80 backdrop-blur-2xl px-4 sm:px-8 py-8 sm:py-10 lg:py-12 shadow-soft"
        >
          {/* Glow accent */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/30 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            {/* Left content */}
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-cyan-400/40 px-3 py-1 text-[11px] font-medium text-cyan-200 shadow-soft">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                CBSE Affiliated • K–12 Co-Ed School
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-50 leading-tight">
                A modern{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
                  learning environment
                </span>{" "}
                for tomorrow’s leaders.
              </h1>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl">
                Sunrise Public School blends strong academics, values-based
                education, and technology-enabled classrooms to prepare students
                for real-world challenges and opportunities.
              </p>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#admissions"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-soft hover:shadow-glow transition-shadow"
                >
                  Start Admission Enquiry
                </a>
                <a
                  href="#academics"
                  className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/60 px-5 py-2.5 text-sm font-semibold text-slate-100 hover:border-cyan-400/60 hover:text-cyan-200 transition-colors"
                >
                  Explore Academics
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 pt-4 text-xs sm:text-sm">
                <div className="rounded-3xl bg-slate-900/80 border border-slate-700 px-3 py-3 shadow-soft">
                  <p className="font-bold text-lg sm:text-xl text-cyan-300">
                    25+
                  </p>
                  <p className="text-slate-300">Years of Excellence</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 border border-slate-700 px-3 py-3 shadow-soft">
                  <p className="font-bold text-lg sm:text-xl text-cyan-300">
                    100%
                  </p>
                  <p className="text-slate-300">Board Results</p>
                </div>
                <div className="rounded-3xl bg-slate-900/80 border border-slate-700 px-3 py-3 shadow-soft">
                  <p className="font-bold text-lg sm:text-xl text-cyan-300">
                    30+
                  </p>
                  <p className="text-slate-300">Clubs & Activities</p>
                </div>
              </div>
            </div>

            {/* Right “3D card” block */}
            <motion.div
              initial={{ opacity: 0, y: 25, rotateY: -8 }}
              animate={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="[transform-style:preserve-3d]"
            >
              <div className="relative aspect-[4/3] rounded-4xl bg-slate-900/80 border border-slate-700 shadow-soft overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_55%),radial-gradient(circle_at_bottom,_rgba(234,179,8,0.18),transparent_60%)]" />
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="w-5/6 max-w-sm rounded-3xl border border-slate-600 bg-slate-950/80 px-4 py-4 shadow-soft">
                    <p className="text-[11px] font-medium text-cyan-300 mb-1">
                      Digital Campus Snapshot
                    </p>
                    <p className="text-xs text-slate-300 mb-3">
                      Replace this block later with an actual campus photo or a
                      short introductory video thumbnail.
                    </p>
                    <div className="grid grid-cols-3 gap-2 text-[11px] text-slate-300">
                      <div className="rounded-xl bg-slate-900/80 border border-slate-700 px-2 py-2">
                        Smart Classes
                        <p className="font-semibold text-cyan-300">18+</p>
                      </div>
                      <div className="rounded-xl bg-slate-900/80 border border-slate-700 px-2 py-2">
                        Labs
                        <p className="font-semibold text-cyan-300">4</p>
                      </div>
                      <div className="rounded-xl bg-slate-900/80 border border-slate-700 px-2 py-2">
                        Avg. Batch
                        <p className="font-semibold text-cyan-300">30</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating mini-card */}
                <div className="absolute -bottom-4 -left-2 sm:-left-6 rounded-3xl bg-slate-900/90 border border-slate-600 px-4 py-3 text-[11px] sm:text-xs text-slate-200 shadow-soft">
                  <p className="font-semibold text-slate-50">
                    Parent–Teacher Connect
                  </p>
                  <p className="text-slate-300">
                    Regular updates via meetings, digital reports, and school
                    app.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;

