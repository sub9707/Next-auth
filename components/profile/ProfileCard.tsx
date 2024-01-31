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
import { useRouter } from "next/navigation";

type ProfileCardProps = {
  header: string;
  content: string;
  actionHref: string;
};

function ProfileCard(props: ProfileCardProps) {
  const router = useRouter();
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{props.header}</CardTitle>
        <CardDescription>{props.content}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button
          className="w-full"
          onClick={() => router.push(props.actionHref)}>
          이동
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ProfileCard;
