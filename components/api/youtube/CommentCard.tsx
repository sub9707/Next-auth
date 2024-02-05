import { Card } from "@/components/ui/card";
import { YoutubeCommentItemType } from "@/types/youtube";
import React from "react";

function CommentCard(props: { commentData: YoutubeCommentItemType }) {
  const { commentData } = props;
  console.log(commentData);
  return (
    <Card className="w-full h-[100px] mb-5">
      {commentData?.snippet?.topLevelComment?.snippet?.textOriginal}
    </Card>
  );
}

export default CommentCard;
