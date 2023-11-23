import { useEffect, useState } from "react";

export const HeaderEffect = () => {
  const [headEffect, setHeadEffect] = useState(false);

  const handleScroll = () => {
    setHeadEffect(window.scrollY > 0);
  };

  useEffect(() => {
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [headEffect];
};
