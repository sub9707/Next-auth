"use server";
import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import * as z from "zod";
import bcrypt from "bcrypt";
import { getUserByEmail } from "@/data/user";

// 회원가입 서버 액션
export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "회원가입 정보를 확인해주세요." };
  }

  const { email, name, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  // 가입된 유저정보 체크
  const existingUser = await getUserByEmail(email);

  if (existingUser) {
    return { error: "이미 존재하는 이메일입니다." };
  }

  // 유저 생성
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return { success: "회원가입 완료" };
};
