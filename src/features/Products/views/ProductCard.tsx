import Image from "next/image";
import { IProductView } from "../types/IProduct";
import styles from "./styles/ProductCard.module.scss";

export interface IProductCardProps {
  product: IProductView;
}

const ProductCard = ({ product }: IProductCardProps) => {
  return (
    <div className={styles.card}>
      {product.image?.filePath && (
        <div className={styles.productImageWrapper}>
          <Image
            className={styles.productImage}
            src={product.image.filePath}
            alt={product.image.alt ?? product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 300px"
          />
        </div>
      )}
      <div className={styles.productInfo}>
        <h6>{product.name}</h6>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
