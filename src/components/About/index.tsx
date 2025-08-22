import AnimatedBody from "../../animations/AnimatedBody";
import AnimatedWords from "../../animations/AnimationWords";

export const About = () => {
  return (
    <section className="flex flex-col items-center min-h-screen justify-center relative" id="about">
      <AnimatedWords
        title="Sobre Mim"
        style="bg-gradient-to-r from-darksky via-slightly to-purple-500 bg-clip-text text-transparent text-[50px] md:text-6xl font-bold"
      />

      <AnimatedBody
        className="text-whitetext md:text-[22px] leading-10 mt-6 lg:w-[48%] font-inter w-[98%] whitespace-pre-line"
        text={`Sou desenvolvedora front-end/mobile e adoro transformar ideias em experiências digitais que realmente façam sentido para as pessoas. Minha jornada em TI começou em 2022, atuando como suporte técnico, onde descobri minha paixão por resolver problemas e entender profundamente como os sistemas funcionam.

        Em 2023, depois de muito estudo, projetos próprios e dedicação constante, consegui minha transição para o desenvolvimento de software. Hoje trabalho com React, React Native e TypeScript, participando de todo o ciclo de desenvolvimento, da definição de funcionalidades à entrega final. O que me motiva todos os dias é aprender, criar soluções eficientes e construir produtos digitais que impactem positivamente quem os utiliza. 🚀`}
      />

      <img src="/grid.png" alt="" className="w-[70vw] md:w-auto absolute top-0 right-0" />
    </section>
  );
};
