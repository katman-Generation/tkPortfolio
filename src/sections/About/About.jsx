import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#111827] py-24 px-6"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="h-[500px] w-[380px] rounded-3xl border border-white/10 bg-[#1F2937] shadow-2xl">
            {/* Replace with your image later */}
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="mb-3 uppercase tracking-[0.3em] text-blue-400">
            About Me
          </p>

          <h2 className="mb-8 text-5xl font-bold text-white">
            Building software with purpose.
          </h2>

          <div className="space-y-6 text-lg leading-8 text-gray-300">
            <p>
              I'm Tatenda Katema, a Full-Stack Software Developer passionate
              about building digital solutions that solve real-world problems.
            </p>

            <p>
              My journey started with self-learning, grew through studying
              Computer Science, and continues as I build projects that sharpen
              my skills while laying the foundation for KatmanHub.
            </p>

            <p>
              Every project I create is another step toward becoming a world-
              class engineer and building technology that creates opportunities
              across Africa.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6">

            <div className="rounded-2xl border border-white/10 bg-[#1F2937] p-6">
              <h3 className="text-3xl font-bold text-blue-400">10+</h3>
              <p className="mt-2 text-gray-400">
                Software Projects
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1F2937] p-6">
              <h3 className="text-3xl font-bold text-blue-400">3+</h3>
              <p className="mt-2 text-gray-400">
                Years Learning
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1F2937] p-6">
              <h3 className="text-3xl font-bold text-blue-400">∞</h3>
              <p className="mt-2 text-gray-400">
                Passion for Learning
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#1F2937] p-6">
              <h3 className="text-3xl font-bold text-blue-400">1</h3>
              <p className="mt-2 text-gray-400">
                Mission: Build KatmanHub
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;