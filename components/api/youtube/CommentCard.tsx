import { Card } from "@/components/ui/card";
import { YoutubeCommentItemType } from "@/types/youtube";
import Image from "next/image";
import React from "react";

function CommentCard(props: { commentData: YoutubeCommentItemType }) {
  const { commentData } = props;
  const trimDate = (date: string) => {
    return date.split("T")[0];
  };
  console.log(commentData);
  return (
    <Card className="w-full h-[100px] mb-5 px-5 relative overflow-hidden">
      <div className="flex w-full h-full items-center space-x-4">
        <figure className="flex w-16 h-16 relative">
          <Image
            src={
              commentData?.snippet?.topLevelComment?.snippet
                ?.authorProfileImageUrl
            }
            alt="Profile"
            className="w-full h-full absolute rounded-full"
            fill
          />
        </figure>
        <div className="w-[90%] flex flex-col">
          <div className="justify-between mb-1 block sm:flex">
            <p className="font-semibold text-sm sm:text-md">
              @
              {
                commentData?.snippet?.topLevelComment?.snippet?.authorChannelId
                  ?.value
              }
            </p>
            <p className="text-gray-500 text-sm sm:text-md">
              {trimDate(
                commentData?.snippet?.topLevelComment?.snippet.publishedAt
              )}
            </p>
          </div>
          <p className="mt-1 line-clamp-2 text-sm sm:text-md">
            {commentData?.snippet?.topLevelComment?.snippet.textOriginal}
          </p>
        </div>
      </div>
    </Card>
  );
}

export default CommentCard;
