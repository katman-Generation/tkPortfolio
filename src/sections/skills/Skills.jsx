import { motion } from "framer-motion";
import { skillCategories } from "../../data/skills";
import SkillCard from "../../components/skills/Skillcard";

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0F172A] py-24 px-6"
    >
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="uppercase tracking-[0.3em] text-blue-400">
            Skills
          </p>

          <h2 className="mt-4 text-5xl font-bold text-white">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="space-y-14">
          {skillCategories.map((category) => (
            <div key={category.title}>

              <h3 className="mb-6 text-2xl font-semibold text-white">
                {category.title}
              </h3>

              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    Icon={skill.icon}
                  />
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;