import { useTranslation } from "react-i18next";
import AnimatedBody from "../../animations/AnimatedBody";
import AnimatedWords from "../../animations/AnimationWords";
// import { SkillsCarousel } from "../SkillCarousel";
import { FilmsCarousel } from "../FilmsCarousel";

export const About = () => {
  const { t } = useTranslation();
  const experience = t("about.experience", { returnObjects: true }) as { role: string; company: string; period: string; location: string; description: string }[];
  const education = t("about.education", { returnObjects: true }) as { degree: string; institution: string; period: string }[];
  const stacks = t("about.stacks", { returnObjects: true }) as string[];

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
          className="text-whitetext text-md md:text-[20px] leading-8 mt-6 lg:w-[58%] font-light font-code w-[90%] whitespace-pre-line text-center"
          text={t("about.body")}
        />

        <div className="mt-14 grid w-[90%] max-w-[1100px] grid-cols-1 gap-12 font-code text-whitetext lg:grid-cols-[1.3fr_0.7fr] lg:gap-16">
          {/* Experience timeline */}
          <div>
            <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[0.25em] text-[#6b6560]">
              {t("about.experienceTitle")}
            </h3>

            <div className="relative flex flex-col before:absolute before:top-[7px] before:bottom-0 before:left-[5px] before:w-px before:bg-whitetext/10">
              {experience.map((item, i) => (
                <div key={i} className="relative pl-7 pb-7 last:pb-0">
                  <span className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border border-whitetext/20 bg-[#0e1016]" />
                  <div className="flex items-baseline justify-between gap-4">
                    <p className="text-[13px] font-semibold text-[#c7c0b8] md:text-[14px]">{item.role}</p>
                    <p className="shrink-0 text-[11px] font-light text-[#524e4b]">{item.period} · {item.location}</p>
                  </div>
                  <p className="mt-0.5 text-[12px] font-light text-[#6b6560]">{item.company}</p>
                  <p className="mt-1.5 text-[12px] font-light leading-6 text-[#8a847e] md:text-[13px]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Education + Stacks */}
          <div className="flex flex-col gap-10">
            <div>
              <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[0.25em] text-[#6b6560]">
                {t("about.educationTitle")}
              </h3>

              <div className="relative flex flex-col gap-0 before:absolute before:top-[7px] before:bottom-0 before:left-[5px] before:w-px before:bg-whitetext/10">
                {education.map((item, i) => (
                  <div key={i} className="relative pl-7">
                    <span className="absolute left-0 top-[7px] h-[11px] w-[11px] rounded-full border border-whitetext/20 bg-[#0e1016]" />
                    <p className="text-[13px] font-light leading-6 text-[#8a847e] md:text-[14px]">
                      {item.degree}
                    </p>
                    <p className="mt-0.5 text-[12px] font-light text-[#6b6560]">
                      {item.institution}
                    </p>
                    <p className="mt-0.5 text-[11px] font-light tracking-wide text-[#524e4b]">
                      {item.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="mb-5 text-[11px] font-bold uppercase tracking-[0.25em] text-[#6b6560]">
                {t("about.stackTitle")}
              </h3>

              <div className="flex flex-wrap gap-x-4 gap-y-2.5">
                {stacks.map((stack) => (
                  <span key={stack} className="text-[12px] font-light text-[#8a847e] md:text-[13px]">
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="flex w-full overflow-hidden justify-center items-center mb-6">
        <SkillsCarousel />
      </div> */}
      <FilmsCarousel />
    </div>
  );
};
