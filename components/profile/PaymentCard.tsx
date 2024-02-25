import React from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { auth } from "@/auth";
import PayButton from "./PayButton";
import KakaoPayButton from "./KakaoPayButton";

async function PaymentCard() {
  const session = await auth();
  return (
    <Card className="w-full md:w-[30vw] max-h-[23vh] bg-white break-all flex-col justify-between">
      <CardHeader className="mb-4">
        <CardTitle className="font-bold text-center mb-5 text-black">
          결제 모듈 테스트
        </CardTitle>

        <CardDescription className="text-center text-md">
          테스트용 결제 모듈입니다. 실제 결제는 방지되어있습니다. <br />
          현재 잔고는 <strong>{session?.user.balance}</strong>원입니다.
        </CardDescription>
      </CardHeader>
      <div className="w-full gap-3 px-10 flex justify-center mb-5">
        <KakaoPayButton
          email={session?.user.email!}
          name={session?.user.name!}
          id={session?.user.id!}
        />
        <PayButton email={session?.user.email!} name={session?.user.name!} />
      </div>
    </Card>
  );
}

export default PaymentCard;
