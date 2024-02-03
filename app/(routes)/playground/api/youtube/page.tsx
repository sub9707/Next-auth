import YoutubeSearchInput from "@/components/api/youtube/YoutubeSearchInput";
import YoutubeVideoList from "@/components/api/youtube/YoutubeVideoList";
import React from "react";

function page() {
  return (
    <div className="flex flex-col items-center">
      <YoutubeSearchInput />
      <YoutubeVideoList />
    </div>
  );
}

export default page;
