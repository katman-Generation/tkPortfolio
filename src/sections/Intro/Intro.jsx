import { useState } from "react";

import Cube from "../../components/intro/Cube";
import Narrative from "../../components/intro/Narrative";
import Particles from "../../components/intro/Particles";
import Space from "../../components/intro/Space";
import { slides } from "../../components/intro/slides";


export default function Intro() {

    const [currentSlide, setCurrentSlide] = useState(0);


    return (

        <section
            className="
            relative
            min-h-screen
            overflow-hidden
            bg-gradient-to-br
            from-black
            via-zinc-950
            to-black
            px-6
            lg:px-12
            "
        >
          <div className="
              absolute
              left-1/4
              top-1/2
              h-[500px]
              w-[500px]
              -translate-y-1/2
              rounded-full
              bg-blue-500/10
              blur-[120px]
          "/>
          <nav
            className="
                absolute
                top-6
                left-1/2
                z-20
                flex
                -translate-x-1/2
                gap-6
                rounded-full
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                backdrop-blur-md
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/70
            "
            >
            <a
                href="#about"
                className="text-blue-400 transition hover:text-white"
            >
                My Story
            </a>

            <a
                href="#projects"
                className="transition hover:text-white"
            >
                Building Blocks
            </a>

            <a
                href="#contact"
                className="transition hover:text-white"
            >
                Contact
            </a>
            </nav>

            <Space />
            <Particles />

            <div
                className="
                relative
                z-10
                flex
                min-h-screen
                flex-col
                items-center
                justify-center
                gap-6
                pt-28
                lg:flex-row
                lg:gap-10
                lg:justify-between
                "
            >
                <Cube
                    setCurrentSlide={setCurrentSlide}
                />

                <Narrative
                    slide={slides[currentSlide]}
                />
            </div>

        </section>

    );
}