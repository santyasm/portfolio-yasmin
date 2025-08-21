import { motion } from "framer-motion";
import { Hero } from "../Hero";
import { Header } from "../Header";

export const Home = () => {
  return (
    <motion.section
      className="relative z-10 flex flex-col min-h-screen w-full items-stretch bg-[url('.//../public/hero.png')] bg-cover bg-center py-0 rounded-t-[25px]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <Header />
      <Hero />
    </motion.section>
  );
};
