import { IProductDto } from "../types/IProduct";
import { IProductRepository } from "../types/IProductRepository";
import { CMSApi, CMS_STORIES_DEFAULT_PARAMS } from "@/src/shared/api";

export class ProductsRepository implements IProductRepository {
  constructor(private cmsClientApi: CMSApi) {}

  async fetchProducts(): Promise<IProductDto[]> {
    const { data } = await this.cmsClientApi.getStories({
      starts_with: CMS_STORIES_DEFAULT_PARAMS.PRODUCTS.SLUG,
      version: CMS_STORIES_DEFAULT_PARAMS.PRODUCTS.VERSION,
    });
    return data.stories as unknown as IProductDto[];
  }

  async fetchHighlightedProducts(): Promise<IProductDto[]> {
    const { data } = await this.cmsClientApi.getStories({
      starts_with: CMS_STORIES_DEFAULT_PARAMS.PRODUCTS.SLUG,
      version: CMS_STORIES_DEFAULT_PARAMS.PRODUCTS.VERSION,
    });
    return data.stories as unknown as IProductDto[];
  }
}
