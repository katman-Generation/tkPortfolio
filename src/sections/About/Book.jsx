import { motion } from "framer-motion";
import { useState } from "react";

import BookCover from "./BookCover";
import InsideCover from "./InsideCover";
import Spine from "./Spine";
import BookPage from "./BookPage";

import { pages } from "./TimeLineData";


export default function Book() {

  const [opened,setOpened] = useState(false);
  const [currentPage,setCurrentPage] = useState(-1);


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


return (

<div

className="
relative
flex
items-center
justify-center
h-screen
bg-slate-900
"

style={{
perspective:"2500px"
}}

>


<motion.div

className="
relative
w-[850px]
h-[560px]
"

animate={{
x: opened ? 110 : 0
}}

transition={{
duration:1.8,
ease:[0.22,1,0.36,1]
}}

style={{
transformStyle:"preserve-3d"
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
w-1/2
h-full
"

style={{
transformStyle:"preserve-3d"
}}

>


{
opened && currentPage === -1 && (
<InsideCover />
)
}


</div>



{/* ALL PAGES */}

{

pages.map((page,index)=>(

<BookPage

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

/>



</motion.div>



{/* INSTRUCTIONS */}

{

opened && (

<div

className="
absolute
bottom-10
left-0
w-full
flex
justify-between
px-20
text-gray-400
text-sm
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