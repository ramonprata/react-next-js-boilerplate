/* eslint-disable @typescript-eslint/no-unused-vars */
import { IHttpClient } from "@shared/types/IHttpClient";
import { E_COM_API_ENTRY_POINTS } from "@shared/api";
import {
  HIGHLIGHTED_PRODUCTS_MOCK,
  PRODUCTS_MOCK,
} from "../utils/productsMock";
import { IProductDto } from "../types/IProduct";
import { IProductRepository } from "../types/IProductRepository";

export class ProductsRepository implements IProductRepository {
  constructor(private eComApi: IHttpClient) {}

  /**
   * Fetch all products from the e-commerce API.
   * @returns A promise that resolves to an array of product DTOs.
   */
  // async fetchProducts(): Promise<IProductDto[]> {
  //   const response = await this.eComApi.get<IProductDto[]>(
  //     E_COM_API_ENTRY_POINTS.GET_PRODUCTS
  //   );
  //   return response;
  // }

  /** TODO: Using mock data for demo purposes - remove it once the API is integrated */
  async fetchProducts(): Promise<IProductDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(PRODUCTS_MOCK);
      }, 2000);
    });
  }

  /** TODO: Using mock data for demo purposes - remove it once the API is integrated */
  async fetchHighlightedProducts(): Promise<IProductDto[]> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(HIGHLIGHTED_PRODUCTS_MOCK);
      }, 2000);
    });
  }
}
