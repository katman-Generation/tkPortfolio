import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0b1220] px-6"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220] via-[#111827] to-black" />
    </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400">
          Welcome
        </p>

        <h1 className="text-5xl font-extrabold text-white md:text-7xl">
          Tatenda Katema
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-4xl">
          Full Stack Software Developer
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-400">
          I build scalable web applications with Django, React and modern web
          technologies while growing KatmanHub into a company that creates
          technology for Africa.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
          <button className="rounded-full bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700">
            View Projects
          </button>

          <button className="rounded-full border border-white/20 px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-black">
            Download CV
          </button>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <p className="mb-2 text-xs uppercase tracking-[0.3em]">
          Scroll
        </p>

        <div className="mx-auto flex h-10 w-6 justify-center rounded-full border border-gray-500">
          <div className="mt-2 h-2 w-2 rounded-full bg-white"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;