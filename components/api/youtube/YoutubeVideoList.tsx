"use client";
import { fetchYoutubeData } from "@/app/api/youtube/fetchingFunc";
import { YoutubeContext } from "@/context/youtube";
import {
  YoutubeResultInitialState,
  YoutubeSearchResults,
} from "@/types/youtube";
import React, { useContext, useEffect, useState } from "react";
import YoutubeVideoCard from "./YoutubeVideoCard";

function YoutubeVideoList() {
  const { input } = useContext(YoutubeContext);
  const [youtubeData, setYoutubeData] = useState<YoutubeSearchResults>(
    YoutubeResultInitialState
  );
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchYoutubeData(input);
      setYoutubeData(data);
    };
    if (input === "") return;
    fetchData();
  }, [input]);

  return (
    <div className="w-[40vw] mt-10">
      {youtubeData?.items.length > 0 ??
        youtubeData?.items.map((item, idx) => (
          <YoutubeVideoCard {...item} key={idx} />
        ))}
    </div>
  );
}

export default YoutubeVideoList;
