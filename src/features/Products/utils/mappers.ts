import { IProductDto, IProductView } from "../types/IProduct";
import { TProductsMappers } from "../types/TProductsMappers";

const transformProducts = (products: IProductDto[]): IProductView[] => {
  return products.map((product) => ({
    ...product,
    price: Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(product.price),
    image: {
      filePath: product.image?.filePath ?? "/placeholder-image.jpg",
      alt: product.image?.alt ?? product.name,
    },
  }));
};

const mappers: TProductsMappers = {
  getProducts: {
    transform: transformProducts,
  },
};

export default mappers;
