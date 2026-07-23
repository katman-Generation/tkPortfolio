import { motion } from "framer-motion";


export default function BookCover({open, onClick}) {

    return (

        <motion.div
            onClick={onClick}

            animate={{
                rotateY: open ? -165 : 0
            }}

            transition={{
                duration:1.8,
                ease:[0.22,1,0.36,1]
            }}

            style={{
                transformOrigin:"left center",
                transformStyle:"preserve-3d"
            }}

            className="
                absolute
                left-0
                top-0
                z-20
                h-[520px]
                w-[380px]
                cursor-pointer
                rounded-r-2xl
                bg-[#3b2415]
                shadow-2xl
                border
                border-yellow-600/30
            "

        >

            {/* spine */}

            <div
                className="
                    absolute
                    left-0
                    top-0
                    h-full
                    w-8
                    bg-[#241508]
                    rounded-l-xl
                "
            />


            <div
                className="
                    flex
                    h-full
                    items-center
                    justify-center
                    text-center
                "
            >

                <div>

                    <p
                    className="
                    text-yellow-500
                    tracking-[0.4em]
                    text-sm
                    "
                    >
                        THE STORY OF
                    </p>


                    <h1
                    className="
                    mt-6
                    text-5xl
                    font-serif
                    text-yellow-400
                    "
                    >
                        KATMAN
                    </h1>


                    <p
                    className="
                    mt-6
                    text-gray-300
                    italic
                    "
                    >
                        A journey written in code
                    </p>

                </div>

            </div>


        </motion.div>

    )
}