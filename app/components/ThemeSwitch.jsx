import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { MdNightlight, MdLightMode } from "react-icons/md";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? "systemTheme" : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="mx-5">
      {currentTheme === "dark" ? (
        <span className="text-2xl text-gray-800 dark:text-gray-100 cursor-pointer" onClick={() => setTheme("light")}>
          <MdLightMode />
        </span>
      ) : (
        <span className="text-2xl text-gray-800 dark:text-gray-100 cursor-pointer" onClick={() => setTheme("dark")}>
          <MdNightlight />
        </span>
      )}
    </div>
  );
}
