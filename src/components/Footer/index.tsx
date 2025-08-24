import { motion } from "framer-motion";
import AnimatedBody from "../../animations/AnimatedBody";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <motion.section
      className="relative z-10 h-[12vh] w-full items-center justify-center border-t-[2px] border-[#e4ded7]/30 pt-6 font-bold uppercase sm:h-[15vh] sm:pt-8 md:h-[20vh] md:border-t-[3px] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-col items-center justify-center gap-3 text-center text-[10px] text-[#e4ded7] sm:flex-row sm:justify-between sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <AnimatedBody
          text={`© ${year} | All rights reserved.`}
          className={"m-0 p-0"}
        />

        <div className="flex items-center gap-1.5 text-[#e4ded7] sm:gap-2">
          <span className="text-[10px] font-bold sm:text-[14px] md:text-[16px]">
            Feito com
          </span>
          <motion.span
            className="text-[12px] sm:text-[16px] md:text-[18px]"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💜
          </motion.span>
          <span className="text-[10px] font-bold sm:text-[14px] md:text-[16px]">
            por Yasmin Santana
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
