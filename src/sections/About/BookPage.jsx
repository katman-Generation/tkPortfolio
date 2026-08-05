import { motion } from "framer-motion";


export default function BookPage({

data,
index,
currentPage,
nextPage,
previousPage,
isMobile

}){


const flipped = index <= currentPage;


const splitIndex = isMobile
  ? Math.min(3, data.events.length)
  : Math.ceil(data.events.length / 2);
const frontEvents = data.events.slice(0, splitIndex);
const backEvents = data.events.slice(splitIndex);


return (

<motion.div

onClick={()=>{

if(flipped){

previousPage();

}
else{

nextPage();

}

}}

className="
absolute
top-0
right-0
w-1/2
h-full
cursor-pointer
"

style={{

transformStyle:"preserve-3d",

transformOrigin:"left center",

zIndex: flipped ? index : 100-index

}}


animate={{

rotateY: flipped ? -180 : 0

}}


transition={{

duration:1.2,
ease:[0.22,1,0.36,1]

}}

>


{/* FRONT */}

<div

className="
absolute
inset-0
bg-[#f7f1e3]
rounded-r-xl
p-4
sm:p-6
lg:p-10
shadow-xl
"

style={{

backfaceVisibility:"hidden"

}}

>


<p

className="
uppercase
tracking-[0.3em]
text-[10px]
sm:text-xs
lg:text-sm
text-amber-700
"

>

{data.chapter}

</p>



<h1

className="
mt-2
sm:mt-3
lg:mt-5
text-xl
sm:text-2xl
lg:text-4xl
font-serif
text-gray-900
"

>

{data.title}

</h1>



<p

className="
mt-2
sm:mt-3
italic
text-gray-500
text-xs
sm:text-sm
"

>

{data.period}

</p>

{frontEvents.map((event, i) => (
  <p
    key={i}
    className="
      text-gray-700
      text-xs
      sm:text-sm
      lg:text-base
      leading-5
      sm:leading-6
      lg:leading-7
      mb-2
      sm:mb-3
      lg:mb-4
    "
  >
    • {event}
  </p>
))}

</div>



{/* BACK OF PAGE */}

<div
  className="
    absolute
    inset-0
    bg-[#efe4cc]
    rounded-l-xl
    p-4
    sm:p-6
    lg:p-10
  "
  style={{
    transform: "rotateY(180deg)",
    backfaceVisibility: "hidden",
  }}
>
  <h2
    className="
      text-lg
      sm:text-xl
      lg:text-2xl
      font-serif
      text-gray-900
      mb-1
      sm:mb-2
      lg:mb-4
    "
  >
    Continued...
  </h2>

  {backEvents.map((event, i) => (
    <p
      key={i}
      className="
        text-gray-700
        text-xs
        sm:text-sm
        lg:text-base
        leading-4
        sm:leading-5
        lg:leading-7
        mb-2
        sm:mb-3
        lg:mb-4
      "
    >
      • {event}
    </p>
  ))}
</div>



</motion.div>


)

}