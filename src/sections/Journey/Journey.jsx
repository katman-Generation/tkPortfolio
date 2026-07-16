import { journey } from "../../data/journey";
import JourneyItem from "../../components/journey/JourneyItem";


const Journey = () => {


return (

<section

id="journey"

className="
bg-[#0F172A]
px-6
py-24
"

>


<div className="
mx-auto
max-w-5xl
"


>


<div className="
mb-20
text-center
">


<p className="
uppercase
tracking-[0.3em]
text-blue-400
">

Journey

</p>


<h2 className="
mt-4
text-5xl
font-bold
text-white
">

My Story

</h2>


</div>



<div className="
relative
space-y-12
"


>

{/* Timeline Line */}

<div className="
absolute
left-12
top-0
hidden
h-full
w-px
bg-white/10
md:block
"

/>



{
journey.map((item,index)=>(

<JourneyItem

key={item.year}

item={item}

index={index}

/>

))

}


</div>


</div>


</section>


)

}


export default Journey;