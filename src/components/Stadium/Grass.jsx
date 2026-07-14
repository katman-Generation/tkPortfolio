export default function Grass() {

    return (

        <div
            className="
            absolute
            bottom-0

            w-full
            h-[45%]

            origin-bottom

            skew-x-0

            bg-gradient-to-b
            from-green-500
            via-green-700
            to-green-900
        "
        >
            <div className="absolute inset-0 grid grid-cols-12">

                {[...Array(12)].map((_, i) => (

                    <div
                        key={i}
                        className={i % 2 === 0 ? "bg-white/5" : ""}
                    />

                ))}

            </div>
        </div>

    );

}