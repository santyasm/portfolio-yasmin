import AnimatedBody from "../../animations/AnimatedBody";
import AnimatedWords from "../../animations/AnimationWords";
import ProjectCard from "./ProjectCard";
import { projectList, type ProjectCardProps } from "./types";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center min-h-screen h-auto py-10 justify-center relative"
    >
      <AnimatedWords
        title={"PROJETOS"}
        style="text-[80px] md:text-[90px] font-black font-mona ml-2.5"
      />

      <AnimatedBody
        text="Uma coleção de projetos nos quais trabalhei"
        className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px] text-gray-400 mb-10 mt-2"
      />
      <div className="grid w-[90%] grid-cols-1 grid-rows-2 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {projectList.map((project: ProjectCardProps) => (
          <ProjectCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            banner={project.banner}
          />
        ))}
      </div>
    </section>
  );
};
