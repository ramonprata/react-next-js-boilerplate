"use client";

import Image from "next/image";
import { IProductView } from "../types/IProduct";
import styles from "./styles/ProductCard.module.scss";
import { IconButton } from "@/src/shared/components";
import { FaHeart } from "react-icons/fa";
import { useProductsAction, useProductsState } from "../hooks/useProductsSlice";

export interface IProductCardProps {
  product: IProductView;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const addToFavorites = useProductsAction("addFavoriteProduct");
  const removeFromFavorites = useProductsAction("removeFavoriteProduct");
  const favoriteProducts = useProductsState("favoriteProducts");

  const isFavorite = favoriteProducts.includes(product.id);

  const handleClick = () => {
    if (isFavorite) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product.id);
    }
  };

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
      <div className={styles.cartFooter}>
        <div className={styles.productInfo}>
          <h6>{product.name}</h6>
          <p>{product.price}</p>
        </div>
        <IconButton
          active={isFavorite}
          icon={<FaHeart />}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default ProductCard;
