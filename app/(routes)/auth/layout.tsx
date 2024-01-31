import React from "react";
import "./page.css";

function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full flex items-center justify-center ">
      <video autoPlay loop muted id="video">
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
      <div className="z-10">{children}</div>
    </div>
  );
}

export default AuthLayout;
