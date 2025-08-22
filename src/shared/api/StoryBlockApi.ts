// storyblok.ts
import StoryblokClient from "storyblok-js-client";

class StoryblokService {
  private static instance: StoryblokService;
  private storyblokApi: StoryblokClient;

  private constructor() {
    this.storyblokApi = new StoryblokClient({
      accessToken: process.env.STORYBLOK_TOKEN,
    });
  }

  public static getInstance(): StoryblokService {
    if (!StoryblokService.instance) {
      StoryblokService.instance = new StoryblokService();
    }
    return StoryblokService.instance;
  }

  // Buscar uma story
  public async getStory(slug: string, params: Record<string, any> = {}) {
    return this.storyblokApi.get(`cdn/stories/${slug}`, params);
  }

  // Buscar várias stories
  public async getStories(params: Record<string, any> = {}) {
    return this.storyblokApi.get("cdn/stories", params);
  }

  // Buscar assets
  public async getAssets(params: Record<string, any> = {}) {
    return this.storyblokApi.get("cdn/assets", params);
  }
}

export default StoryblokService;
