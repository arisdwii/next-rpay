import { useTheme } from "next-themes";
import { Icon } from "@iconify/react";

export const BtnToggleMode = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative p-1 rounded-full">
      {currentTheme === "light" ? (
        <button
          onClick={() => setTheme("dark")}
          className="w-full h-full flex items-center justify-center text-lg sm:text-xl"
        >
          <Icon icon="line-md:moon-filled-to-sunny-filled-loop-transition" />
        </button>
      ) : (
        <button
          onClick={() => setTheme("light")}
          className="w-full h-full flex items-center justify-center text-lg sm:text-xl"
        >
          <Icon icon="line-md:sunny-filled-loop-to-moon-filled-loop-transition" />
        </button>
      )}
    </div>
  );
};
