import Link from "next/link";

import { HorizontalCardList } from "@shared/components";
import productsManager from "../services";
import ProductCard from "./ProductCard";
import styles from "./styles/HighlightedProducts.module.scss";

const HighlightedProducts = async () => {
  const highlightedProducts = await productsManager.getHighlightedProducts();

  const cards = highlightedProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  return (
    <div className={styles.highlightedProducts}>
      <HorizontalCardList cards={cards} />
      <Link className={styles.seeAllLink} href="/products">
        See All Products
      </Link>
    </div>
  );
};

export default HighlightedProducts;
