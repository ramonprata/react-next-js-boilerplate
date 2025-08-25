import { getStoryblokApi } from "@storyblok/react";
import { ASSETS_API_URL, STORIES_API_URL } from "./constants";

export class CMSApi {
  private static instance: CMSApi;
  private storyblokApi: ReturnType<typeof getStoryblokApi>;

  private constructor() {
    this.storyblokApi = getStoryblokApi();
  }

  public static getInstance(): CMSApi {
    if (!CMSApi.instance) {
      CMSApi.instance = new CMSApi();
    }
    return CMSApi.instance;
  }

  public async getStory(slug: string, params: Record<string, unknown> = {}) {
    return this.storyblokApi.get(`${STORIES_API_URL}/${slug}`, params);
  }

  public async getStories(params: Record<string, unknown> = {}) {
    return this.storyblokApi.get(STORIES_API_URL, params);
  }

  public async getAssets(params: Record<string, unknown> = {}) {
    return this.storyblokApi.get(ASSETS_API_URL, params);
  }
}
const cmsInstance = CMSApi.getInstance();

export default cmsInstance;
