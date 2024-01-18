import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "../components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-slate-950">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md",
            font.className
          )}>
          Next-Auth Tutorial
        </h1>
        <p className="text-white text-lg">Next-Auth 인증방식 학습 공간</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              로그인
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
