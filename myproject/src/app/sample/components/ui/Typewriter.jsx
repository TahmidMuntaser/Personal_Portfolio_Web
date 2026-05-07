"use client";

import React, { useState, useEffect } from "react";

const Typewriter = ({
  texts = ["Full-StackSoftwareDeveloper", "ProblemSolver"],
  typingSpeed = 90,
  deletingSpeed = 40,
  pause = 1100,
  className = "text-base md:text-lg text-teal-300 font-semibold mt-2 pt-1 leading-tight min-h-[1.5em] block"
}) => {
  const [textIndex, setTextIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const visibleText = subText.length > 0 ? subText : "\u00A0";

  useEffect(() => {
    let timer;
    const fullText = texts[textIndex];

    if (!isDeleting) {
      if (subText.length < fullText.length) {
        timer = setTimeout(() => setSubText(fullText.slice(0, subText.length + 1)), typingSpeed);
      } else {
        timer = setTimeout(() => setIsDeleting(true), pause);
      }
    } else {
      if (subText.length > 0) {
        timer = setTimeout(() => setSubText(fullText.slice(0, subText.length - 1)), deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [subText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pause]);

  return (
    <h1 className={className}>
      {visibleText}
    </h1>
  );
};

export default Typewriter;
