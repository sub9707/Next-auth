import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("userId");
    const paid = parseInt(searchParams.get("paid")!);

    const user = await db.user.findUnique({
      where: {
        id: userId!,
      },
    });
    if (!user) {
      return new Response(`사용자를 찾을 수 없습니다.`, {
        status: 404,
      });
    }
    // 잔고 수정
    await db.user.update({
      where: {
        id: userId!,
      },
      data: {
        balance: user.balance + paid,
      },
    });
  } catch (error: any) {
    return new Response(`결제 error: ${error.message}`, {
      status: 400,
    });
  }
  redirect("/playground");
}
