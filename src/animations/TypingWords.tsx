import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TYPING_MS = 160;
const DELETING_MS = 80;
const PAUSE_MS = 1200;
const JITTER = 0.2;

const TypingWords: React.FC = () => {
  const { t } = useTranslation();
  const roles = t("hero.roles", { returnObjects: true }) as string[];

  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const maxLen = useMemo(() => Math.max(...roles.map((r) => r.length)), [roles]);

  useEffect(() => {
    const current = roles[index];

    // velocidade com leve "humanização"
    const base = deleting ? DELETING_MS : TYPING_MS;
    const speed = Math.max(
      1,
      base * (1 - JITTER / 2 + Math.random() * JITTER) // 90% a 110% do base
    );

    // pausa quando termina de digitar a palavra
    if (!deleting && text === current) {
      const pause = setTimeout(() => setDeleting(true), PAUSE_MS);
      return () => clearTimeout(pause);
    }

    // troca para a próxima palavra após apagar tudo
    if (deleting && text === "") {
      setDeleting(false);
      setIndex((i) => (i + 1) % roles.length);
      return;
    }

    const t = setTimeout(() => {
      setText((prev) =>
        deleting ? prev.slice(0, -1) : current.slice(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(t);
  }, [text, deleting, index]);

  return (
    <div className="flex items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-gray-400 font-semibold font-code text-[16px] md:text-[26px] lg:text-[20px]"
        style={{ minWidth: `${maxLen}ch` }}
        aria-live="polite"
      >
        {text}
        <span
          className="inline-block ml-1 align-middle"
          style={{
            width: "0.1em",
            height: "1em",
            background: "#e4ded7",
            animation: "blink 1s steps(1) infinite",
          }}
          aria-hidden
        />
        <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
      </motion.h2>
    </div>
  );
};

export default TypingWords;
