import { NextRequest, NextResponse } from "next/server";

/**
 * Youtube videoId에 일치하는 CommentList data fetch
 * @param part : part 문자열
 * @param videoId : video Id 문자열
 * @returns
 */
export async function GET(request: NextRequest) {
  const reqURL = new URL(request.url);
  const part = reqURL.searchParams.get("part");
  const videoId = reqURL.searchParams.get("videoId");
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=${part}&videoId=${videoId}&key=${apiKey}`;
  try {
    const res = await fetch(url, {
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      throw new Error("네트워크 응답 오류");
    }
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching YouTube Comment data List:", error);
    return null;
  }
}
