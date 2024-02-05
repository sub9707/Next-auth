"use client";
import { fetchCommentList } from "@/app/api/youtube/fetchingFunc";
import { CollapsibleContent } from "@/components/ui/collapsible";
import {
  YoutubeCommentsResultType,
  YoutubeCommentsResult_Init,
} from "@/types/youtube";
import React, { useEffect, useState, useTransition } from "react";
import CommentCard from "./CommentCard";
import Image from "next/image";

function CommentList(props: { vid: string; isOpen: boolean }) {
  const { vid, isOpen } = props;
  const [commentsData, setCommentsData] = useState<YoutubeCommentsResultType>(
    YoutubeCommentsResult_Init
  );
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    (async () => {
      startTransition(async () => {
        const res = await fetchCommentList("snippet", vid);
        setCommentsData(res);
      });
    })();
  }, []);

  return (
    <CollapsibleContent
      className={`sm:max-w-[1080px] ${
        isOpen && "h-[20vh]"
      }  overflow-scroll overflow-x-hidden scrollbar-hide`}>
      {isPending ? (
        <Image
          className="w-[200px] h-[200px]"
          src="/assets/Spinner.svg"
          alt="spinner"
          width={0}
          height={0}
        />
      ) : (
        commentsData.items.map((comment) => (
          <CommentCard key={comment?.etag} commentData={comment} />
        ))
      )}
    </CollapsibleContent>
  );
}

export default CommentList;
