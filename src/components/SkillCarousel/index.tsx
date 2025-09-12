import { SkillCard, type SkillProps } from "./SkillCard";
import { skills } from "./utils";
import "../../animations/animation.css";

export const SkillsCarousel = () => {
  return (
    <div className="relative overflow-hidden w-full h-[200px] flex items-center justify-center">
      <div className="animate absolute flex justify-center items-center  bottom-0">
        <div className="mx-auto flex w-[50%] justify-around gap-2">
          {skills.map((skill: SkillProps, index) => (
            <SkillCard
              key={index}
              name={skill.name}
              link={skill.link}
              icon={skill.icon}
            />
          ))}
        </div>

        <div className="mx-auto flex w-[50%] justify-around gap-2">
          {skills.map((skill: SkillProps, index) => (
            <SkillCard
              key={`dup-${index}`}
              name={skill.name}
              link={skill.link}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
