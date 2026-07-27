import { motion } from "framer-motion";

import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import SocialLinks from "./SocialLinks";


export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-20 overflow-hidden"
        >

            <div className="max-w-7xl w-full">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once:true }}
                    className="text-center mb-16"
                >

                    <p className="text-cyan-400 tracking-[0.5em] text-sm mb-4">
                        COMMUNICATION SYSTEM
                    </p>

                    <h2 className="text-5xl md:text-7xl font-bold">
                        KATMAN
                        <span className="text-cyan-400">
                            {" "}CONTROL ROOM
                        </span>
                    </h2>

                    <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
                        Establish a connection and let's create something
                        extraordinary together.
                    </p>

                </motion.div>



                <div className="grid lg:grid-cols-2 gap-10">

                    {/* Left Side */}
                    <div className="space-y-8">

                        <ContactCard />

                        <SocialLinks />

                    </div>


                    {/* Right Side */}
                    <ContactForm />


                </div>

            </div>

        </section>
    );
}