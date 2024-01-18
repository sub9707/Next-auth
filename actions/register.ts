"use server";
import { RegisterSchema } from "@/schemas";
import * as z from "zod";

// 회원가입 서버 액션
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "회원가입 정보를 확인해주세요." };
  }

  return { success: "전송 완료" };
};
