import { YoutubeProvider } from "@/context/youtube";
import React from "react";

function YoutubeLayout({ children }: { children: React.ReactNode }) {
  return (
    <YoutubeProvider>
      <div>{children}</div>
    </YoutubeProvider>
  );
}

export default YoutubeLayout;
