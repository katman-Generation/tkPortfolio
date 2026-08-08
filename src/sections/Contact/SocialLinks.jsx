import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLinkedin
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";


export default function SocialLinks() {

  const links = [
    {
      name: "Github",
      icon: <FaGithub />,
      url: "https://github.com/katman-generation"
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/katman-generation/"
    },

    {
      name: "X",
      icon: <FaXTwitter />,
      url: "https://x.com/katematatenda"
    },

    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/katman_generation/"
    },

    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/tatendabezel.katema/"
    },

    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/263785080894"
    }
  ];


  return (

    <div className="grid grid-cols-2 gap-4">

      {links.map(link => (

        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"

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
            hover:bg-cyan-400/10
            transition
            cursor-pointer
          "
        >

          <span className="text-xl text-cyan-400">
            {link.icon}
          </span>

          {link.name}

        </a>

      ))}

    </div>

  );
}