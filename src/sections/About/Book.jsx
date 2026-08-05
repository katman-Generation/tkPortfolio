import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import BookCover from "./BookCover";
import InsideCover from "./InsideCover";
import Spine from "./Spine";
import BookPage from "./BookPage";
import MobileBook from "./MobileBook";

import { pages } from "./TimeLineData";

export default function Book() {

  const [opened,setOpened] = useState(false);
  const [currentPage,setCurrentPage] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();
    window.addEventListener("resize", check);

    return () => {
      window.removeEventListener("resize", check);
    };
  }, []);

  const openBook = () => {
    setOpened(true);
  };


  const nextPage = () => {

    if(currentPage < pages.length - 1){
      setCurrentPage(prev => prev + 1);
    }

  };


  const previousPage = () => {

    if(currentPage >= 0){
      setCurrentPage(prev => prev - 1);
    }

  };
  if (isMobile) {
    return <MobileBook />;
  }


return (

<div

className="
relative
flex
items-center
justify-center
min-h-screen
w-full
bg-slate-900
overflow-hidden
px-4
sm:px-6
lg:px-0
"

style={{
perspective:"2500px"
}}

>

<motion.div
  className="
    relative
    w-full
    max-w-[850px]
    aspect-[850/560]
  "
  style={{
    transformStyle: "preserve-3d"
  }}

  animate={{
    x: opened ? 110 : 0,
  }}

  transition={{
    duration:1.8,
    ease:[0.22,1,0.36,1]
  }}
>


{/* SPINE */}

<Spine />


{/* LEFT SIDE */}

<div

className="
absolute
left-0
top-0
h-full
w-1/2
"
style={{
transformStyle:"preserve-3d"
}}

>


{
opened && currentPage === -1 && (
<InsideCover isMobile={isMobile} />
)
}


</div>



{/* ALL PAGES */}

{

pages.map((page,index)=>(

<BookPage

isMobile={isMobile}

key={page.id}

data={page}

index={index}

currentPage={currentPage}

nextPage={nextPage}

previousPage={previousPage}

/>

))

}




{/* COVER */}

<BookCover

opened={opened}

onOpen={openBook}

isMobile={isMobile}

/>



</motion.div>



{/* INSTRUCTIONS */}

{

opened && (

<div

className="
absolute
bottom-4
sm:bottom-8
left-0
w-full
flex
flex-col
items-center
gap-2
sm:flex-row
sm:justify-between
px-4
sm:px-10
lg:px-20
text-[11px]
text-gray-400
sm:text-sm
"

>

<p>
← Click left page for previous
</p>


<p>
Click right page for next →
</p>


</div>

)

}


</div>

)

}