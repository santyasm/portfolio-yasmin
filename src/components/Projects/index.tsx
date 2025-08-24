import AnimatedWords from "../../animations/AnimationWords";
import ProjectCard from "./ProjectCard";
import { projectList, type ProjectCardProps } from "./types";

export const Projects = () => {
  return (
    <section
      id="work"
      className="flex flex-col items-center min-h-screen h-auto py-10 justify-center relative"
    >
      <AnimatedWords
        title={"Projetos"}
        style="bg-gradient-to-r from-darksky via-slightly to-purple-500 bg-clip-text text-transparent text-[50px] md:text-6xl font-bold mb-10"
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
