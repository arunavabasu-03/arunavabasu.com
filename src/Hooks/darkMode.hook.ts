import { useState, useEffect } from "react";

const setThemeInStorage = (theme: string) => {
  localStorage.setItem("theme", theme);
};

const getThemeInStorage = () => {
  // Use localStorage.getItem with a default value
  return localStorage.getItem("theme") || "light";
};

setThemeInStorage("light");

export default function useDarkSide() {
  const [theme, setTheme] = useState<string>(getThemeInStorage());
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    // Update the theme in localStorage when it changes
    setThemeInStorage(theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
