import { motion } from "framer-motion";
import { Hero } from "../Hero";

export const Home = () => {
  return (
    <motion.section
      className="relative z-10 flex min-h-screen w-full items-stretch justify-center bg-[url('.//../public/hero.png')] bg-cover  bg-center py-0 rounded-t-[25px]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <Hero />
    </motion.section>
  );
};  
