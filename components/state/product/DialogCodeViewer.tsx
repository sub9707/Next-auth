import Editor from "@monaco-editor/react";
import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import React from "react";

function DialogCodeViewer(props: { codeData: string }) {
  return (
    <DialogContent className="sm:max-w-[40vw]">
      <DialogHeader>
        <DialogTitle>코드 살펴보기</DialogTitle>
        <DialogDescription>
          Make changes to your profile here. Click save when youre done.
        </DialogDescription>
      </DialogHeader>
      <Editor
        defaultValue={props.codeData}
        language="javascript"
        height={"50vh"}
        theme={"vs-dark"}
      />
      <div className="w-full flex justify-center">
        <DialogClose asChild>
          <Button className="w-[40%]" type="submit">
            창닫기
          </Button>
        </DialogClose>
      </div>
    </DialogContent>
  );
}

export default DialogCodeViewer;
