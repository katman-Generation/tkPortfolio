import { motion } from "framer-motion";


const JourneyItem = ({item, index}) => {

return (

<motion.div

initial={{
opacity:0,
x:index % 2 === 0 ? -50 : 50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.6
}}

className={`
relative
flex
${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
items-center
gap-8
`}

>


{/* Year */}

<div className="
flex
h-24
w-24
shrink-0
items-center
justify-center
rounded-full
border
border-blue-500
bg-[#111827]
text-xl
font-bold
text-blue-400
">

{item.year}

</div>



{/* Content */}

<div className="
rounded-2xl
border
border-white/10
bg-[#1F2937]
p-6
"

>


<h3 className="
text-2xl
font-bold
text-white
">

{item.title}

</h3>


<p className="
mt-4
leading-7
text-gray-400
">

{item.description}

</p>


</div>


</motion.div>

)

}


export default JourneyItem;