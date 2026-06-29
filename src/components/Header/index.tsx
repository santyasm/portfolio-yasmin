import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaRegFilePdf } from "react-icons/fa6";

export const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "pt-BR" : "en");
  };

  return (
    <motion.div
      className="font-code"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          {/* <a
            href="/yasmin_developer_cv.pdf"
            download
            aria-label={t("header.cvAriaLabel")}
            data-magnetic="false"
          >
            <motion.p className="text-[18px] font-semibold text-[#e4ded7] md:text-[24px]" data-magnetic="false">
              <FaRegFilePdf />
            </motion.p>
          </a> */}

          <button
            onClick={toggleLanguage}
            className="text-[11px] md:text-[13px] font-semibold text-[#e4ded7] border border-[#e4ded7]/40 rounded px-2 py-0.5 hover:border-[#e4ded7] transition-colors duration-200 cursor-pointer"
            aria-label="Toggle language"
            data-magnetic="false"
          >
            {i18n.language === "en" ? "PT" : "EN"}
          </button>
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
    </motion.div >
  );
};
