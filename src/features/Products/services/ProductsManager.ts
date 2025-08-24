import { IProductView } from "../types/IProduct";
import { IProductRepository } from "../types/IProductRepository";
import { TProductsMappers } from "../types/TProductsMappers";

export class ProductsManager {
  private repository: IProductRepository;
  private mappers: TProductsMappers;

  constructor(_repository: IProductRepository, _mappers: TProductsMappers) {
    this.repository = _repository;
    this.mappers = _mappers;
  }

  async getProducts(): Promise<IProductView[]> {
    const data = await this.repository.fetchProducts();
    return this.mappers.getProducts.transform(data);
  }

  async getHighlightedProducts(): Promise<IProductView[]> {
    const data = await this.repository.fetchHighlightedProducts();
    return this.mappers.getProducts.transform(data);
  }
}
