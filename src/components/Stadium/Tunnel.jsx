export default function Tunnel() {
    return (
        <>
            {/* Left Wall */}
            <div
                className="
                    absolute
                    bottom-0
                    left-0

                    w-[30vw]
                    h-full

                    bg-gradient-to-r
                    from-zinc-900
                    via-zinc-800
                    to-zinc-700

                    [clip-path:polygon(0_0,100%_18%,100%_100%,0_100%)]
                "
            />

            {/* Right Wall */}
            <div
                className="
                    absolute
                    bottom-0
                    right-0

                    w-[30vw]
                    h-full

                    bg-gradient-to-l
                    from-zinc-900
                    via-zinc-800
                    to-zinc-700

                    [clip-path:polygon(0_18%,100%_0,100%_100%,0_100%)]
                "
            />

            {/* Ceiling */}

            <div
                className="
                    absolute
                    top-0
                    left-0

                    w-full
                    h-[18vh]

                    bg-zinc-900
                "
            />

            {/* Floor */}

            <div
                className="
                    absolute
                    bottom-0
                    left-1/2
                    -translate-x-1/2

                    w-[40vw]
                    h-full

                    bg-gradient-to-b
                    from-zinc-700
                    to-zinc-900
                "
            />
        </>
    );
}