import { useState } from "react";
import { pages } from "./TimeLineData";


export default function MobileBook(){

const [currentPage,setCurrentPage] = useState(0);


const page = pages[currentPage];

const [opened,setOpened] = useState(false);


const nextPage = () => {

if(currentPage < pages.length - 1){
setCurrentPage(currentPage + 1);
}

};


const previousPage = () => {

if(currentPage > 0){
setCurrentPage(currentPage - 1);
}

};
if (!opened) {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-slate-900 px-6">

      <div
        onClick={() => setOpened(true)}
        className="
          w-full
          max-w-sm
          aspect-[3/4]
          bg-[#3b2415]
          rounded-xl
          shadow-2xl
          border
          border-yellow-700/30
          cursor-pointer
          flex
          items-center
          justify-center
          text-center
          p-8
          transition-transform
          duration-300
          hover:scale-[1.02]
        "
      >
        <div>

          <p className="tracking-[0.4em] text-yellow-500 text-xs">
            THE STORY OF
          </p>

          <h1 className="mt-6 text-4xl font-serif text-yellow-400">
            KATMAN
          </h1>

          <p className="mt-6 italic text-gray-300">
            A journey written in code
          </p>

          <p className="mt-10 text-xs text-yellow-600">
            Tap to open
          </p>

        </div>
      </div>

    </div>
  );
}


return (

<div
className="
w-full
min-h-screen
flex
items-center
justify-center
px-4
bg-slate-900
"
>

<div
className="
w-full
max-w-md
aspect-[3/4]
bg-gradient-to-b from-[#f8f3e7] to-[#efe3c8]
rounded-xl
shadow-2xl
p-6
flex
flex-col
"
>


<p
className="
uppercase
tracking-[0.3em]
text-xs
text-amber-700
"
>
{page.chapter}
</p>


<h1
className="
mt-4
text-2xl
font-serif
text-gray-900
"
>
{page.title}
</h1>


<p
className="
mt-2
italic
text-sm
text-gray-500
"
>
{page.period}
<div className="my-5 h-px bg-amber-300" />
</p>


<div
className="
mt-6
flex-1
overflow-hidden
"
>

{
page.events.map((event,i)=>(

<p
key={i}
className="
text-sm
leading-6
text-gray-700
mb-3
"
>
• {event}
</p>

))
}

</div>


<div
className="
mt-6
flex
items-center
justify-between
border-t
border-amber-200
pt-4
"
>

<button
onClick={previousPage}
disabled={currentPage === 0}
className="
px-4
py-2
rounded-lg
bg-amber-100
text-amber-900
text-sm
disabled:opacity-40
"
>
← Previous
</button>


<div
className="
text-xs
text-gray-500
font-medium
"
>
Page {currentPage + 1} of {pages.length}
</div>


<button
onClick={nextPage}
disabled={currentPage === pages.length - 1}
className="
px-4
py-2
rounded-lg
bg-amber-700
text-white
text-sm
disabled:opacity-40
"
>
Next →
</button>


</div>


</div>

</div>

)

}