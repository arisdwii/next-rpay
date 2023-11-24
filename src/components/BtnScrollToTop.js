import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export const BtnScrollToTop = () => {
  const [readingScroll, setReadingScroll] = useState(0);
  const [buttonBackTop, setbuttonBackTop] = useState(false);

  useEffect(() => {
    const scrollReadingBarEffect = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
      setReadingScroll(scrollPercent);
    };

    const backToTopButton = () => {
      if (window.scrollY > 1) {
        setbuttonBackTop(true);
      } else {
        setbuttonBackTop(false);
      }
    };

    window.addEventListener("scroll", scrollReadingBarEffect);
    window.addEventListener("scroll", backToTopButton);

    return () => {
      window.removeEventListener("scroll", scrollReadingBarEffect);
      window.removeEventListener("scroll", backToTopButton);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto relative">
      {buttonBackTop && (
        <div className="fixed bottom-4 right-4 z-30 sm:bottom-6 sm:right-6">
          <div
            onClick={scrollUp}
            className="w-10 h-10 relative rounded-full bg-putih2 shadow-s.08 p-1 flex items-center justify-center cursor-pointer animate-slideTop sm:w-12 sm:h-12 dark:bg-gelap2"
          >
            <CircularProgressbar
              value={readingScroll}
              styles={buildStyles({
                pathColor: "#FFB20F",
              })}
            />
            <span className="absolute text-primary">
              <Icon icon="ep:arrow-up-bold" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
