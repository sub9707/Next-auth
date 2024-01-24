import Header from "@/components/auth/header";
import BackButton from "./back-button";
import { Card, CardFooter, CardHeader } from "@/components/ui/card";

function ErrorCard() {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label="진행 중 문제가 발생했습니다." />
      </CardHeader>
      <CardFooter>
        <BackButton label="로그인 돌아가기" href="/auth/login" />
      </CardFooter>
    </Card>
  );
}

export default ErrorCard;
