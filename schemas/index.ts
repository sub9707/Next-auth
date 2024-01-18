import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "이메일을 입력해주세요." }),
  password: z.string().min(1, {
    message: "비밀번호를 입력해주세요.",
  }),
});
export const RegisterSchema = z.object({
  email: z.string().email({ message: "이메일을 입력해주세요." }),
  password: z.string().min(5, {
    message: "비밀번호는 최소 6글자여야합니다.",
  }),
  name: z.string().min(1, {
    message: "이름을 입력해주세요.",
  }),
});
