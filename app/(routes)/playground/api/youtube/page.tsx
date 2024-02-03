import YoutubeSearchInput from "@/components/api/youtube/YoutubeSearchInput";
import YoutubeVideoList from "@/components/api/youtube/YoutubeVideoList";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <YoutubeSearchInput />
      <YoutubeVideoList />
    </div>
  );
}

export default page;
