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
