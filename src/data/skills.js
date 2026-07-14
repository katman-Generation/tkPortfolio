import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiDjango,
  SiPostgresql,
  SiSqlite,
  SiMysql,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: FaPython },
      { name: "JavaScript", icon: FaJs },
      { name: "Java", icon: FaJava },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "SQL", icon: Tbsql },
    ],
  },

  {
    title: "Frameworks",
    skills: [
      { name: "Django", icon: SiDjango },
      { name: "React", icon: FaReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "SQLite", icon: SiSqlite },
      { name: "MySQL", icon: SiMysql },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Linux", icon: FaLinux },
    ],
  },
];