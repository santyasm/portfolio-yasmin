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
        <h1 className="text-white font-extrabold text-[70px] md:text-[70px] leading-[0.9em] lg:text-[100px] animate-fade-right animate-duration-500 animate-delay-300 animate-ease-in">
          Yasmin Santana
        </h1>

        <div className="min-h-[40px] md:min-h-[62px] mt-6">
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
            className="bg-gradient-to-r from-darksky via-slightly to-purple-500 bg-clip-text text-transparent text-[1.8em] md:text-6xl lg:7xl font-bold"
          >
            {text}
          </motion.span>
        </div>

        <p className="text-whitetext md:text-[18px] leading-8 mt-6 lg:w-[48%] font-inter w-[98%] animate-fade-left animate-duration-500 animate-delay-300 animate-ease-in">
          Oi, eu sou Yasmin ✨ <br /> Sou desenvolvedora front-end/mobile e
          adoro transformar ideias em experiências digitais que realmente façam
          sentido para as pessoas. Minha jornada em TI começou em 2022, atuando
          como suporte técnico, onde descobri minha paixão por resolver
          problemas e entender profundamente como os sistemas funcionam. <br />{" "}
          <br /> Em 2023, depois de muito estudo, projetos próprios e dedicação
          constante, consegui minha transição para o desenvolvimento de
          software. Hoje trabalho com React, React Native e TypeScript,
          participando de todo o ciclo de desenvolvimento, da definição de
          funcionalidades à entrega final. O que me motiva todos os dias é
          aprender, criar soluções eficientes e construir produtos digitais que
          impactem positivamente quem os utiliza. 🚀
        </p>

        <button className="mb-10 bg-gradient-to-tr cursor-pointer from-darksky via-[#848AD4] to-slightly rounded-full py-2 px-6 text-white font-semibold text-[18px] mt-10 animate-fade-right animate-duration-500 animate-delay-300 animate-ease-in">
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
