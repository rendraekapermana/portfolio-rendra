import { useState, useEffect } from "react";

const name = "Rendra Eka Permana";

const RunningText = () => {
  const [typedName, setTypedName] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let typingSpeed = 150;

    if (isDeleting) typingSpeed = 80;

    if (!isDeleting && charIndex === name.length) {
      setTimeout(() => setIsDeleting(true), 1000);
      return;
    }

    if (isDeleting && charIndex === 1) {
      setIsDeleting(false);
    }

    const timeout = setTimeout(() => {
      const nextIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      setTypedName(name.slice(0, nextIndex));
      setCharIndex(nextIndex);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting]);
  return <div>{typedName}</div>;
};

export default RunningText;
