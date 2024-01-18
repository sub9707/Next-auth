// next-auth가 아닌 nextjs의 포함구성임
import authConfig from "@/auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  console.log("ROUTE:", req.nextUrl.pathname);
});

// matcher 해당 경로로 접근 시, auth 함수를 호출함(server side)
// 유효한 모든 경로를 아래처럼 가져올 시, 위의 auth에서 로그인 여부, public/private 등의 필터 활동이 가능해진다.
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
