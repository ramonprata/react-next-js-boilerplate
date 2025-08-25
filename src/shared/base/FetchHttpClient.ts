import { IHttpClient } from "../types/IHttpClient";

interface IFetchHttpClientConfig extends RequestInit {
  baseURL?: string;
}

export class FetchHttpClient implements IHttpClient {
  private static instance: FetchHttpClient;
  private defaultConfig: IFetchHttpClientConfig;

  private constructor(defaultConfig: IFetchHttpClientConfig = {}) {
    this.defaultConfig = defaultConfig;
  }

  public static getInstance(
    defaultConfig: IFetchHttpClientConfig = {}
  ): FetchHttpClient {
    if (!FetchHttpClient.instance) {
      FetchHttpClient.instance = new FetchHttpClient(defaultConfig);
    } else {
      FetchHttpClient.instance.defaultConfig = {
        ...FetchHttpClient.instance.defaultConfig,
        ...defaultConfig,
      };
    }
    return FetchHttpClient.instance;
  }

  private mergeOptions(
    options: RequestInit,
    method: string,
    body?: unknown
  ): RequestInit {
    const headers = {
      ...this.defaultConfig.headers,
      ...options.headers,
    };
    return {
      ...this.defaultConfig,
      ...options,
      method,
      headers,
      ...(body ? { body: JSON.stringify(body) } : {}),
    };
  }

  private buildURL(url: string): string {
    if (url.startsWith("http://") || url.startsWith("https://")) return url;

    const baseURL = this.defaultConfig.baseURL?.replace(/\/$/, "") || "";
    const path = url.replace(/^\//, "");
    return `${baseURL}/${path}`;
  }

  async get<T>(url: string, options: RequestInit = {}): Promise<T> {
    const fullUrl = this.buildURL(url);
    const res = await fetch(fullUrl, this.mergeOptions(options, "GET"));
    if (!res.ok) throw new Error(`GET ${fullUrl} failed: ${res.status}`);
    return res.json();
  }

  async post<T>(
    url: string,
    body: unknown,
    options: RequestInit = {}
  ): Promise<T> {
    const fullUrl = this.buildURL(url);
    const res = await fetch(fullUrl, this.mergeOptions(options, "POST", body));
    if (!res.ok) throw new Error(`POST ${fullUrl} failed: ${res.status}`);
    return res.json();
  }

  async put<T>(
    url: string,
    body: unknown,
    options: RequestInit = {}
  ): Promise<T> {
    const fullUrl = this.buildURL(url);
    const res = await fetch(fullUrl, this.mergeOptions(options, "PUT", body));
    if (!res.ok) throw new Error(`PUT ${fullUrl} failed: ${res.status}`);
    return res.json();
  }

  async delete<T>(url: string, options: RequestInit = {}): Promise<T> {
    const fullUrl = this.buildURL(url);
    const res = await fetch(fullUrl, this.mergeOptions(options, "DELETE"));
    if (!res.ok) throw new Error(`DELETE ${fullUrl} failed: ${res.status}`);
    return res.json();
  }
}
