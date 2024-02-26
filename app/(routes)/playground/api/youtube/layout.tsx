"use client";
import { YoutubeProvider } from "@/context/youtube";
import React from "react";

function YoutubeLayout({ children }: { children: React.ReactNode }) {
  return (
    <YoutubeProvider>
      <div className="w-full h-full flex justify-center items-center">
        {children}
      </div>
    </YoutubeProvider>
  );
}

export default YoutubeLayout;
