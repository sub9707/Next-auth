"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertDialog, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { useRouter } from "next/navigation";

type ProfileCardProps = {
  header: string;
  content: string;
  actionHref: string;
  detailModal?: React.ReactNode;
  detail?: boolean;
};

function ProfileCard(props: ProfileCardProps) {
  const router = useRouter();
  return (
    <Card className="w-[350px] max-h-[150px] h-auto text-center drop-shadow-2xl bg-white dark:border-none">
      <CardHeader>
        <CardTitle className="text-slate-950">{props.header}</CardTitle>
        <CardDescription>{props.content}</CardDescription>
      </CardHeader>
      <CardFooter className="flex gap-3 justify-end">
        {props.detail === true && (
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button className="w-full">상세보기</Button>
            </AlertDialogTrigger>
            {props.detailModal}
          </AlertDialog>
        )}
        <Button
          className="w-full border-2 border-slate-500  bg-slate-950 text-white dark:border-none hover:text-white hover:bg-slate-700"
          onClick={() => router.push(props.actionHref)}>
          {props.detail ? "예제 이동" : "이동하기"}
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;
