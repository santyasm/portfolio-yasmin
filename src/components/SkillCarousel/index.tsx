import { SkillCard } from "./SkillCard";
import { skills } from "./utils";
import "../../animations/animation.css";

export const SkillsCarousel = () => {
  return (
    <div className="overflow-hidden w-full h-[140px] flex items-center">
      <div className="animate flex">
        <div className="flex">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>

        <div className="flex" aria-hidden="true">
          {skills.map((skill, index) => (
            <SkillCard key={`dup-${index}`} {...skill} aria-hidden="true" />
          ))}
        </div>
      </div>
    </div>
  );
};
