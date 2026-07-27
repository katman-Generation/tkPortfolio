import { motion } from "framer-motion";

export default function BuildingBlock({ project, index }) {

  return (

    <motion.article
      initial={{
        opacity: 0,
        scale: 0.95,
      }}

      whileInView={{
        opacity: 1,
        scale: 1,
      }}

      viewport={{
        once: false,
        amount: 0.5,
      }}

      transition={{
        duration: 0.6,
      }}

      className="
      w-[95vw]
      h-[90vh]
      rounded-3xl
      overflow-hidden
      bg-slate-900
      border
      border-white/10
      grid
      lg:grid-cols-2
      shadow-2xl
      "
    >


      {/* IMAGE */}

      <div
        className="
        relative
        overflow-hidden
        "
      >

        <img
          src={project.image}
          alt={project.title}
          className="
          w-full
          h-full
          object-cover
          transition
          duration-700
          hover:scale-105
          "
        />


        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-slate-950/70
          to-transparent
          "
        />


        <div
          className="
          absolute
          bottom-8
          left-8
          "
        >

          <p className="
          text-cyan-400
          uppercase
          tracking-[0.3em]
          text-sm
          "
          >
            Building Block {String(index + 1).padStart(2,"0")}
          </p>


        </div>


      </div>



      {/* DETAILS */}

      <div
        className="
        p-8
        lg:p-10
        flex
        flex-col
        "
      >


        <p className="
        text-sm
        uppercase
        tracking-widest
        text-cyan-400
        "
        >
          {project.category}
        </p>



        <h2
          className="
          mt-3
          text-4xl
          font-bold
          text-white
          "
        >
          {project.title}
        </h2>



        <p
          className="
          mt-4
          text-slate-300
          leading-relaxed
          "
        >
          {project.overview}
        </p>




        {/* Challenge */}

        <div className="mt-5">

          <h3 className="
          text-white
          font-semibold
          ">
            Challenge
          </h3>


          <p className="
          mt-2
          text-sm
          text-slate-400
          ">
            {project.challenge}
          </p>

        </div>




        {/* Technologies */}

        <div className="mt-6">


          <h3 className="
          text-white
          font-semibold
          ">
            Technologies
          </h3>



          <div
            className="
            mt-3
            grid
            grid-cols-2
            gap-3
            "
          >

          {
            project.technologies.map((tech)=>(

              <div
                key={tech.name}
                className="
                rounded-xl
                bg-white/5
                border
                border-white/10
                p-3
                "
              >

                <p className="
                text-cyan-300
                font-medium
                text-sm
                ">
                  {tech.name}
                </p>


                <p
                className="
                mt-1
                text-xs
                text-slate-400
                "
                >
                  {tech.contribution}
                </p>


              </div>

            ))
          }


          </div>


        </div>




      </div>


    </motion.article>

  );

}