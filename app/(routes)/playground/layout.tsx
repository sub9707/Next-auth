import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex items-center justify-center bg-white dark:bg-slate-950 dark:text-slate-950 ">
      <div className="z-10 h-full grid place-items-center">{children}</div>
    </div>
  );
}

export default AuthLayout;
