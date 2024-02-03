"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { YoutubeContext } from "@/context/youtube";
import React, { useContext, useState } from "react";

function YoutubeSearchInput() {
  const { setInput } = useContext(YoutubeContext);
  const [query_string, set_query_string] = useState<string>("");

  const handleSubmit = () => {
    setInput(query_string);
  };
  return (
    <Card className="w-[40vw]">
      <div className="flex w-full space-x-2 p-2 ">
        <Input
          type="text"
          placeholder="Youtube 검색어 입력..."
          onChange={(e) => set_query_string(e.target.value)}
        />
        <Button type="submit" onClick={handleSubmit}>
          검색
        </Button>
      </div>
    </Card>
  );
}

export default YoutubeSearchInput;
