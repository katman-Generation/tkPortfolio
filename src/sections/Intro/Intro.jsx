import { useState } from "react";

import Cube from "../../components/intro/Cube";
import Narrative from "../../components/intro/Narrative";
import Particles from "../../components/intro/Particles";
import Space from "../../components/intro/Space";
import { slides } from "../../components/intro/slides";


export default function Intro() {

    const [currentSlide, setCurrentSlide] = useState(0);


    return (

        <section className="
            relative
            h-screen
            overflow-hidden
            bg-gradient-to-br from-black via-zinc-950 to-black
        ">
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

            <Space />
            <Particles />

            <Cube 
                setCurrentSlide={setCurrentSlide}
            />


            <Narrative
                slide={slides[currentSlide]}
            />

        </section>

    );
}