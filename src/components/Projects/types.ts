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
    name: "Cowork",
    description:
      "Sistema completo de gestão de coworking, incluindo reservas de salas e mesas, planos de assinatura e painel intuitivo, desenvolvido em Laravel e React.",
    technologies: ["Laravel", "React", "MySQL"],
    github: "https://github.com/santyasm/cowork",
    demo: "https://cowork-app-main.laravel.cloud/",
    banner: "/projects/cowork.png",
  },
  {
    id: 1,
    name: "DevLearn",
    description:
      "Front-end da DevLearn: interface web moderna com Next.js e TailwindCSS, consumindo a DevLearn API para cursos, vídeos e progresso de aprendizado.",
    technologies: ["NEXT.JS", "TAILWINDCSS"],
    github: "https://github.com/santyasm/dev-learn-front",
    demo: "https://dev-learn-front.vercel.app",
    banner: "/projects/dev-learn.png",
  },
  {
    id: 2,
    name: "MTG Life Counter",
    description:
      "Aplicativo em React Native (Expo + Bare Workflow) para jogadores de Magic: The Gathering acompanharem pontos de vida de forma prática durante suas partidas.",
    technologies: ["React Native", "Expo Router"],
    github: "https://github.com/santyasm/mtg-life-counter",
    demo: "https://github.com/santyasm/mtg-life-counter",
    banner: "/projects/mtg-life-counter.png",
  },
  {
    id: 3,
    name: "Weather App",
    description:
      "App de previsão do tempo em React Native que exibe informações atuais e previsão diária ou semanal, utilizando localização do usuário para dados precisos.",
    technologies: ["React Native", "Redux Toolkit"],
    github: "https://github.com/santyasm/weather",
    demo: "https://github.com/santyasm/weather",
    banner: "/projects/weather-app.png",
  },
  {
    id: 4,
    name: "Video View App",
    description:
      "Aplicativo em React Native para vídeos curtos verticais, usando a API do Pexels, com rolagem infinita, autoplay do vídeo atual e pausa automática dos outros.",
    technologies: ["React Native"],
    github: "https://github.com/santyasm/video-view",
    demo: "https://github.com/santyasm/video-view",
    banner: "/projects/video-view.png",
  },
  {
    id: 5,
    name: "Countdown Timer Animated",
    description:
      "App simples em React Native para criação de timers animados, desenvolvido para praticar animações utilizando o hook Animated e conceitos de tempo dinâmico.",
    technologies: ["React Native"],
    github: "https://github.com/santyasm/Countdown-Timer-Animation",
    demo: "https://github.com/santyasm/Countdown-Timer-Animation",
    banner: "/projects/countdown-rn.png",
  },
  {
    id: 6,
    name: "Ignite Shop",
    description:
      "Projeto da Maratona Ignite da Rocketseat para prática de Next.js e integração com Stripe, criando uma loja online funcional e totalmente interativa.",
    technologies: ["Next.js", "Stripe", "Stitches"],
    github: "https://github.com/santyasm/ignite-shop",
    demo: "https://ignite-shop-ivory-beta.vercel.app/",
    banner: "/projects/ignite-shop.png",
  },
];
