// prisma -> middleware 트리거 용도
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import Kakao from "next-auth/providers/kakao";

import type { NextAuthConfig } from "next-auth";

export default {
  providers: [GitHub, Google, Kakao],
} satisfies NextAuthConfig;
