import { motion } from "framer-motion";
import { Hero } from "../Hero";
import { Header } from "../Header";

export const Home = () => {
  return (
    <motion.section
      className="relative flex flex-col w-full min-h-screen h-auto
    rounded-t-[25px]
    bg-[url('/hero.png')] bg-cover bg-center
    shadow-amber-50"
      id="home"
      initial="initial"
      animate="animate"
    >
      <Header />
      <Hero />
    </motion.section>
  );
};
