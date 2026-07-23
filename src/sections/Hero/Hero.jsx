import { motion } from "framer-motion";

import HeroTyping from "../../components/hero/HeroTyping";
import TechRing from "../../components/hero/TechRing";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      {/* Background */}
      <div className="absolute inset-0">

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#050816] via-[#0B1120] to-black" />

        {/* Left Glow */}
        <div className="absolute -left-32 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

        {/* Right Glow */}
        <div className="absolute -right-32 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-between gap-20 px-8">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="max-w-xl flex-1"
        >
          <p className="mb-4 text-lg font-medium tracking-widest text-cyan-400 uppercase">
            Welcome
          </p>

          <h1 className="text-6xl font-black leading-none text-white xl:text-7xl">
            Tatenda
            <br />
            Katema
          </h1>

          <div className="mt-8">
            <HeroTyping />
          </div>

          <div className="mt-12 flex gap-5">

            <button
              className="
              rounded-full
              bg-cyan-400
              px-8
              py-4
              font-semibold
              text-black
              transition
              duration-300
              hover:scale-105
              hover:bg-cyan-300
              "
            >
              Explore My Work
            </button>

            <button
              className="
              rounded-full
              border
              border-white/20
              bg-white/5
              px-8
              py-4
              font-semibold
              text-white
              backdrop-blur
              transition
              duration-300
              hover:border-cyan-400
              hover:bg-cyan-400/10
              "
            >
              Contact Me
            </button>

          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: .7 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex flex-1 justify-center"
        >
          <TechRing />
        </motion.div>

      </div>
    </section>
  );
}              