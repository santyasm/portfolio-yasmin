import { motion } from "framer-motion";
import { Hero } from "../Hero";

export const Home = () => {
  return (
    <motion.section id="home" initial="initial" animate="animate">
      <Hero />
      {/* <ScrollToTopButton /> */}
    </motion.section>
  );
};
