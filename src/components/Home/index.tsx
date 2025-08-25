import { motion } from "framer-motion";
import { Hero } from "../Hero";
import { Header } from "../Header";

export const Home = () => {
  return (
    <motion.section
      className="relative flex flex-col w-full min-h-screen h-auto
    rounded-t-[25px]
    bg-[url('/hero.png')] bg-cover bg-top
     mb-10 
     after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-6
    after:shadow-[0_10px_20px_2px_#352553] after:rounded-t-[25px]
     "
      id="home"
      initial="initial"
      animate="animate"
    >
      <Header />
      <Hero />
    </motion.section>
  );
};
