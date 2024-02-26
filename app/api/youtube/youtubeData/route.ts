import { NextRequest, NextResponse } from "next/server";

/**
 * Youtube query_string 관련 영상 list fetch
 * @param query_string : 검색어 문자열
 * @returns
 */
export async function GET(request: NextRequest) {
  const reqURL = new URL(request.url);
  const query_string = reqURL.searchParams.get("query_string");
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${query_string}`;

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
    console.error("Error fetching YouTube data:", error);
    return NextResponse.json({ error }, { status: 400 });
  }
}
