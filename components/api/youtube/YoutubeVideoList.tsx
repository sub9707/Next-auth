"use client";
import { fetchYoutubeData } from "@/app/api/youtube/fetchingFunc";
import { YoutubeContext } from "@/context/youtube";
import {
  YoutubeResultInitialState,
  YoutubeSearchResults,
} from "@/types/youtube";
import React, { useContext, useEffect, useState } from "react";

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
  console.log(youtubeData);
  return <div>YoutubeVideoList</div>;
}

export default YoutubeVideoList;
