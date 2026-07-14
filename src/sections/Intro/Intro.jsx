import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Tunnel from "../../components/Stadium/Tunnel";
import Stadium from "../../components/Stadium/Stadium";

export default function Intro() {
    const world = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            world.current,{
                scale:1,
                y:150,
            },{
                scale:1.5,
                y:0,
                duration: 3,
                ease: "power2.Out",
                delay: 0.5
            }
        )
    }, []);

    return (
       <section className="relative h-screen overflow-hidden bg-black">
            <div ref={world} className="absolute inset-0">
                <Tunnel />
                <Stadium />
            </div>
        </section> 
    )
}