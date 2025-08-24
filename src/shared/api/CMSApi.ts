// storyblok.ts
import StoryblokClient from "storyblok-js-client";

class CMSApi {
  private static instance: CMSApi;
  private storyblokApi: StoryblokClient;

  private constructor() {
    this.storyblokApi = new StoryblokClient({
      accessToken: process.env.STORYBLOK_TOKEN,
    });
  }

  public static getInstance(): CMSApi {
    if (!CMSApi.instance) {
      CMSApi.instance = new CMSApi();
    }
    return CMSApi.instance;
  }

  public async getStory(slug: string, params: Record<string, unknown> = {}) {
    return this.storyblokApi.get(`cdn/stories/${slug}`, params);
  }

  public async getStories(params: Record<string, unknown> = {}) {
    return this.storyblokApi.get("cdn/stories", params);
  }

  public async getAssets(params: Record<string, unknown> = {}) {
    return this.storyblokApi.get("cdn/assets", params);
  }
}

export default CMSApi;
