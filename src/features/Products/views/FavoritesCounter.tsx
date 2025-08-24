"use client";

import { FaHeart } from "react-icons/fa";
import styles from "./styles/FavoritesCounter.module.scss";
import { useProductsState } from "../hooks/useProductsSlice";

const FavoritesCounter = () => {
  const favoriteProducts = useProductsState("favoriteProducts");
  return (
    <div className={styles.container}>
      <span>{favoriteProducts.length}</span>
      <FaHeart />
    </div>
  );
};

export default FavoritesCounter;
