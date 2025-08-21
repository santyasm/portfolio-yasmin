import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const taglines = ["Frontend Developer", "Mobile Developer"];

export const Hero = () => {
  // Tagline Typewriter Effect
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = taglines[index % taglines.length];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? current.substring(0, prev.length - 1)
          : current.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % taglines.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);
  return (
    <div className="flex lg:flex-row flex-col w-full px-[9%] items-stretch min-h-screen h-auto justify-center pt-24">
      <div className="text-center md:text-start md:mt-[22%] lg:mt-0 flex-1">
        <h1 className="text-white font-bold text-4xl md:text-[70px] lg:text-[80px] animate-fade-right animate-duration-500 animate-delay-300 animate-ease-in">
          Yasmin Santana
        </h1>

        <div className="h-[50px]">
          <motion.span
            initial={{ textShadow: "0 0 5px rgba(106, 56, 194, 0.4)" }}
            animate={{
              textShadow: [
                "0 0 5px rgba(106, 56, 194, 0.4)",
                "0 0 10px rgba(106, 56, 194, 0.6)",
                "0 0 15px rgba(106, 56, 194, 0.8)",
                "0 0 10px rgba(106, 56, 194, 0.6)",
                "0 0 5px rgba(106, 56, 194, 0.4)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-darksky via-slightly to-purple-500 bg-clip-text text-transparent text-2xl md:text-5xl font-semibold"
          >
            {text}
          </motion.span>
        </div>

        <p className="text-whitetext md:text-[18px] leading-7 mt-6 lg:w-[45%] font-inter w-[96%]">
          Desenvolvedora front-end com experiência em React, React Native e
          TypeScript, atuando em TI desde 2022. Iniciei como Analista de Suporte
          Técnico, destacando-me pela resolução de problemas complexos e
          aprendizado rápido, o que abriu
        </p>

        <button className="bg-gradient-to-tr cursor-pointer from-darksky via-[#848AD4] to-slightly rounded-full py-2 px-6 text-white font-semibold text-[18px] mt-10 animate-fade-right animate-duration-500 animate-delay-300 animate-ease-in">
          Contato
        </button>
      </div>

      <img
        src="/yasmin.png"
        className="w-[70vw] mx-auto md:mr-0 md:w-[60vw] lg:w-[40vw] lg:absolute lg:bottom-0 lg:right-10 h-auto animate-fade-up animate-duration-500 animate-delay-300 animate-ease-in"
        alt=""
        data-blobity-tooltip="Hello Guys"
        data-blobity-invert="false"
      />
    </div>
  );
};
