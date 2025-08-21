import { storyblokInit, apiPlugin, getStoryblokApi } from "@storyblok/react";

let _init = false;

export function initStoryblok() {
  if (_init) return;
  storyblokInit({
    accessToken: process.env.STORYBLOK_TOKEN,
    use: [apiPlugin],
  });
  _init = true;
}

export function storyblokApi() {
  initStoryblok();
  return getStoryblokApi();
}
