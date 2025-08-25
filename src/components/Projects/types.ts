export interface ProjectCardProps {
  id: number;
  name: string;
  banner: string;
  technologies: string[];
  demo: string;
  github: string;
  description: string;
}

export const projectList = [
  {
    id: 0,
    name: "MTG Life Counter",
    description:
      "Um aplicativo desenvolvido em React Native (Expo + Bare Workflow) para auxiliar jogadores de Magic: The Gathering a controlarem os pontos de vida durante suas partidas.",
    technologies: ["React Native", "Expo (Bare Workflow)", "Expo Router"],
    github: "https://github.com/santyasm/mtg-life-counter",
    demo: "https://github.com/santyasm/mtg-life-counter",
    banner: "/projects/mtg-life-counter.png",
  },
  {
    id: 1,
    name: "Weather App",
    description:
      "Aplicativo de previsão do tempo desenvolvido em React Native, que exibe informações meteorológicas atuais e previsão diária/semanal com base na localização do usuário.",
    technologies: ["React Native", "Redux Toolkit", "React Navigation"],
    github: "https://github.com/santyasm/weather",
    demo: "https://github.com/santyasm/weather",
    banner: "/projects/weather-app.png",
  },
  {
    id: 2,
    name: "Video View App",
    description:
      "Um aplicativo desenvolvido em React Native para visualização de vídeos curtos no formato vertical. O app faz uso da API do Pexels para buscar e exibir os vídeos, com suporte a rolagem infinita, autoplay do vídeo atual e pausa automática dos demais.",
    technologies: ["React Native"],
    github: "https://github.com/santyasm/video-view",
    demo: "https://github.com/santyasm/video-view",
    banner: "/projects/video-view.png",
  },
  {
    id: 3,
    name: "Countdown Timer Animated",
    description:
      "Um aplicativo simples desenvolvido em React Native para praticar animações com o hook Animated.",
    technologies: ["React Native"],
    github: "https://github.com/santyasm/Countdown-Timer-Animation",
    demo: "https://github.com/santyasm/Countdown-Timer-Animation",
    banner: "/projects/countdown-rn.png",
  },
  {
    id: 4,
    name: "Ignite Shop",
    description:
      "Projeto desenvolvido durante a Maratona Ignite da Rocketseat com o objetivo de praticar conceitos de Next.js e integração com Stripe.",
    technologies: ["Next.js", "Stripe", "Stitches"],
    github: "https://github.com/santyasm/ignite-shop",
    demo: "https://ignite-shop-ivory-beta.vercel.app/",
    banner: "/projects/ignite-shop.png",
  },
];
