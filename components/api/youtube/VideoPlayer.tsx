"use client";
import { Button } from "@/components/ui/button";
import { CollapsibleTrigger } from "@/components/ui/collapsible";
import { DialogContent } from "@/components/ui/dialog";
import { Collapsible } from "@radix-ui/react-collapsible";
import { CaretSortIcon, ChatBubbleIcon } from "@radix-ui/react-icons";
import React from "react";
import YouTube from "react-youtube";
import CommentList from "./CommentList";

function VideoPlayer(props: { vid: string }) {
  const { vid } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      <DialogContent className="sm:max-w-[1080px] h-auto">
        <YouTube
          videoId={vid}
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
        <Collapsible onOpenChange={setIsOpen} open={isOpen}>
          <div className="flex flex-col space-x-4 px-4">
            <CollapsibleTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex gap-3 justify-start mb-3">
                <ChatBubbleIcon className="h-4 w-4" />
                <h4 className="text-sm font-semibold">댓글 펼치기</h4>
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
            <CommentList vid={vid} isOpen={isOpen} />
          </div>
        </Collapsible>
      </DialogContent>
    </>
  );
}

export default VideoPlayer;
