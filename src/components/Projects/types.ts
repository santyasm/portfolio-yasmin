export interface ProjectCardProps {
  id: number;
  name: string;
  banner: string;
  technologies: string[];
  demo: string;
  github: string;
  description: string;
  descriptionKey: string;
}

export const projectList = [
  {
    id: 0,
    name: "Cowork",
    descriptionKey: "cowork",
    description: "",
    technologies: ["Laravel", "React", "MySQL"],
    github: "https://github.com/santyasm/cowork",
    demo: "https://cowork.yasminsantana.fun/",
    banner: "/projects/cowork.png",
  },
  {
    id: 1,
    name: "DevLearn",
    descriptionKey: "devlearn",
    description: "",
    technologies: ["NEXT.JS", "TAILWINDCSS"],
    github: "https://github.com/santyasm/dev-learn-front",
    demo: "https://dev-learn-front.vercel.app",
    banner: "/projects/dev-learn.png",
  },
  {
    id: 2,
    name: "Twii",
    descriptionKey: "twii",
    description: "",
    technologies: ["NEXT.JS", "TAILWINDCSS"],
    github: "https://github.com/santyasm/twii-social-front",
    demo: "https://twii.yasminsantana.fun",
    banner: "/projects/twii.png",
  },
  {
    id: 3,
    name: "MTG Life Counter",
    descriptionKey: "mtg",
    description: "",
    technologies: ["React Native", "Expo Router"],
    github: "https://github.com/santyasm/mtg-life-counter",
    demo: "https://github.com/santyasm/mtg-life-counter",
    banner: "/projects/mtg-life-counter.png",
  },
  {
    id: 4,
    name: "Weather App",
    descriptionKey: "weather",
    description: "",
    technologies: ["React Native", "Redux Toolkit"],
    github: "https://github.com/santyasm/weather",
    demo: "https://github.com/santyasm/weather",
    banner: "/projects/weather-app.png",
  },
  {
    id: 5,
    name: "Video View App",
    descriptionKey: "videoview",
    description: "",
    technologies: ["React Native"],
    github: "https://github.com/santyasm/video-view",
    demo: "https://github.com/santyasm/video-view",
    banner: "/projects/video-view.png",
  },
  {
    id: 6,
    name: "URL Shortener",
    descriptionKey: "urlshortener",
    description: "",
    technologies: ["React", "Bun", "Prisma"],
    github: "https://github.com/santyasm/url-shortener",
    demo: "https://url-shortener.yasminsantana.fun",
    banner: "/projects/url-shortener.png",
  },
  {
    id: 7,
    name: "Countdown Timer Animated",
    descriptionKey: "countdown",
    description: "",
    technologies: ["React Native"],
    github: "https://github.com/santyasm/Countdown-Timer-Animation",
    demo: "https://github.com/santyasm/Countdown-Timer-Animation",
    banner: "/projects/countdown-rn.png",
  },
  {
    id: 8,
    name: "Ignite Shop",
    descriptionKey: "igniteshop",
    description: "",
    technologies: ["Next.js", "Stripe", "Stitches"],
    github: "https://github.com/santyasm/ignite-shop",
    demo: "https://ignite-shop-ivory-beta.vercel.app/",
    banner: "/projects/ignite-shop.png",
  },
];
