import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// 이미 있으면 기존의 prisma 객체로, 없으면 새로 생성
export const db = globalThis.prisma || new PrismaClient();

// dev 환경에서의 prisma 설정
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
