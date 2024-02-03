"use client";
import { DialogContent } from "@/components/ui/dialog";
import React from "react";
import YouTube from "react-youtube";

function VideoPlayer() {
  return (
    <>
      <DialogContent className="sm:max-w-[1080px]">
        <YouTube
          videoId={"FxFr-ZMxZes"}
          opts={{
            width: "100%",
            height: "600px",
            playerVars: {
              autoplay: 1,
              rel: 0,
              modestbranding: 1,
            },
          }}
          onEnd={(e) => {
            e.target.stopVideo(0);
          }}
        />
      </DialogContent>
    </>
  );
}

export default VideoPlayer;
