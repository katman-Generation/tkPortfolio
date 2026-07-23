import { useState,useEffect, useRef } from "react";
import { gsap } from "gsap";

import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";
import my from "../../assets/my.jpg";
import { technologies } from "../../data/technologies";


export default function TechRing() {
  const ringRef = useRef(null);
  const [activeTech, setActiveTech] = useState(technologies[0]);
  const [hoveredTech, setHoveredTech] = useState(null);

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
    <div className="relative h-[560px] w-[560px]">

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
                  translateY(-240px)
                `,
                transformOrigin: "center center",
              }}
            >
              <div
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
                className="
                flex
                h-16
                w-16
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
              >
                <tech.icon
                  size={30}
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
            top-6
            -translate-x-1/2
            w-72
            rounded-2xl
            border
            border-cyan-400/20
            bg-slate-900/95
            p-5
            text-white
            shadow-2xl
            backdrop-blur-xl
            transition-all
            duration-300
        "
        >
        <h3
            className="text-xl font-bold"
            style={{
            color: (hoveredTech || activeTech).color,
            }}
        >
            {(hoveredTech || activeTech).name}
        </h3>

        <div className="mt-4 space-y-2 text-sm">

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
        h-64
        w-64
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