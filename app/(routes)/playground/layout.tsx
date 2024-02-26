import React from "react";
import { cookies } from "next/headers";
import ThemeButton from "@/components/utils/ThemeButton";
import { Theme } from "@/types";

function AuthLayout({ children }: { children: React.ReactNode }) {
  // 테마 쿠키 가져오기
  const themeCookies = cookies();
  const theme = themeCookies.get("theme");
  const curTheme = theme?.value === "dark" ? Theme.dark : Theme.light;
  return (
    <div className="h-full flex items-center justify-center bg-white dark:bg-slate-950 dark:text-slate-950 relative">
      <nav className="fixed top-7 right-10 z-50">
        <ThemeButton theme={curTheme} />
      </nav>
      <div className="z-10 h-full grid place-items-center">{children}</div>
    </div>
  );
}

export default AuthLayout;
