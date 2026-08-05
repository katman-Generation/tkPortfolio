import { motion } from "framer-motion";
import { useEffect } from "react";

import { Canvas } from "@react-three/fiber";
import { Text3D, Center, Environment, Float } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

import chelsea from "../../assets/ChelseaFC.jpeg";

function Katman3DText() {

    const titleRef = useRef();

    useFrame((state) => {

        if (!titleRef.current) return;

        const t = Math.min(state.clock.getElapsedTime() / 3.8, 1);

        // Grow
        const mobile = window.innerWidth < 768;

        const finalScale = mobile ? 0.35 : 0.65;

        const scale = 0.05 + (finalScale * t);

        titleRef.current.scale.set(
            scale,
            scale,
            scale
        );


        // Start tilted then face user
        titleRef.current.rotation.y = -1 + (1 * t);

        // straighten vertical tilt
        titleRef.current.rotation.x = 0.5 - (0.5 * t);

    });


    return (

        <group ref={titleRef}>

            <Center>

                <Text3D
                    font="/fonts/helvetiker_bold.typeface.json"
                    size={0.8}
                    height={0.18}
                    bevelEnabled
                    bevelThickness={0.03}
                    bevelSize={0.02}
                    bevelSegments={5}
                >

                    WELCOME
                    {"\n"}
                    TO THE WORLD
                    {"\n"}
                    OF KATMAN


                    <meshStandardMaterial
                        color="white"
                        metalness={1}
                        roughness={0.15}
                    />


                </Text3D>

            </Center>


        </group>
    );
}

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
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-zinc-950/40 to-black/70" />
            {/* REAL 3D TEXT */}

            <motion.div
                initial={{
                    opacity:0
                }}
                animate={{
                    opacity:1
                }}
                transition={{
                    delay:2.5,
                    duration:1
                }}
                className="
                absolute
                inset-0
                z-20
                pointer-events-none
                "
            >

                <Canvas
                    camera={{
                        position:[0,0,7],
                        fov:50
                    }}
                >

                    <ambientLight intensity={0.6}/>


                    <directionalLight
                        position={[5,5,5]}
                        intensity={4}
                    />
                    <directionalLight
                        position={[-5, 2, 2]}
                        intensity={2}
                        color="#60a5fa"
                    />

                    <pointLight
                        position={[0, 0, 3]}
                        intensity={8}
                        color="#ffffff"
                    />


                    <Katman3DText />


                    <Environment preset="city"/>


                </Canvas>


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