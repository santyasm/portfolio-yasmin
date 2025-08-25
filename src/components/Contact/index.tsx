import { motion } from "framer-motion";
import "../../animations/animation.css";
import AnimatedWords2 from "../../animations/AnimatedWord2";
import AnimatedTitle from "../../animations/AnimationTitle";

export const Contact = () => {
  return (
    <motion.section
      className="relative z-10 flex h-[95vh] w-full items-center justify-center overflow-hidden bg-cover bg-center py-16 md:h-[80vh] md:py-20 lg:h-[90vh] lg:pt-0 lg:pb-28 3xl:h-[75vh]"
      id="contact"
      initial="initial"
      animate="animate"
    >
      <div className="mx-auto flex flex-col w-[90%] items-center justify-center pt-10 md:pt-0">
        <AnimatedWords2
          title="ME MANDE UMA MENSAGEM"
          style={
            "flex flex-wrap justify-center items-center font-extrabold uppercase leading-[0.9] text-[#e4ded7] text-[17vw] md:flex-row md:justify-center md:items-center md:text-[80px] lg:text-[80px] xl:text-[100px] tracking-tighter"
          }
        />

        <img
          src="/emoji-me.png"
          alt=""
          className="heartbeat left-32 w-[40%] md:w-[160px] lg:-bottom-16 lg:left-[42%] lg:w-[230px] mt-[-38px] pulseSoft 1.5s ease-in-out infinite"
        />

        <div className="flex gap-6 text-[14px] font-bold text-[#e4ded7] sm:gap-10 sm:text-[16px] md:gap-10 md:text-[16px] lg:gap-20 lg:text-[28px]">
          <a
            href="mailto:yasantpro@gmail.com?subject=Vamos%20trabalhar%20juntos!&body=Olá,%20Yasmin!"
            target="_blank"
            aria-label="Me mande um email"
          >
            <AnimatedTitle
              text={"EMAIL"}
              className={
                "text-[18px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </a>
          <a
            href="https://github.com/santyasm/"
            target="_blank"
            aria-label="Ver Perfil do Github"
          >
            <AnimatedTitle
              text={"GITHUB"}
              className={
                "text-[18px] font-bold text-[#e4ded7] md:text-[16px] lg:text-[28px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/yasmin-santana-santos/"
            target="_blank"
            aria-label="Ver Perfil do LinkedIn"
          >
            <AnimatedTitle
              text={"LINKEDIN"}
              className={
                "text-[14px] font-bold text-[#e4ded7] sm:text-[16px] md:text-[16px] lg:text-[28px]"
              }
              wordSpace={"mr-[0.25em]"}
              charSpace={"mr-[0.01em]"}
            />
          </a>
        </div>
      </div>
    </motion.section>
  );
};
