import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiDjango,
  SiJavascript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

export const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "#61DAFB",
    projects: 12,
    confidence: 90,
    since: "2024",
    favorite: "Hooks & Component Architecture",
    joke: "Still Googles useEffect dependency arrays 😅",
  },

  {
    name: "Django",
    icon: SiDjango,
    color: "#44B78B",
    projects: 20,
    confidence: 95,
    since: "2023",
    favorite: "Django REST Framework",
    joke: "Still Googles 'python manage.py startapp' 😂",
  },

  {
    name: "Python",
    icon: FaPython,
    color: "#3776AB",
    projects: 25,
    confidence: 95,
    since: "2022",
    favorite: "Automation & APIs",
    joke: "Sometimes prints variables just to debug 😅",
  },

  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "#F7DF1E",
    projects: 15,
    confidence: 88,
    since: "2023",
    favorite: "Interactive Interfaces",
    joke: "Still double-checks == vs === 😂",
  },

  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "#38BDF8",
    projects: 15,
    confidence: 94,
    since: "2024",
    favorite: "Rapid UI Development",
    joke: "Sometimes forgets justify-center 😅",
  },

  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "#336791",
    projects: 10,
    confidence: 82,
    since: "2023",
    favorite: "Relational Databases",
    joke: "Still Googles GROUP BY syntax 😂",
  },

  {
    name: "Git",
    icon: FaGitAlt,
    color: "#F1502F",
    projects: 40,
    confidence: 92,
    since: "2022",
    favorite: "Version Control",
    joke: "git add . before git status 😅",
  },

  {
    name: "Linux",
    icon: FaLinux,
    color: "#FCC624",
    projects: 30,
    confidence: 90,
    since: "2022",
    favorite: "Ubuntu Development",
    joke: "Still Googles chmod permissions 😂",
  },

  {
    name: "HTML5",
    icon: FaHtml5,
    color: "#E34F26",
    projects: 35,
    confidence: 98,
    since: "2022",
    favorite: "Semantic Markup",
    joke: "Still opens DevTools every 5 minutes 😄",
  },

  {
    name: "CSS3",
    icon: FaCss3Alt,
    color: "#1572B6",
    projects: 35,
    confidence: 92,
    since: "2022",
    favorite: "Animations",
    joke: "margin:auto still feels magical 😂",
  },
];