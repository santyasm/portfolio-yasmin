import AnimatedBody from "../../animations/AnimatedBody";
import AnimatedWords from "../../animations/AnimationWords";
import { SkillsCarousel } from "../SkillCarousel";

export const About = () => {
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
          title="SOBRE MIM"
          style="font-code text-[60px] md:text-[80px] font-black"
        />

        <AnimatedBody
          className="text-whitetext text-md md:text-[22px] leading-11 mt-6 lg:w-[48%] font-light font-code w-[90%] whitespace-pre-line  text-center "
          text={`Sou desenvolvedora full stack e especialista em JavaScript, apaixonada por transformar ideias em experiências digitais que realmente façam sentido para as pessoas. Minha jornada em TI começou em 2022, atuando como suporte técnico, onde descobri minha paixão por resolver problemas e entender profundamente como os sistemas funcionam.

          Em 2023, depois de muito estudo, projetos próprios e dedicação constante, consegui minha transição para o desenvolvimento de software. Hoje trabalho com React, React Native, TypeScript e Node.js, participando de todo o ciclo de desenvolvimento, da definição de funcionalidades ao backend e entrega final. O que me motiva todos os dias é aprender, criar soluções eficientes e construir produtos digitais que impactem positivamente quem os utiliza. 🚀`}
        />
      </section>

      <div className="flex w-full overflow-hidden justify-center items-center mb-6">
        <SkillsCarousel />
      </div>
    </div>
  );
};
