import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "이메일을 입력해주세요." }),
  password: z.string().min(1, {
    message: "패스워드를 입력해주세요.",
  }),
});
