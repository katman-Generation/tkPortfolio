import { useState,useEffect, useRef } from "react";
import { gsap } from "gsap";

import my from "../../assets/my.jpg";
import { technologies } from "../../data/technologies";


export default function TechRing() {
  const ringRef = useRef(null);
  const [activeTech, setActiveTech] = useState(technologies[0]);
  const [hoveredTech, setHoveredTech] = useState(null);
  const ringSize =
    window.innerWidth < 640
      ? 340
      : window.innerWidth < 1024
      ? 420
      : 560;

  const radius = ringSize / 2 - 32;
  const iconSize = ringSize * 0.055;
  const orbitButton = ringSize * 0.115;

  useEffect(() => {

        let rotation = 0;

        const update = () => {

            rotation += .2;

            gsap.set(ringRef.current,{
                rotate: rotation
            });

            const index =
                Math.round(rotation / 36) % technologies.length;

            setActiveTech(
                technologies[
                    (technologies.length - index) % technologies.length
                ]
            );

        };

        gsap.ticker.add(update);

        return () => {
            gsap.ticker.remove(update);
        };

    }, []);

  return (
    <div className="relative h-[340px] w-[340px] sm:h-[420px] sm:w-[420px] lg:h-[560px] lg:w-[560px]">

      {/* Background Glow */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/5 blur-3xl" />

      {/* Outer Ring */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/10" />

      {/* Glass Ring */}
      <div className="absolute inset-6 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md" />

      {/* Inner Ring */}
      <div className="absolute inset-16 rounded-full border border-cyan-400/20" />

      {/* Orbit Layer */}
      <div
        ref={ringRef}
        className="absolute inset-0"
        style={{ transformOrigin: "50% 50%" }}
      >
        {technologies.map((tech, index) => {
          const angle = (360 / technologies.length) * index;

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  rotate(${angle}deg)
                  translateY(-${radius}px)
                `,
              }}
            >
              <div
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                className="
                flex
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-gradient-to-br
                from-slate-800
                to-slate-900
                shadow-xl
                backdrop-blur-md
                transition-all
                duration-300
                hover:scale-125
                hover:border-cyan-400
                "
                style={{
                  width: orbitButton,
                  height: orbitButton,
                }}
              >
                <tech.icon
                  size={iconSize}
                  color={tech.color}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Photo Glow */}
      <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      <div
        className="
          absolute
          left-1/2
          top-0
          sm:top-2
          lg:top-6
          w-[240px]
          sm:w-[280px]
          lg:w-72
          -translate-x-1/2
          rounded-2xl
          border
          border-cyan-400/20
          bg-slate-900/95
          p-3
          sm:p-4
          lg:p-5
          text-white
          shadow-2xl
          backdrop-blur-xl
          transition-all
          duration-300
          "
          style={{
            transform: "translate(-50%, -35px)"
          }}
          
        >
        <h3
            className="text-lg sm:text-xl font-bold"
            style={{
            color: (hoveredTech || activeTech).color,
            }}
        >
            {(hoveredTech || activeTech).name}
        </h3>

        <div className="mt-4 space-y-2 text-xs sm:text-sm">

            <p>
            🚀 Built <strong>{(hoveredTech || activeTech).projects}</strong> Projects
            </p>

            <p>
            💪 Confidence <strong>{(hoveredTech || activeTech).confidence}%</strong>
            </p>

            <p>
            ❤️ Loves {(hoveredTech || activeTech).favorite}
            </p>

            <p className="italic text-slate-400">
            {(hoveredTech || activeTech).joke}
            </p>

        </div>

        {/* little speech pointer */}
        <div
            className="
            absolute
            left-1/2
            bottom-[-10px]
            h-5
            w-5
            -translate-x-1/2
            rotate-45
            border-b
            border-r
            border-cyan-400/20
            bg-slate-900
            "
        />
        </div>
      {/* Profile */}
      <div
        className="
        absolute
        left-1/2
        top-1/2
        h-44
        w-44
        sm:h-56
        sm:w-56
        lg:h-64
        lg:w-64
        -translate-x-1/2
        -translate-y-1/2
        overflow-hidden
        rounded-full
        border-[6px]
        border-cyan-400/30
        ring-8
        ring-cyan-500/10
        shadow-[0_0_70px_rgba(34,211,238,.35)]
        "
      >
        <img
          src={my}
          alt="Tatenda Katema"
          className="h-full w-full object-cover"
        />
      </div>

    </div>
  );
}