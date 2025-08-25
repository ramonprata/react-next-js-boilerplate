export interface ICMSStoryResponse<T> {
  data: {
    stories: Array<T>;
  };
}
