import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";

async function UserDataCard() {
  const session = await auth();
  return (
    <Card className="w-[30vw] h-auto break-all flex-col justify-between relative">
      <CardHeader className="mb-16">
        <CardTitle className="font-bold text-center">
          로그인 사용자 정보
        </CardTitle>
        <CardDescription>
          <p>
            <strong>유저명</strong>: {session?.user.name}
          </p>
          <p>
            <strong>email</strong>: {session?.user.email}
          </p>
          <p>
            <strong>잔고</strong>: {session?.user.balance}
          </p>
          <p>
            <strong>UID</strong>: {session?.user.id}
          </p>
          <p>
            <strong>권한</strong>: {session?.user.role}
          </p>
          <p>
            <strong>세션만료시간</strong>: {session?.expires}
          </p>
        </CardDescription>
      </CardHeader>
      <form
        className="absolute bottom-5 w-full flex justify-center"
        action={async () => {
          "use server";
          await signOut();
        }}>
        <Button className="w-[80%]">로그아웃</Button>
      </form>
    </Card>
  );
}

export default UserDataCard;
