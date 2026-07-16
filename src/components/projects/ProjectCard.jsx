import { motion } from "framer-motion";


const ProjectCard = ({project}) => {

return (

<motion.div

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.5
}}

className="
overflow-hidden
rounded-2xl
border
border-white/10
bg-[#1F2937]
transition
hover:-translate-y-2
"

>


{/* Image */}

<div className="h-56 bg-black">

<img

src={project.image}

alt={project.title}

className="
h-full
w-full
object-cover
"

/>

</div>



{/* Content */}

<div className="p-6">


<p className="
mb-2
text-sm
text-blue-400
">

{project.category}

</p>



<h3 className="
text-2xl
font-bold
text-white
">

{project.title}

</h3>



<p className="
mt-4
text-gray-400
leading-7
">

{project.description}

</p>



{/* Tech */}

<div className="
mt-6
flex
flex-wrap
gap-2
">

{
project.technologies.map((tech)=>(

<span

key={tech}

className="
rounded-full
bg-black/30
px-3
py-1
text-sm
text-gray-300
"

>

{tech}

</span>

))
}

</div>



{/* Buttons */}

<div className="
mt-8
flex
gap-4
">


<a

href={project.github}

target="_blank"

className="
rounded-lg
border
border-white/20
px-4
py-2
text-white
hover:bg-white
hover:text-black
"

>

Github

</a>



<a

href={project.demo}

target="_blank"

className="
rounded-lg
bg-blue-600
px-4
py-2
text-white
hover:bg-blue-700
"

>

Live Demo

</a>


</div>


</div>


</motion.div>

)

}


export default ProjectCard;