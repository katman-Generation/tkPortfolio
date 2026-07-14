import { motion } from "framer-motion";
import { useEffect } from "react";

export default function Elevator({ onComplete }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 3200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-black overflow-hidden">

            {/* Ceiling Light */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-2 bg-yellow-300 blur-md opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <div className="absolute top-12 left-1/2 -translate-x-1/2 text-zinc-400 font-mono tracking-[8px] text-xl">

                WELCOME 
                TO THE WORLD 
                OF KATMAN

            </div>
            <div className="
                absolute
                top-0
                left-1/2
                -translate-x-1/2
                w-[500px]
                h-[500px]
                rounded-full
                bg-white/5
                blur-3xl
                "/>
            {/* LEFT DOOR */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                transition={{
                    duration: 2.4,
                    delay: 1,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    left-0
                    top-0
                    w-1/2
                    h-full
                    bg-gradient-to-b
                    from-zinc-600
                    via-zinc-800
                    to-black
                    shadow-2xl
                "
            >
                {/* Center seam */}
                <div className="absolute right-0 top-0 w-[2px] h-full bg-zinc-500/40"></div>

                {/* Reflection */}
                <div className="absolute left-8 top-0 w-[2px] h-full bg-white/10"></div>
            </motion.div>

            {/* RIGHT DOOR */}
            <motion.div
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: "easeInOut",
                }}
                className="
                    absolute
                    right-0
                    top-0
                    w-1/2
                    h-full
                    bg-gradient-to-b
                    from-zinc-600
                    via-zinc-800
                    to-black
                    shadow-2xl
                "
            >
                <div className="absolute left-0 top-0 w-[2px] h-full bg-zinc-500/40"></div>

                <div className="absolute right-8 top-0 w-[2px] h-full bg-white/10"></div>
            </motion.div>

        </div>
    );
}