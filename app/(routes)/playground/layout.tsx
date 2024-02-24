import ThemeButton from "@/components/utils/ThemeButton";
import { Theme } from "@/types";
import { cookies } from "next/dist/client/components/headers";
import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  const theme =
    cookies().get("theme")?.value === "dark" ? Theme.dark : Theme.light;
  return (
    <div className="h-full relative flex items-center justify-center bg-white dark:bg-slate-950 dark:text-slate-950 ">
      <nav className="absolute top-7 right-10 z-50">
        <ThemeButton theme={theme} />
      </nav>
      <div className="z-10 h-full flex items-center">{children}</div>
    </div>
  );
}

export default AuthLayout;
