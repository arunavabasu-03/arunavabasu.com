import { useState, useEffect } from "react";

export default function useDarkSide() {
  const themeUI = localStorage.getItem("theme") || "light";

  const [theme, setTheme] = useState(themeUI);
  const colorTheme = theme === "dark" ? "light" : "dark";

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colorTheme]);

  return [colorTheme, setTheme];
}
