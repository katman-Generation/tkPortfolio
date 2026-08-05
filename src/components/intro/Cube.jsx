import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";

import CubeFace from "./CubeFace";

import profile from "../../assets/intro/acting.jpg";
import cooking from "../../assets/intro/cooking.jpg";
import acting from "../../assets/intro/bilbao.jpg";
import football from "../../assets/intro/ss.jpg";
import camera from "../../assets/intro/wak.jpg";
import founder from "../../assets/intro/italy.jpg";

export default function Cube({ setCurrentSlide }) {
    const cube = useRef(null);
    const cubeFloat = useRef(null);
    const timeLine = useRef(null);

    useEffect(() => {
        gsap.to(cubeFloat.current, {
            y: -15,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
        });
        const tl = gsap.timeline({
            repeat:-1,
        });
        timeLine.current = tl;


        tl
        // Front → Right
        .to(cube.current,{
            rotateY:-90,
            duration:1.5,
            ease:"power2.inOut"
        })
        .call(()=>setCurrentSlide(1))
        .to({}, {duration:2})


        // Right → Back
        .to(cube.current,{
            rotateY:-180,
            duration:1.5,
            ease:"power2.inOut"
        })
        .call(()=>setCurrentSlide(2))
        .to({}, {duration:2})


        // Back → Left
        .to(cube.current,{
            rotateY:-270,
            duration:1.5,
            ease:"power2.inOut"
        })
        .call(()=>setCurrentSlide(3))
        .to({}, {duration:2})


        // Left → Top
        .to(cube.current,{
            rotateY:-360,
            rotateX:-90,
            duration:2,
            ease:"power2.inOut"
        })
        .call(()=>setCurrentSlide(4))
        .to({}, {duration:2})


        // Top → Front reset
        .to(cube.current,{
            rotateX:0,
            rotateY:-360,
            duration:2,
            ease:"power2.inOut"
        })
        .to(cube.current,{
            rotateY:0,
            duration:0
        })
        .call(()=>setCurrentSlide(0))
        .to({}, {duration:2});

    }, []);

    return (
        <div className="flex w-full items-center justify-center [perspective:1500px] lg:w-1/2 lg:translate-y-8">

            <div
                ref={cubeFloat}
                className="relative h-96 w-96 [transform-style:preserve-3d] cursor-pointer [backface-visibility:hidden]"
            >
                <div
                    ref={cube}
                    style={{
                        pointerEvents: "auto",
                    }}
                    onPointerDown={() => timeLine.current?.pause()}
                    onPointerUp={() => {
                        timeLine.current?.resume();
                    }}
                    onPointerLeave={() => {
                        timeLine.current?.resume();
                    }}
                    
                    className="
                    relative
                    h-96
                    w-96
                    [transform-style:preserve-3d]
                    "
                >
                    <CubeFace
                        className="[transform:translateZ(192px)]"
                        image={profile}
                    />

                    <CubeFace
                        className="[transform:rotateY(180deg)_translateZ(192px)]"
                        image={cooking}
                    />

                    <CubeFace
                        className="[transform:rotateY(90deg)_translateZ(192px)]"
                        image={acting}
                    />

                    <CubeFace
                        className="[transform:rotateY(-90deg)_translateZ(192px)]"
                        image={football}
                    />

                    <CubeFace
                        className="[transform:rotateX(90deg)_translateZ(192px)]"
                        image={camera}
                    />

                    <CubeFace
                        className="[transform:rotateX(-90deg)_translateZ(192px)]"
                        image={founder}
                    />
                </div>
                
            </div>

        </div>
    );
}