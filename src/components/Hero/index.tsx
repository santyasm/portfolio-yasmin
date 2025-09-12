import { motion } from "framer-motion";
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
    <section className="flex flex-col lg:px-[9%] px-[6%]  min-h-screen bg-[#21253158] gap-10 py-4 md:pt-10 pt-6">
      <Header />

      <div className="flex flex-col md:flex-row items-center justify-center gap-20 flex-1">
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start">
          <h1 className="text-whitetext font-black font-mona text-[80px] md:text-[80px] lg:text-[130px] leading-[0.9em] animate-fade-right animate-duration-500 animate-delay-300 animate-ease-in">
            YASMIN SANTANA
          </h1>

          {/* Imagem (mobile) */}
          <img
            src="/yasmin.png"
            className="block md:hidden w-[50vw] h-auto my-6 rounded-full animate-fade-up animate-duration-500 animate-delay-300 animate-ease-in"
            alt="Yasmin Santana"
            data-blobity-tooltip="Olá!"
            data-blobity-invert="false"
          />

          <motion.div
            className="mx-auto md:mx-0"
            variants={textAnimation}
            initial="initial"
            animate="animate"
          >
            <TypingWords />
          </motion.div>

          <p className="text-whitetext text-[12px] max-w-[70%] md:text-[16px] leading-5 md:leading-8 mt-6 md:mt-1 lg:w-[80%] font-inter w-[98%] animate-fade-left animate-duration-500 animate-delay-300 animate-ease-in font-extralight">
            Full Stack Developer 👩🏻‍💻
            <br /> Apaixonada por criar produtos digitais de qualidade. 🚀
          </p>
        </div>

        {/* Imagem (desktop) */}
        <img
          src="/yasmin.png"
          className="hidden md:block w-[35vw] lg:w-[22vw] lg:min-w-[400px] h-auto rounded-full animate-fade-up animate-duration-500 animate-delay-300 animate-ease-in"
          alt="Yasmin Santana"
          data-blobity-tooltip="Olá!"
          data-blobity-invert="false"
        />
      </div>
    </section>
  );
};
