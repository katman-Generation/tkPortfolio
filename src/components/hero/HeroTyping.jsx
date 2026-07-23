import { useEffect, useState } from "react";

const words = [
  "Software Engineer.",
  "Creative Technologist.",
  "Problem Solver.",
  "Founder of KatmanHub.",
];

const finalMessage =
  "I build scalable software, create digital experiences, and use technology to solve real-world problems while building KatmanHub into a world-class technology company.";

export default function HeroTyping() {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    const currentWord = words[wordIndex];

    let timeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length + 1));
        }, 35);
      } else {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 800);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(currentWord.slice(0, text.length - 1));
        }, 18);
      } else {
        setIsDeleting(false);

        if (wordIndex === words.length - 1) {
          setFinished(true);
          setText(finalMessage);
        } else {
          setWordIndex((prev) => prev + 1);
        }
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, finished]);

  return (
    <div className="min-h-[170px]">

      <h2 className="text-3xl font-semibold text-cyan-400">
        {finished ? "Software Engineer" : text}

        <span className="ml-1 animate-pulse">|</span>
      </h2>

      <p
        className={`mt-6 text-lg leading-8 text-slate-400 transition-all duration-700 ${
          finished
            ? "translate-y-0 opacity-100"
            : "translate-y-5 opacity-0"
        }`}
      >
        {finished && finalMessage}
      </p>

    </div>
  );
}