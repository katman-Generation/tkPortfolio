export default function OrbitIcon({
    tech,
    angle,
    radius,
    isActive,
    onHover,
    onLeave,
}) {

    const Icon = tech.icon;

    return (
        <div
            className="absolute left-1/2 top-1/2"
            style={{
                transform: `
                    rotate(${angle}deg)
                    translateY(-${radius}px)
                `,
            }}
        >
            <div
                onMouseEnter={() => onHover(tech)}
                onMouseLeave={onLeave}
                className={`
                    relative
                    flex
                    h-16
                    w-16
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    bg-slate-900
                    transition-all
                    duration-300

                    ${
                        isActive
                            ? "scale-125 border-cyan-400 shadow-[0_0_30px_rgba(34,211,238,.8)]"
                            : "border-white/10 hover:scale-110"
                    }
                `}
            >
                <Icon
                    size={30}
                    color={tech.color}
                />
            </div>
        </div>
    );
}