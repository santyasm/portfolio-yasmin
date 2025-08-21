import { motion } from "framer-motion";
import { Hero } from "../Hero";
import { Header } from "../Header";

export const Home = () => {
  return (
    <motion.section
      className="relative z-10 flex flex-col w-full min-h-screen h-auto bg-[url('.//../public/hero.png')] bg-cover bg-center rounded-t-[25px]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <Header />
      <Hero />

    </motion.section>
  );
};
