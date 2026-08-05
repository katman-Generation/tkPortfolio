import { useEffect, useRef } from "react";
import { gsap } from "gsap";


export default function Narrative({slide}) {

    const text = useRef();


    useEffect(()=>{

        gsap.fromTo(
            text.current,
            {
                opacity:0,
                y:30,
            },
            {
                opacity:1,
                y:0,
                duration:.8,
                ease:"power2.out"
            }
        )

    },[slide]);


    return (

        <div
            ref={text}
            className="
            relative
            z-10
            w-full
            max-w-sm
            lg:max-w-md
            text-center
            text-white
            lg:text-left
            "
        >

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                {slide.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg lg:text-xl text-white/70">
                {slide.text}
            </p>

        </div>

    )
}