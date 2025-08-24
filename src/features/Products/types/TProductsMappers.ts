import { IProductDto, IProductView } from "./IProduct";

export type TProductsMappers = {
  getProducts: {
    transform: (products: IProductDto[]) => IProductView[];
  };
};
