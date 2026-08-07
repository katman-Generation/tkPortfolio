import portfolio from "../assets/intro/portfolio.png";
import zoey from "../assets/intro/zoey.png";
import rentspace from "../assets/intro/Rentspace.png";
import katmanhub from "../assets/intro/KatmanHub.png";
import f10 from "../assets/intro/f10.png";
import zimbuzz from "../assets/intro/ZimBuzz.png";
import history from "../assets/intro/Egallery.png";
import diesel from "../assets/intro/Diesel.png";


export const projects = [
  {
    id: 1,
    title: "Personal Portfolio",
    category: "Interactive Developer Portfolio",
    year: "2026",
    image: portfolio,
    color: "#06B6D4",

    overview:
      "A cinematic portfolio that tells my story through immersive interactions instead of a traditional developer website.",

    challenge:
      "I wanted a portfolio that would be remembered, not just another page listing projects and technologies.",

    solution:
      "Built a highly interactive experience featuring a football-inspired hero, 3D storybook, animated sections, and smooth scrolling effects.",

    technologies: [
      {
        name: "React",
        contribution: "Built the application using reusable components and modern React architecture."
      },
      {
        name: "GSAP",
        contribution: "Created cinematic scroll animations, pinned sections and interactive transitions."
      },
      {
        name: "Framer Motion",
        contribution: "Implemented smooth animations throughout the user experience."
      },
      {
        name: "React Three Fiber",
        contribution: "Built the interactive 3D book and 3D text experiences."
      },
      {
        name: "Tailwind CSS",
        contribution: "Designed a fully responsive interface."
      }
    ],

    features: [
      "3D Story Book",
      "Animated Hero",
      "Horizontal Scroll",
      "Responsive Design",
      "Interactive UI"
    ],

    github: "",
    live: "https://tk-portfolio-blush.vercel.app/"
  },

  {
    id: 2,
    title: "Zoey China Agent",
    category: "Full Stack Web Application",
    year: "2025",
    image: zoey,
    color: "#3B82F6",

    overview:
      "A sourcing platform that simplifies quotation requests between customers and suppliers importing products from China.",

    challenge:
      "Managing quotations through WhatsApp and spreadsheets made the process slow and difficult to track.",

    solution:
      "Built a centralized quotation management system with secure authentication and an admin dashboard.",

    technologies: [
      {
        name: "Django",
        contribution: "Developed the backend, authentication, business logic and admin panel."
      },
      {
        name: "HTML",
        contribution: "Built the application interface using Django templates."
      },
      {
        name: "Tailwind CSS",
        contribution: "Designed a clean and responsive user interface."
      },
      {
        name: "PostgreSQL",
        contribution: "Managed quotation, supplier and customer data."
      }
    ],

    features: [
      "Quotation Requests",
      "Supplier Management",
      "Authentication",
      "Admin Dashboard"
    ],

    github: "",
    live: "https://zoeychinaagent.onrender.com/"
  },

  {
    id: 3,
    title: "RentSpace",
    category: "Property Rental Platform",
    year: "2026",
    image: rentspace,
    color: "#F59E0B",

    overview:
      "A modern rental platform that connects property owners with tenants through an intuitive web application.",

    challenge:
      "Finding rental properties often involves scattered listings and outdated information.",

    solution:
      "Developed a full-stack platform where users can browse, upload and manage rental listings.",

    technologies: [
      {
        name: "Django REST Framework",
        contribution: "Developed the backend APIs and authentication."
      },
      {
        name: "React",
        contribution: "Built the interactive frontend."
      },
      {
        name: "PostgreSQL",
        contribution: "Stored users and property information."
      },
      {
        name: "Tailwind CSS",
        contribution: "Created the responsive interface."
      }
    ],

    features: [
      "Property Listings",
      "Image Uploads",
      "Authentication",
      "REST API"
    ],

    github: "",
    live: "https://www.zimrentspace.com/"
  },

  {
    id: 4,
    title: "KatmanHub",
    category: "Business Website",
    year: "2026",
    image: katmanhub,
    color: "#8B5CF6",

    overview:
      "The official website for KatmanHub, showcasing the vision, services and future projects behind the brand.",

    challenge:
      "Create a modern online presence that reflects the company's ambition and creativity.",

    solution:
      "Built a responsive full-stack website with a Django backend and React frontend.",

    technologies: [
      {
        name: "React",
        contribution: "Developed the frontend interface."
      },
      {
        name: "Django",
        contribution: "Built backend services and content management."
      },
      {
        name: "Tailwind CSS",
        contribution: "Designed the responsive layout."
      }
    ],

    features: [
      "Responsive Design",
      "Modern UI",
      "Company Information",
      "Dynamic Content"
    ],

    github: "",
    live: "https://katman-frontend-iota.vercel.app/"
  },

  {
    id: 5,
    title: "F10 Learning Platform",
    category: "Educational Platform",
    year: "2026",
    image: f10,
    color: "#10B981",

    overview:
      "An upcoming learning platform designed to make educational content accessible from any device.",

    challenge:
      "Students need a simple platform to access learning materials in one place.",

    solution:
      "Building a responsive web platform focused on delivering structured educational content.",

    technologies: [
      {
        name: "Django",
        contribution: "Developing backend functionality and authentication."
      },
      {
        name: "HTML",
        contribution: "Building the user interface with Django templates."
      },
      {
        name: "CSS",
        contribution: "Creating a responsive design."
      }
    ],

    features: [
      "Course Pages",
      "Authentication",
      "Responsive Design",
      "Learning Resources"
    ],

    github: "",
    live: ""
  },

  {
    id: 6,
    title: "ZimBuzz",
    category: "Business Discovery Platform",
    year: "In Progress",
    image: zimbuzz,
    color: "#EC4899",

    overview:
      "A community platform where businesses can showcase their services and customers can recommend work well done.",

    challenge:
      "Many small businesses struggle to gain visibility and trusted recommendations online.",

    solution:
      "Developing a modern platform that helps businesses build their reputation through community engagement.",

    technologies: [
      {
        name: "React",
        contribution: "Building the frontend."
      },
      {
        name: "Django REST Framework",
        contribution: "Developing backend APIs."
      }
    ],

    features: [
      "Business Profiles",
      "Reviews",
      "Recommendations",
      "Search"
    ],

    github: "",
    live: ""
  },

  {
    id: 7,
    title: "Your History",
    category: "Digital Storytelling Platform",
    year: "2024",
    image: history,
    color: "#6366F1",

    overview:
      "A web application built around one simple belief: we all deserve to be remembered.",

    challenge:
      "Personal stories and family history are often lost across generations.",

    solution:
      "Built a platform where people can preserve and share their stories for future generations.",

    technologies: [
      {
        name: "Django",
        contribution: "Built the backend and application logic."
      },
      {
        name: "HTML",
        contribution: "Developed the user interface."
      },
      {
        name: "CSS",
        contribution: "Designed the application layout."
      }
    ],

    features: [
      "Personal Stories",
      "Timeline",
      "Profiles",
      "Responsive Design"
    ],

    github: "",
    live: ""
  },

  {
    id: 8,
    title: "Diesel Calculator",
    category: "Business Utility",
    year: "2023",
    image: diesel,
    color: "#F97316",

    overview:
      "A browser-based application that helps truck drivers estimate diesel consumption based on trailer type, load status and distance travelled.",

    challenge:
      "Manual fuel calculations were slow and often inaccurate during trip planning.",

    solution:
      "Built a lightweight calculator that instantly estimates fuel usage using predefined consumption rates.",

    technologies: [
      {
        name: "HTML",
        contribution: "Built the application interface."
      },
      {
        name: "CSS",
        contribution: "Designed the responsive layout."
      },
      {
        name: "JavaScript",
        contribution: "Implemented the calculation logic."
      }
    ],

    features: [
      "Fuel Estimates",
      "Trailer Selection",
      "Distance Calculator",
      "Instant Results"
    ],

    github: "https://github.com/katman-generation/CALCU_",
    live: "https://katman-generation.github.io/CALCU_/"
  }
];