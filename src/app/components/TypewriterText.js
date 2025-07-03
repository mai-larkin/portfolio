'use client';

import { useState, useEffect } from "react";

export const TypewriterText = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Computer Science Student.";
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(150); // Typing speed

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % fullText.length;
      const updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);

      // Speed up on delete
      if (isDeleting) {
        setDelta(80);
      }

      // When done typing
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(2000); // Pause before deleting
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200);
      }
    };

    const ticker = setTimeout(() => {
      handleTyping();
    }, delta);

    return () => clearTimeout(ticker);
  }, [text, isDeleting]);

  return (
    <span className="inline-block min-h-[1.5em] text-slate-50">
      {text || '\u00A0'}
      <span className="ml-1 animate-cursor">|</span>
    </span>
  );
};