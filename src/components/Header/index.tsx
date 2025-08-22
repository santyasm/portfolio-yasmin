import { motion } from "framer-motion";

export const Header = () => {
  return (
    <motion.div
      className="font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <ul className="mt-6 md:mt-0 flex items-center gap-[8%] justify-center text-gray-100 md:text-[18px] text-[14px]">
        <a
          href="#"
          className="mt-4 hover:text-darksky transition-all duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 hover:after:w-full after:h-[2px] after:bg-darksky after:transition-all after:duration-300 font-inte"
        >
          HOME
        </a>
        <a
          href="#about"
          className="mt-4 hover:text-darksky transition-all duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 hover:after:w-full after:h-[2px] after:bg-darksky after:transition-all after:duration-300 font-inter"
        >
          SOBRE
        </a>

        <img
          src="/rectangle.png"
          alt=""
          className="hidden lg:flex sm:w-[90px] md:w-[196px] lg:w-[196px] object-cover"
        />

        <a
          href="#"
          className="mt-4 hover:text-darksky transition-all duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 hover:after:w-full after:h-[2px] after:bg-darksky after:transition-all after:duration-300 font-inter"
        >
          PROJETOS
        </a>
        <a
          href="#"
          className="mt-4 hover:text-darksky transition-all duration-200 relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 hover:after:w-full after:h-[2px] after:bg-darksky after:transition-all after:duration-300 font-inter"
        >
          CONTATO
        </a>
      </ul>
    </motion.div>
  );
};
