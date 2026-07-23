export default function Page({data}){


return(

<div
className="
h-full
w-full
bg-[#f7f1e3]
p-10
rounded-r-xl
shadow-xl
"
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
mt-2
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
data.events.map((event,index)=>(

<p
key={index}
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


<div
className="
absolute
bottom-8
right-10
text-gray-400
"
>
{data.id}
</div>


</div>

)

}