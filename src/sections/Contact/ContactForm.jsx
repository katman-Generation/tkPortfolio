import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


export default function ContactForm(){


    const [method,setMethod]=useState("whatsapp");

    const [status,setStatus]=useState("");

    const [form,setForm]=useState({

        name:"",
        email:"",
        project:"Website Development",
        message:""

    });



    const handleChange=(e)=>{

        setForm({

            ...form,

            [e.target.name]:e.target.value

        });

    };




    const sendWhatsApp=()=>{


        const text = `

Hello Katman,

My name is ${form.name}

Email:
${form.email}

Project:
${form.project}

Message:
${form.message}


        `;


        const url =
        `https://wa.me/263785080894?text=${encodeURIComponent(text)}`;


        window.open(url,"_blank");


    };





    const sendEmail=()=>{

        console.log({
            service: import.meta.env.VITE_EMAIL_SERVICE,
            template: import.meta.env.VITE_EMAIL_TEMPLATE,
            key: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
            form
        });
        emailjs.send(

            import.meta.env.VITE_EMAIL_SERVICE,
            import.meta.env.VITE_EMAIL_TEMPLATE,

            form,

            import.meta.env.VITE_EMAIL_PUBLIC_KEY

        )

        .then(()=>{


            setStatus(
                "CONNECTION SUCCESSFUL - MESSAGE TRANSMITTED"
            );


        })

        .catch(()=>{


            setStatus(
                "SYSTEM ERROR - TRY AGAIN"
            );


        });


    };






    const handleSubmit=(e)=>{

        e.preventDefault();



        if(method==="whatsapp"){

            sendWhatsApp();

        }



        if(method==="email"){

            sendEmail();

        }



        if(method==="either"){


            sendEmail();

            setTimeout(()=>{

                sendWhatsApp();

            },1000);


        }


    };






return (

<motion.div

initial={{opacity:0,x:80}}

whileInView={{opacity:1,x:0}}

transition={{duration:.8}}

className="
bg-white/5
backdrop-blur-xl
border
border-cyan-400/20
rounded-3xl
p-8
"


>


<h3 className="
text-2xl
font-bold
mb-8
">

CONNECTION TERMINAL

</h3>



<form

onSubmit={handleSubmit}

className="space-y-5"

>




<input

name="name"

value={form.name}

onChange={handleChange}

placeholder="Your Name"

className="
w-full
bg-black/30
border
border-white/10
rounded-xl
p-4
outline-none
focus:border-cyan-400
"

/>





<input

name="email"

value={form.email}

onChange={handleChange}

placeholder="Your Email"

className="
w-full
bg-black/30
border
border-white/10
rounded-xl
p-4
outline-none
focus:border-cyan-400
"

/>






<select

name="project"

value={form.project}

onChange={handleChange}


className="
w-full
bg-black/30
border
border-white/10
rounded-xl
p-4
"

>


<option>
Website Development
</option>


<option>
Web Application
</option>


<option>
API Development
</option>


<option>
Business Automation
</option>


</select>






<textarea

name="message"

value={form.message}

onChange={handleChange}

rows="5"

placeholder="Your message..."

className="
w-full
bg-black/30
border
border-white/10
rounded-xl
p-4
outline-none
focus:border-cyan-400
"

/>





<div>


<p className="mb-4 text-gray-400">

Preferred communication

</p>



<div className="flex gap-4 flex-wrap">


{
["whatsapp","email","either"]

.map(item=>(


<button

type="button"

key={item}

onClick={()=>setMethod(item)}

className={`

px-5

py-2

rounded-full

border

transition

${

method===item

?

"bg-cyan-400 text-black"

:

"border-white/20"

}

`}

>

{item}


</button>


))

}


</div>


</div>






<button

type="submit"

className="
w-full
mt-6
py-4
rounded-xl
bg-cyan-400
text-black
font-bold
hover:scale-105
transition
"

>

INITIATE CONNECTION

</button>




{
status &&

<div

className="
mt-5
p-4
rounded-xl
bg-black/40
text-cyan-400
text-sm
"

>

&gt; {status}

</div>


}




</form>


</motion.div>


)

}