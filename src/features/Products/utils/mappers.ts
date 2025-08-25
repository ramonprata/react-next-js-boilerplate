import { formatCurrency } from "@/src/shared/utils";
import { IProductDto, IProductView } from "../types/IProduct";
import { TProductsMappers } from "../types/TProductsMappers";

const transformProducts = (products: IProductDto[]): IProductView[] => {
  return products.map((product) => {
    return {
      ...product.content,
      id: product.content._uid,
      price: formatCurrency(product.content.price, "USD"),
      image: {
        filePath: product.content.image?.filename ?? "/placeholder-image.jpg",
        alt: product.content.image?.alt ?? product.content.name,
      },
    };
  });
};

const mappers: TProductsMappers = {
  getProducts: {
    transform: transformProducts,
  },
};

export default mappers;
