export default function Space(){

    const stars = Array.from({ length: 40 });

    return (
        <>

            {/* Half moon */}
            <div
                className="
                absolute
                right-24
                top-24
                h-40
                w-40
                overflow-hidden
                rounded-full
                bg-zinc-200
                shadow-[0_0_100px_rgba(255,255,255,0.5)]
                "
            >
                <div
                    className="
                    absolute
                    -right-10
                    top-0
                    h-40
                    w-40
                    rounded-full
                    bg-black
                    "
                />
            </div>


            {/* Random stars */}
            {
                stars.map((_, index)=>(
                    <div
                        key={index}
                        className="
                        absolute
                        h-1
                        w-1
                        rounded-full
                        bg-white
                        "
                        style={{
                            left:`${Math.random()*100}%`,
                            top:`${Math.random()*100}%`,
                            opacity: Math.random(),
                            transform:`scale(${Math.random()*2})`
                        }}
                    />
                ))
            }

        </>
    )
}