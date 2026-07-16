import { projects } from "../../data/project";
import ProjectCard from "../../components/projects/ProjectCard";


const Projects = () => {

    return (

    <section
    id="projects"
    className="
    bg-[#0F172A]
    px-6
    py-24
    "
    >


    <div className="
    mx-auto
    max-w-7xl
    ">


    <div className="
    mb-16
    text-center
    ">


    <p className="
    uppercase
    tracking-[0.3em]
    text-blue-400
    ">

    Projects

    </p>


    <h2 className="
    mt-4
    text-5xl
    font-bold
    text-white
    ">

    Things I Have Built

    </h2>


    </div>



    <div className="
    grid
    gap-8
    md:grid-cols-2
    "

    >


    {
    projects.map((project)=>(

    <ProjectCard

    key={project.title}

    project={project}

    />

    ))

    }


    </div>


    </div>


    </section>

    )

    }


export default Projects;