import { IProductView } from "../types/IProduct";
import ProductCard from "./ProductCard";
import styles from "./styles/ProductsList.module.scss";

export interface IProductsListProps {
  products: IProductView[];
}

const ProductsList = ({ products }: IProductsListProps) => {
  // implement ProductsList filters, sorting, search, etc..

  return (
    <div className={styles.productsList}>
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductsList;
