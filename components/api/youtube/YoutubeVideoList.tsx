"use client";
import { fetchYoutubeData } from "@/app/api/youtube/fetchingFunc";
import { YoutubeContext } from "@/context/youtube";
import {
  YoutubeResultInitialState,
  YoutubeSearchResults,
} from "@/types/youtube";
import React, { useContext, useEffect, useState, useTransition } from "react";
import YoutubeVideoCard from "./YoutubeVideoCard";
import Image from "next/image";

function YoutubeVideoList() {
  const { input } = useContext(YoutubeContext);
  const [isPending, startTransition] = useTransition();
  const [youtubeData, setYoutubeData] = useState<YoutubeSearchResults>(
    YoutubeResultInitialState
  );
  useEffect(() => {
    const fetchData = () => {
      startTransition(async () => {
        const data = await fetchYoutubeData(input);
        setYoutubeData(data);
      });
    };
    if (input === "") return;
    fetchData();
  }, [input]);

  return (
    <div className="w-[80vw] mt-10 flex flex-col items-center justify-center gap-3 sm:w-[40vw]">
      {isPending ? (
        <Image
          className="w-[200px] h-[200px]"
          src="/assets/Spinner.svg"
          alt="spinner"
          width={0}
          height={0}
        />
      ) : (
        youtubeData.items.map((item, idx) => (
          <YoutubeVideoCard {...item} key={idx} />
        ))
      )}
    </div>
  );
}

export default YoutubeVideoList;
