// Video Types
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

// Comments Types
export type YoutubeCommentsResultType = {
  etag: string;
  items: YoutubeCommentItemType[];
  nextPageToken: string;
  pageInfo: {
    resultsPerPage: number;
    totalResults: number;
  };
};

export const YoutubeCommentsResult_Init: YoutubeCommentsResultType = {
  etag: "",
  items: [],
  nextPageToken: "",
  pageInfo: {
    resultsPerPage: 0,
    totalResults: 0,
  },
};

export type YoutubeCommentItemType = {
  etag: string;
  id: string;
  kind: string;
  snippet: SnippetType;
};

type SnippetType = {
  channelId: string;
  topLevelComment: TopLevelCommentType;
  totalReplyCount: number;
};

type TopLevelCommentType = {
  etag: string;
  id: string;
  kind: string;
  snippet: TopLevelCommentTypeSnippet;
};

type TopLevelCommentTypeSnippet = {
  authorChannelId: { value: string };
  authorChannelUrl: string;
  authorDisplayName: string;
  authorProfileImageUrl: string;
  likeCount: number;
  publishedAt: string;
  textOriginal: string;
};
