import React from "react";
import {
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type DetailModalType = {
  title: string;
  Description: string[];
};

function DetailModal(props: DetailModalType) {
  return (
    <AlertDialogContent className="font-NanumGothic">
      <AlertDialogHeader>
        <AlertDialogTitle className="mb-5 text-center">
          {props.title}
        </AlertDialogTitle>
        <div className="flex flex-col gap-2">
          {props.Description.map((data, idx) => (
            <AlertDialogDescription key={idx}>❖ {data}</AlertDialogDescription>
          ))}
        </div>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogAction>닫기</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}

export default DetailModal;
