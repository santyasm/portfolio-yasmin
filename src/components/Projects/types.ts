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
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    banner: "/projects/mtg-life-counter.png",
  },
  {
    id: 1,
    name: "MTG Life Counter",
    description:
      "Um aplicativo desenvolvido em React Native (Expo + Bare Workflow) para auxiliar jogadores de Magic: The Gathering a controlarem os pontos de vida durante suas partidas.",
    technologies: ["React Native", "Expo (Bare Workflow)", "Expo Router"],
    github: "https://github.com/santyasm/mtg-life-counter",
    demo: "https://github.com/santyasm/mtg-life-counter",
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    banner: "/projects/mtg-life-counter.png",
  },
];
