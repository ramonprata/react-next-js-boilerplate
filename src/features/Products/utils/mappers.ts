import { IProductDto, IProductView } from "../types/IProduct";
import { TProductsMappers } from "../types/TProductsMappers";

const transformProducts = (products: IProductDto[]): IProductView[] => {
  return products.map((product) => ({
    ...product.content,
    price: Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(product.content.price),
    image: {
      filePath: product.content.image?.filename ?? "/placeholder-image.jpg",
      alt: product.content.image?.alt ?? product.content.name,
    },
  }));
};

const mappers: TProductsMappers = {
  getProducts: {
    transform: transformProducts,
  },
};

export default mappers;
