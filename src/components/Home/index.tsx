import { motion } from "framer-motion";
import { Hero } from "../Hero";
import { Header } from "../Header";
import ScrollToTopButton from "../shared/ScrollToTopButton";

export const Home = () => {
  return (
    <motion.section
      className="relative flex flex-col w-full min-h-screen h-auto rounded-t-[25px] bg-[url('/hero.png')] bg-cover bg-top mb-10 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-6"
      id="home"
      initial="initial"
      animate="animate"
    >
      <Header />
      <Hero />
      <ScrollToTopButton />
    </motion.section>
  );
};
