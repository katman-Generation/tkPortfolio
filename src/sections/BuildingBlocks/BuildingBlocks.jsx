import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "../../data/project";
import BuildingBlock from "./BuildingBlock";

gsap.registerPlugin(ScrollTrigger);


export default function BuildingBlocks() {

  const horizontalRef = useRef(null);
  const trackRef = useRef(null);


  useGSAP(() => {

    const track = trackRef.current;


    const scrollWidth =
      track.scrollWidth - window.innerWidth;


    gsap.to(track, {

      x: -scrollWidth,

      ease: "none",

      scrollTrigger: {

        trigger: horizontalRef.current,

        start: "top top",

        end: () => `+=${scrollWidth}`,

        pin: true,

        scrub: 1,

      }

    });


  }, []);



  return (

    <section className="bg-slate-950">


      {/* Section Heading */}

      <div
        className="
        py-32
        px-10
        max-w-7xl
        mx-auto
        "
      >

        <p className="
        uppercase
        tracking-[0.4em]
        text-cyan-400
        ">
          My Work
        </p>


        <h2 className="
        mt-5
        text-6xl
        font-bold
        text-white
        ">
          Building Blocks
        </h2>


        <p className="
        mt-6
        max-w-2xl
        text-slate-400
        text-lg
        ">
          Every project represents another step in my journey as a developer.
        </p>


      </div>




      {/* Pinned Horizontal Section */}

      <section
        ref={horizontalRef}
        className="
        overflow-hidden
        h-screen
        "
      >


        <div
          ref={trackRef}
          className="
          flex
          h-screen
          w-max
          "
        >

          {
            projects.map((project,index)=>(

              <div
                key={project.id}
                className="
                w-screen
                h-screen
                flex
                items-center
                justify-center
                shrink-0
                "
              >

                <BuildingBlock
                  project={project}
                  index={index}
                />

              </div>

            ))
          }


        </div>


      </section>


    </section>

  );
}