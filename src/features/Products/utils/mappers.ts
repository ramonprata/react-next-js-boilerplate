import { formatCurrency } from "@/src/shared/utils";
import { IProductDto, IProductView } from "../types/IProduct";
import { TProductsMappers } from "../types/TProductsMappers";

const transformProducts = (products: IProductDto[]): IProductView[] => {
  return products.map((product) => ({
    ...product,
    price: formatCurrency(product.price, "USD"),
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
