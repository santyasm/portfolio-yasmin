import { motion } from "framer-motion";
import { FaRegFilePdf } from "react-icons/fa6";

export const Header = () => {
  return (
    <motion.div
      className="font-inter"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex justify-between">
        <div>
          <a href="/yasmin_developer_cv.pdf" download aria-label="Download cv">
            <motion.p className="text-[18px] font-semibold text-[#e4ded7] md:text-[24px]">
              <FaRegFilePdf />
            </motion.p>
          </a>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <a
            href="https://github.com/santyasm/"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p className="text-[14px] font-semibold text-[#e4ded7] md:text-[16px]">
              GITHUB
            </motion.p>
          </a>
          <a
            href="https://linkedin.com/in/yasmin-santana-santos"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p className="text-[14px] font-semibold text-[#e4ded7] md:text-[16px]">
              LINKEDIN
            </motion.p>
          </a>
        </div>
      </div>
    </motion.div>
  );
};
