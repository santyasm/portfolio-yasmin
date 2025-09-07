import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 90);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-6 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp
          className="text-white bg-purple-600 text-[20px] w-[44px] h-[44px] flex items-center justify-center rounded-full p-3 shadow-xl"
          data-blobity
          data-blobity-radius="27"
          data-blobity-magnetic="true"
        />
      </button>
    )
  );
};

export default ScrollToTopButton;
