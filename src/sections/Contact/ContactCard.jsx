import { motion } from "framer-motion";


export default function ContactCard(){

    return (

        <motion.div

            initial={{opacity:0,scale:.9}}
            whileInView={{opacity:1,scale:1}}
            transition={{duration:.6}}

            className="
            relative
            p-8
            rounded-3xl
            bg-white/5
            backdrop-blur-xl
            border
            border-cyan-400/20
            shadow-lg
            shadow-cyan-500/10
            "

        >


            <div className="absolute top-5 right-5">

                <span className="
                flex items-center gap-2
                text-green-400 text-sm
                ">

                    <span className="
                    w-3 h-3
                    rounded-full
                    bg-green-400
                    animate-pulse
                    "></span>

                    ONLINE

                </span>

            </div>



            <h3 className="
            text-3xl
            font-bold
            mb-3
            ">
                Tatenda Katema
            </h3>


            <p className="
            text-cyan-400
            mb-8
            ">
                Full Stack Developer
            </p>



            <div className="space-y-4 text-gray-300">


                <div>
                    ⚡ Web Applications
                </div>

                <div>
                    ⚡ API Development
                </div>

                <div>
                    ⚡ Business Automation
                </div>

                <div>
                    ⚡ Creative Technology
                </div>


            </div>



        </motion.div>

    )
}