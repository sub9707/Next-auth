import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";
import Link from "next/link";

async function UserDataCard() {
  const session = await auth();
  return (
    <Card className="w-[90vw] md:w-[30vw] max-h-72 break-all bg-white flex-col justify-between shadow-2xl">
      <CardHeader>
        <CardTitle className="text-black font-bold text-center ">
          로그인 사용자 정보
        </CardTitle>
        <CardDescription>
          {Object.entries(session?.user || {}).map(([key, value]) => (
            <p key={key}>
              <strong className="text-black/70">{key}</strong>: {value}
            </p>
          ))}
          <p>
            <strong className="text-black/70">Session Expires at</strong>:{" "}
            {session?.expires}
          </p>
        </CardDescription>
      </CardHeader>
      <form
        className="w-full gap-5 px-10 flex mb-5"
        action={async () => {
          "use server";
          await signOut();
        }}>
        <Button className="w-full bg-slate-950 text-white dark:hover:bg-slate-700">
          로그아웃
        </Button>
        <Link
          className="w-full text-black grid place-items-center bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
          href={"/playground"}>
          뒤로가기
        </Link>
      </form>
    </Card>
  );
}

export default UserDataCard;
