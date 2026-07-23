export default function CubeFace({ className, image }) {
    return (
        <div
            className={`
                absolute
                h-96
                w-96
                overflow-hidden
                rounded-3xl
                border border-white/20
                shadow-[0_20px_80px_rgba(0,0,0,0.6)]
                backface-hidden
                ${className}
            `}
        >
            <img
                src={image}
                alt=""
                className="h-full w-full object-cover"
            />
        </div>
    );
}