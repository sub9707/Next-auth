import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex items-center justify-center bg-slate-950 ">
      <div className="z-10 w-full">{children}</div>
    </div>
  );
}

export default AuthLayout;
