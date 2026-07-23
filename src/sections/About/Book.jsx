import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { pages } from "./TimeLineData";

import BookCover from "./BookCover";
import Page from "./Page";
//import Navigation from "./Navigation";


export default function Book() {

    const [opened, setOpened] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);

    const bookRef = useRef(null);

    const isInView = useInView(bookRef, {
        once: true,
        amount: 0.5,
    });


    return (

        <div
            ref={bookRef}
            className="
                relative
                h-[750px]
                w-[1100px]
                flex
                items-center
                justify-center
                perspective-[2000px]
            "
        >

            {/* OPEN BOOK */}

            <div
                className="
                relative
                h-[520px]
                w-[760px]
                perspective-[2000px]
                "
                style={{
                transformStyle:"preserve-3d"
                }}
                >


                {/* Pages behind cover */}

                <motion.div

                initial={{
                opacity:0
                }}

                animate={{
                opacity:opened ? 1 : 0
                }}

                transition={{
                duration:1
                }}

                >

                <Page
                data={pages[currentPage]}
                />


                </motion.div>



                <BookCover
                open={opened}
                onClick={()=>setOpened(true)}
                />



            </div>


        </div>

    );
}