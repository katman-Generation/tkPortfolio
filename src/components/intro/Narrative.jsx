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
            absolute
            right-24
            top-1/2
            -translate-y-1/2
            max-w-md
            text-white
            "
        >

            <h1 className="text-5xl font-bold">
                {slide.title}
            </h1>

            <p className="mt-5 text-xl text-white/70">
                {slide.text}
            </p>

        </div>

    )
}