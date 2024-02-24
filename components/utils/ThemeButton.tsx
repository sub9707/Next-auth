"use client";
import { Theme } from "@/types";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";

type ThemePropsType = {
  theme: Theme;
};

function ThemeButton({ theme }: ThemePropsType) {
  const [_theme, setTheme] = useState<Theme>(theme);
  const toogleTheme = () => {
    const root = document.getElementsByTagName("html")[0];
    root.classList.toggle(Theme.dark);
    if (root.classList.contains(Theme.dark)) {
      setTheme(Theme.dark);
      document.cookie = `theme=${Theme.dark}`;
    } else {
      setTheme(Theme.light);
      document.cookie = `theme=${Theme.light}`;
    }
  };

  return (
    <button onClick={toogleTheme}>
      {_theme == Theme.dark ? (
        <SunIcon className="h-10 w-10 text-yellow-500" />
      ) : (
        <MoonIcon className="h-10 w-10" />
      )}
    </button>
  );
}

export default ThemeButton;
