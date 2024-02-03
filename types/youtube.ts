export type YoutubeSearchResults = {
  items: YoutubeSearchResultData[];
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
  regionCode: string;
};

export const YoutubeResultInitialState: YoutubeSearchResults = {
  items: [],
  nextPageToken: "",
  pageInfo: {
    resultsPerPage: 0,
    totalResults: 0,
  },
  regionCode: "KR",
};

export type YoutubeSearchResultData = {
  etag: string;
  id: {
    kind: string;
    videoId: string;
  };
  snippet: {
    title: string;
    channelId: string;
    channelTitle: string;
    description: string;
    publishTime: string;
    thumbnails: {
      default: YoutubeThumbnailProperty;
      high: YoutubeThumbnailProperty;
      medium: YoutubeThumbnailProperty;
    };
  };
};

type YoutubeThumbnailProperty = {
  url: string;
  width: number;
  height: number;
};
