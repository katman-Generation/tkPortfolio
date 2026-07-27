import {
FaGithub,
FaInstagram,
FaFacebook,
FaWhatsapp
} from "react-icons/fa";

import {FaXTwitter} from "react-icons/fa6";


export default function SocialLinks(){


const links=[

{
name:"Github",
icon:<FaGithub/>
},

{
name:"X",
icon:<FaXTwitter/>
},

{
name:"Instagram",
icon:<FaInstagram/>
},

{
name:"Facebook",
icon:<FaFacebook/>
},

{
name:"WhatsApp",
icon:<FaWhatsapp/>
}

];


return (

<div className="
grid grid-cols-2 gap-4
">


{
links.map(link=>(

<div

key={link.name}

className="
flex
items-center
gap-3
p-4
rounded-xl
bg-white/5
border
border-white/10
hover:border-cyan-400
transition
cursor-pointer
"

>

<span className="text-xl text-cyan-400">
{link.icon}
</span>


{link.name}


</div>

))

}


</div>


)

}