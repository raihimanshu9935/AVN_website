import React from "react";
import { motion } from "framer-motion";

function AnimatedBackground() {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden bg-[#020617]">
            {/* Subtle radial gradient base */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f172a,_#020617)]" />

            {/* 3D-ish floating blobs */}
            <motion.div
                className="pointer-events-none absolute -top-40 -left-20 h-80 w-80 rounded-full bg-cyan-500/30 blur-3xl"
                animate={{
                    x: [0, 40, -30, 0],
                    y: [0, 30, -20, 0],
                    rotateX: [0, 20, -15, 0],
                    rotateY: [0, -15, 20, 0],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-emerald-500/25 blur-3xl"
                animate={{
                    x: [0, -50, 20, 0],
                    y: [0, -40, 10, 0],
                    rotateX: [0, -10, 15, 0],
                    rotateY: [0, 15, -20, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />

            <motion.div
                className="pointer-events-none absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"
                animate={{
                    x: [0, 20, -40, 0],
                    y: [0, 30, -10, 0],
                    rotateX: [0, 25, -10, 0],
                    rotateY: [0, -20, 15, 0],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                }}
            />

            {/* Subtle perspective grid overlay */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.16] [transform:perspective(1200px)_rotateX(65deg)]">
                <div className="absolute inset-[-200px] bg-[linear-gradient(to_right,rgba(148,163,184,0.25)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.15)_1px,transparent_1px)] bg-[size:80px_80px]" />
            </div>
        </div>
    );
}

export default AnimatedBackground;
