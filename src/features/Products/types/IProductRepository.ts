import { IProductDto } from "./IProduct";

export interface IProductRepository {
  fetchProducts(): Promise<IProductDto[]>;
  fetchHighlightedProducts(): Promise<IProductDto[]>;
}
