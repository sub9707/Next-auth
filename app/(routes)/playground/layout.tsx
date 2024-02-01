import React from "react";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex items-center justify-center bg-slate-950 ">
      <div className="z-10">{children}</div>
    </div>
  );
}

export default AuthLayout;
