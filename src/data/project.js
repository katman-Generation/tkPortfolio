export const projects = [
  {
    id: 1,

    title: "Zoey China Agent",

    category: "Full Stack Web Application",

    year: "2025",

    image: "/projects/zoey.png",

    color: "#3B82F6",

    overview:
      "Zoey China Agent is a sourcing platform that streamlines the quotation process for customers importing products from China. It centralizes communication, quotation requests, and supplier management into one easy-to-use application.",

    challenge:
      "Businesses relied on WhatsApp conversations, emails and spreadsheets to request quotations. This resulted in poor organization, duplicated information and slow response times.",

    solution:
      "I designed and developed a complete quotation management system with secure authentication, structured workflows and an intuitive dashboard that simplifies the sourcing process.",

    technologies: [
      {
        name: "Django",
        contribution:
          "Built the complete backend, authentication system, models, business logic and admin dashboard."
      },
      {
        name: "HTMX",
        contribution:
          "Created dynamic interfaces with partial page updates without relying on a heavy frontend framework."
      },
      {
        name: "PostgreSQL",
        contribution:
          "Designed the relational database and optimized quotation and customer management."
      },
      {
        name: "Tailwind CSS",
        contribution:
          "Designed a responsive and modern interface with reusable UI components."
      }
    ],

    features: [
      "Customer quotation requests",
      "Supplier management",
      "Authentication",
      "Admin dashboard",
      "Responsive design"
    ],

    github: "https://github.com/yourusername/zoey-china-agent",

    live: "https://your-demo-link.com"
  },

  {
    id: 2,

    title: "Diesel Calculator",

    category: "Business Automation Tool",

    year: "2024",

    image: "/projects/diesel.png",

    color: "#F59E0B",

    overview:
      "A business tool that automates diesel consumption calculations, helping transport businesses estimate fuel costs quickly and accurately.",

    challenge:
      "Manual fuel calculations consumed time and often produced inaccurate estimates.",

    solution:
      "Developed an automated calculator that instantly computes diesel usage and operational costs from user input.",

    technologies: [
      {
        name: "Python",
        contribution:
          "Implemented all mathematical calculations and fuel consumption formulas."
      },
      {
        name: "Django",
        contribution:
          "Built the application structure, forms and backend logic."
      },
      {
        name: "JavaScript",
        contribution:
          "Provided instant calculations and improved user interaction."
      }
    ],

    features: [
      "Fuel calculations",
      "Cost estimation",
      "Instant results",
      "Business reports"
    ],

    github: "",

    live: ""
  },

  {
    id: 3,

    title: "E-Gallery",

    category: "Web Application",

    year: "2023",

    image: "/projects/gallery.png",

    color: "#8B5CF6",

    overview:
      "An online platform where artists can upload, organize and showcase their artwork professionally.",

    challenge:
      "Many artists lacked an affordable platform to present their work online.",

    solution:
      "Built a gallery management system with image uploads, categories and a clean browsing experience.",

    technologies: [
      {
        name: "Django",
        contribution:
          "Managed users, artwork uploads and backend functionality."
      },
      {
        name: "SQLite",
        contribution:
          "Stored artwork and user information."
      },
      {
        name: "HTML & CSS",
        contribution:
          "Created the responsive gallery interface."
      }
    ],

    features: [
      "Artwork uploads",
      "Categories",
      "Responsive layout",
      "Artist profiles"
    ],

    github: "",

    live: ""
  },

  {
    id: 4,

    title: "F10 Education Platform",

    category: "Educational Platform",

    year: "2025",

    image: "/projects/f10.png",

    color: "#10B981",

    overview:
      "A modern learning platform designed to deliver educational videos and structured learning materials.",

    challenge:
      "Students needed a centralized platform to access educational resources from anywhere.",

    solution:
      "Built a scalable platform with a React frontend and Django REST API backend.",

    technologies: [
      {
        name: "React",
        contribution:
          "Built reusable components and managed the frontend interface."
      },
      {
        name: "Django REST Framework",
        contribution:
          "Developed APIs connecting the frontend with backend services."
      },
      {
        name: "Django",
        contribution:
          "Handled authentication and application logic."
      }
    ],

    features: [
      "Video streaming",
      "Course organization",
      "Authentication",
      "REST API"
    ],

    github: "",

    live: ""
  },

  {
    id: 5,

    title: "Personal Portfolio",

    category: "Interactive Portfolio",

    year: "2026",

    image: "/projects/portfolio.png",

    color: "#06B6D4",

    overview:
      "A cinematic developer portfolio that tells my story through immersive interactions instead of traditional sections.",

    challenge:
      "Most developer portfolios look alike and focus on listing technologies rather than creating an engaging experience.",

    solution:
      "Designed and built a highly interactive portfolio featuring animated transitions, a football-inspired hero section, a 3D storybook About section, and horizontally scrolling project case studies.",

    technologies: [
      {
        name: "React",
        contribution:
          "Built the application using reusable components and modern React architecture."
      },
      {
        name: "GSAP",
        contribution:
          "Implemented cinematic scroll animations, pinned sections and horizontal scrolling."
      },
      {
        name: "Framer Motion",
        contribution:
          "Created smooth entrance animations and interactive UI transitions."
      },
      {
        name: "Tailwind CSS",
        contribution:
          "Designed a fully responsive modern interface."
      }
    ],

    features: [
      "3D book interaction",
      "Animated hero",
      "Horizontal scrolling projects",
      "Responsive design",
      "Modern UI"
    ],

    github: "",

    live: ""
  }
];