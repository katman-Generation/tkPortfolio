import { motion } from "framer-motion";
import { useEffect } from "react";
import chelsea from "../../assets/ChelseaFC.jpeg";

export default function Elevator({ onComplete }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            onComplete();
        }, 6200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 bg-black overflow-hidden">
            {/* Stadium Background */}
            <motion.div
                initial={{ scale: 1.15 }}
                animate={{ scale: 1 }}
                transition={{ duration: 4 }}
                className="absolute inset-0"
            >
                <img
                    src={chelsea}
                    alt="Chelsea Stadium"
                    className="w-full h-full object-cover"
                />

                {/* Dark cinematic overlay */}
                <div className="absolute inset-0 bg-black/55" />

                {/* Blue atmosphere */}
                <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-blue-950/70
                    via-transparent
                    to-black/40
                    "
                />
            </motion.div>
            <div
                className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2
                w-[900px]
                h-[900px]
                rounded-full
                bg-blue-500/20
                blur-[180px]
                "
            />
            {/* Ceiling Light */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-40 h-2 bg-yellow-300 blur-md opacity-70"></div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black" />
            <motion.div
                className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                transition={{
                    delay: 2.3,
                    duration: 0.5,
                }}
            >
                <motion.div
                    initial={{
                        scale: 0.08,
                        rotateX: 70,
                        rotateY: -35,
                        y: 120,
                        filter: "blur(18px)",
                    }}
                    animate={{
                        scale: 1,
                        rotateX: 0,
                        rotateY: 0,
                        y: 0,
                        filter: "blur(0px)",
                    }}
                    transition={{
                        duration: 3,
                        delay: 2.3,
                        ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                        transformStyle: "preserve-3d",
                        perspective: "1800px",
                    }}
                    className="relative"
                >

                    {/* Blue glow */}

                    <motion.div
                        initial={{
                            scale: 0,
                            opacity: 0,
                        }}
                        animate={{
                            scale: 1.8,
                            opacity: 1,
                        }}
                        transition={{
                            delay: 2.3,
                            duration: 3,
                        }}
                        className="
                        absolute
                        left-1/2
                        top-1/2
                        -translate-x-1/2
                        -translate-y-1/2
                        w-[700px]
                        h-[700px]
                        rounded-full
                        bg-blue-500/40
                        blur-[180px]
                        "
                    />

                    <h1
                        className="
                        relative
                        text-center
                        uppercase
                        font-black
                        text-white
                        tracking-[16px]
                        leading-tight
                        text-5xl
                        md:text-8xl
                        "
                        style={{
                            transform:
                                "perspective(1800px) rotateX(18deg) rotateY(-12deg)",
                            textShadow: `
                            0 2px 0 #dbeafe,
                            0 6px 10px rgba(0,0,0,.5),
                            0 0 25px rgba(96,165,250,.8),
                            0 0 70px rgba(59,130,246,.8),
                            0 0 130px rgba(37,99,235,.7)
                            `,
                        }}
                    >
                        WELCOME
                        <br />
                        TO THE WORLD
                        <br />
                        OF KATMAN
                    </h1>

                    {/* Shine */}

                    <motion.div
                        initial={{
                            x: "-220%",
                        }}
                        animate={{
                            x: "260%",
                        }}
                        transition={{
                            delay: 4.6,
                            duration: 1.5,
                            ease: "linear",
                        }}
                        className="
                        absolute
                        top-0
                        left-0
                        h-full
                        w-36
                        rotate-12
                        bg-white/50
                        blur-2xl
                        "
                    />

                </motion.div>
            </motion.div>
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
                    duration: 4,
                    delay: 0.8,
                    ease: [0.76, 0, 0.24, 1],
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
                    duration: 4,
                    delay: 0.8,
                    ease: [0.76, 0, 0.24, 1],
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