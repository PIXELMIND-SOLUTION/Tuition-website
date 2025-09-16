// components/Typer.js
import React, { useEffect, useState } from "react";

const Typer = ({ text, typingSpeed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, index + 1));
      index++;
      if (index === text.length) clearInterval(interval);
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [text, typingSpeed]);

  return <h2 className="text-2xl md:text-3xl font-semibold mb-6">{displayedText}</h2>;
};

export default Typer;
