"use client";

import { useRouter } from "next/navigation";

type LoginButtonProps = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

function LoginButton({ children, mode, asChild }: LoginButtonProps) {
  const router = useRouter();
  const btnClickhandler = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>모달임</span>;
  }
  return (
    <span className="cursor-pointer" onClick={btnClickhandler}>
      {children}
    </span>
  );
}

export default LoginButton;
