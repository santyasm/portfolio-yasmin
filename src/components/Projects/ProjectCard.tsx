import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
import type { ProjectCardProps } from "./types";
import AnimatedTitle from "../../animations/AnimationTitle";
import AnimatedBody from "../../animations/AnimatedBody";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  banner,
}: ProjectCardProps) => {
  return (
    <motion.div
      style={
        {
          backgroundColor: "#21253158",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          position: "relative",
        } as React.CSSProperties
      }
      className={`relative z-10  w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 h-[550px] md:h-[650px] lg:h-[510px]`}
      initial="initial"
      animate="animate"
    >
      <div
        className={`absolute bottom-0 ${
          id % 2 === 0 ? "right-0" : "left-0"
        } w-[72%] md:w-[50%] lg:max-w-[49%]`}
      >
        <img
          src={banner}
          alt=""
          className="w-full h-auto object-contain rounded-3xl"
        />
      </div>

      <div
        className={`absolute top-0 text-[#0E1016] ${
          id % 2 === 0
            ? "left-0 ml-4 sm:ml-8 lg:ml-14"
            : "right-0 mr-4 sm:mr-8 lg:mr-14"
        } mt-4 flex items-center justify-center gap-3 sm:gap-4 lg:mt-10`}
      >
        <a
          href={github}
          target="_blank"
          className="rounded-full"
          aria-label="Open GitHub Repository"
        >
          <FaGithub
            className="text-black bg-bal text-[28px] w-[38px] h-auto bg-white flex item-center justify-center rounded-full p-1.5 md:p-3  md:w-[48px] lg:w-[56px]"
            data-blobity
            data-blobity-radius="32"
            data-blobity-magnetic="true"
          />
        </a>
        <a href={demo} target="_blank" aria-label="Open Live Demo">
          <IoIosLink
            className="text-black bg-bal text-[28px] w-[38px] h-auto bg-white flex item-center justify-center rounded-full p-1.5 md:p-3 md:w-[48px] lg:w-[56px]"
            data-blobity
            data-blobity-radius="32"
            data-blobity-magnetic="true"
          />
        </a>
      </div>

      <div
        className={`mt-4 absolute text-white md:max-w-[45%] ${
          !(id % 2 === 0)
            ? "right-0 top-16 mr-0 ml-10 md:right-0 md:top-28 lg:right-0 lg:top-48 lg:mr-4"
            : "left-6 top-16 ml-0 sm:left-10 sm:top-24 md:mr-12 md:top-28 lg:top-44 lg:ml-4"
        } mb-6 sm:mb-10 md:mb-16 lg:mb-14`}
      >
        <AnimatedTitle
          text={name}
          className={
            "max-w-[85%] text-[28px] leading-none text-white sm:max-w-[90%] sm:text-[40px] md:text-[44px] lg:max-w-[450px] lg:text-[48px]"
          }
          wordSpace={"mr-[0.25em]"}
          charSpace={"-mr-[0.01em]"}
        />
        <AnimatedBody
          text={description}
          className={
            "mt-3 w-[85%] max-w-[300px] font-semibold text-[#95979D] sm:mt-4 text-[16px]"
          }
        />
        <div className="mt-6 flex flex-wrap gap-2 sm:mt-9 sm:gap-4 max-w-[92%]">
          {technologies.map((tech, id) => (
            <AnimatedTitle
              text={tech}
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
              key={id}
              className={
                "text-[12px] font-bold uppercase sm:text-[14px] md:text-[16px] lg:text-[18px]"
              }
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
