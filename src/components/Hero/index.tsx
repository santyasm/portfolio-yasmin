import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypingWords from "../../animations/TypingWords";
import { Header } from "../Header";

const textAnimation = {
  initial: { opacity: 0, y: "1em" },
  animate: {
    opacity: 1,
    y: "0em",
    transition: {
      delay: 0.9,
      duration: 1,
      ease: [0.2, 0.65, 0.3, 0.9] as never,
    },
  },
};

export const Hero = () => {
  return (
    <section className="flex flex-col lg:px-[7%] px-[6%]  min-h-screen bg-[#21253158] gap-10 py-4 md:pt-10 pt-6">
      <Header />

      <div className="flex flex-col md:flex-row items-center justify-center gap-20 flex-1">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start">
          <h1 className="text-whitetext font-black font-code text-[24px] md:text-[40px] lg:text-[50px] lg:leading-[0.93em] md:leading-[0.1em] leading-[0.95em] animate-fade-right animate-duration-500 animate-delay-300 animate-ease-in">
            Hi, I'm Yasmin Santana
          </h1>

          {/* Imagem (mobile) */}
          <img
            src="/yasmin.png"
            className="block md:hidden w-[45vw] h-auto my-6 rounded-full animate-fade-up animate-duration-500 animate-delay-300 animate-ease-in"
            alt="Yasmin Santana"
            data-blobity-tooltip="Hi!"
            data-blobity-invert="false"
          />

          <motion.div
            className="mx-auto md:mx-0 mt-4"
            variants={textAnimation}
            initial="initial"
            animate="animate"
          >
            <TypingWords />
          </motion.div>

          <div className="flex gap-4 mt-6 md:mt-3 animate-fade-left animate-duration-500 animate-delay-300 animate-ease-in">
            <a
              href="https://github.com/santyasm"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              data-blobity-magnetic="false"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/yasmin-santana-santos"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              data-blobity-magnetic="false"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>

        {/* Imagem (desktop) */}
        <img
          src="/yasmin.png"
          className="hidden md:block w-[35vw] lg:w-[20vw] lg:min-w-[380px] h-auto rounded-full animate-fade-up animate-duration-500 animate-delay-300 animate-ease-in"
          alt="Yasmin Santana"
          data-blobity-tooltip="Hi!"
          data-blobity-invert="false"
        />
      </div>
    </section>
  );
};
