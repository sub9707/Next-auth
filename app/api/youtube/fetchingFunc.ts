/**
 * Youtube query_string 관련 영상 list fetch
 * @param query_string : 검색어 문자열
 * @returns
 */
export async function fetchYoutubeData(query_string: string) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&part=snippet&type=video&q=${query_string}`;

  try {
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) {
      throw new Error("네트워크 응답 오류");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching YouTube data:", error);
    return null;
  }
}

/**
 * Youtube videoId에 일치하는 CommentList data fetch
 * @param part : part 문자열
 * @param videoId : video Id 문자열
 * @returns
 */
export async function fetchCommentList(part: string, videoId: string) {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=${part}&videoId=${videoId}&key=${apiKey}`;
  try {
    const res = await fetch(url, { cache: "force-cache" });
    if (!res.ok) {
      throw new Error("네트워크 응답 오류");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching YouTube Comment data List:", error);
    return null;
  }
}
