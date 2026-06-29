import { useTranslation } from "react-i18next";
import AnimatedBody from "../../animations/AnimatedBody";
import AnimatedWords from "../../animations/AnimationWords";
import { SkillsCarousel } from "../SkillCarousel";

export const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center justify-center relative">
      <section
        className="flex flex-col items-center min-h-screen h-auto py-10 justify-center"
        id="about"
      >
        {/* <img
          src="/grid.png"
          alt=""
          className="w-[70vw] md:w-auto absolute top-0 right-0"
        /> */}

        <AnimatedWords
          title={t("about.title")}
          style="font-code text-[60px] md:text-[80px] font-black"
        />

        <AnimatedBody
          className="text-whitetext text-md md:text-[22px] leading-11 mt-6 lg:w-[48%] font-light font-code w-[90%] whitespace-pre-line  text-center "
          text={t("about.body")}
        />
      </section>

      <div className="flex w-full overflow-hidden justify-center items-center mb-6">
        <SkillsCarousel />
      </div>
    </div>
  );
};
