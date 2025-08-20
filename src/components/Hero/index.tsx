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
    <div className="flex items-center justify-between w-full mx-[9%] relative">
      <div>
        <h1 className="text-white font-bold text-[80px] animate-fade-right animate-duration-500 animate-delay-300 animate-ease-in">
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
            className="bg-gradient-to-r from-darksky via-slightly to-purple-500 bg-clip-text text-transparent text-5xl font-semibold"
          >
            {text}
          </motion.span>
        </div>

        <p className="text-whitetext text-[18px] leading-8 mt-6 w-[45%]">
          Desenvolvedora front-end com experiência em React, React Native e
          TypeScript, atuando em TI desde 2022. Iniciei como Analista de Suporte
          Técnico, destacando-me pela resolução de problemas complexos e
          aprendizado rápido, o que abriu
        </p>

        <button className="bg-gradient-to-tr cursor-pointer from-darksky via-[#848AD4] to-slightly rounded-full py-2 px-6 text-white font-semibold text-[18px] mt-10 animate-fade-right hover:animate-shake animate-duration-500 animate-delay-300 animate-ease-in">
          Contato
        </button>
      </div>

      <img
        src="/yasmin.png"
        className="w-[620px] absolute bottom-0 right-0 animate-fade-up animate-duration-500 animate-delay-300 animate-ease-in"
        alt=""
      />
    </div>
  );
};
