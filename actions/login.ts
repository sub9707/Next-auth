"use server";
import { LoginSchema } from "@/schemas";
import * as z from "zod";

// 로그인 서버 액션
export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "로그인 정보를 확인해주세요." };
  }

  return { success: "전송 완료" };
};
