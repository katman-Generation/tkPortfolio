import { motion } from "framer-motion";


export default function BookPage({

data,
index,
currentPage,
nextPage,
previousPage

}){


const flipped = index <= currentPage;


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
p-10
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
text-sm
text-amber-700
"

>

{data.chapter}

</p>



<h1

className="
mt-5
text-4xl
font-serif
text-gray-900
"

>

{data.title}

</h1>



<p

className="
mt-3
italic
text-gray-500
"

>

{data.period}

</p>



<div

className="
mt-10
space-y-5
"

>

{

data.events.map((event,i)=>(

<p

key={i}

className="
text-gray-700
leading-7
"

>

• {event}

</p>

))

}


</div>



</div>



{/* BACK OF PAGE */}

<div

className="
absolute
inset-0
bg-[#efe4cc]
rounded-l-xl
"

style={{

transform:"rotateY(180deg)",

backfaceVisibility:"hidden"

}}

>


</div>



</motion.div>


)

}