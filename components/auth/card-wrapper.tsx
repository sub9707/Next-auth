"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Header from "./header";
import Social from "./social";
import BackButton from "./back-button";
import { startTransition } from "react";
import { login } from "@/actions/login";

type CardWrapperProps = {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
};

function CardWrapper({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
}: CardWrapperProps) {
  const testLogin = () => {
    let values = {
      email: "admin@admin.com",
      password: "adminadmin",
    };
    startTransition(() => {
      login(values).then((data) => {
        //@ts-ignore
        setSuccess(data?.success);
      });
    });
  };
  return (
    <Card className="w-[400px] shadow-md bg-white dark:bg-gray-900">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter className="block">
        <BackButton label={backButtonLabel} href={backButtonHref} />
        <p
          className="text-center mt-3 text-sm cursor-pointer"
          onClick={testLogin}>
          로그인없이 사용
        </p>
      </CardFooter>
    </Card>
  );
}

export default CardWrapper;
