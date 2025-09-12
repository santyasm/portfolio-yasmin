import { useEffect, useState, useMemo } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "FULLSTACK DEVELOPER",
  "FRONTEND DEVELOPER",
  "SOFTWARE DEVELOPER",
];

// velocidades
const TYPING_MS = 160; // digitar
const DELETING_MS = 80; // apagar
const PAUSE_MS = 1200; // pausa palavra completa
const JITTER = 0.2; // 0.2 = variação ±10% (coloque 0 para desativar)

const TypingWords: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const maxLen = useMemo(() => Math.max(...ROLES.map((r) => r.length)), []);

  useEffect(() => {
    const current = ROLES[index];

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
      setIndex((i) => (i + 1) % ROLES.length);
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
        className="text-whitetext font-semibold font-mona text-[24px] md:text-[26px] lg:text-[32px]"
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
