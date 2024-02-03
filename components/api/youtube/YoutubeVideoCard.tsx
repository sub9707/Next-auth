import { Card } from "@/components/ui/card";
import { YoutubeSearchResultData } from "@/types/youtube";
import React from "react";

function YoutubeVideoCard(props: YoutubeSearchResultData) {
  return (
    <Card className="w-full flex p-2 gap-5 shadow-lg shadow-white/20">
      <div className="w-[30%]">
        <div className="w-full aspect-video bg-black hover:cursor-pointer">
          1
        </div>
      </div>
      <div className="w-[70%] pt-2">
        <h1 className="font-extrabold font-JEJUGothic text-gray-700 hover:underline cursor-pointer whitespace-nowrap pr-2 text-ellipsis overflow-hidden ...">
          영상제목
        </h1>
        <p className="text-gray-600 font-black mt-1">채널명</p>
        <p className="text-gray-500 mt-2 line-clamp-2 pr-2 hover:cursor-pointer hover:underline">
          영상설명
        </p>
      </div>
    </Card>
  );
}

export default YoutubeVideoCard;
