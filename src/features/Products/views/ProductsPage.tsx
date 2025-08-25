import productsManager from "../services";
import FavoritesCounter from "./FavoritesCounter";
import ProductsList from "./ProductsList";
import styles from "./styles/ProductsPage.module.scss";

async function ProductsPage() {
  const products = await productsManager.getProducts();

  const lastUpdate = new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "medium",
  }).format(new Date());

  return (
    <main>
      <section className={styles.headerSection}>
        <div>
          <h3>Products </h3>
          <p>{lastUpdate}</p>
        </div>
        <FavoritesCounter />
      </section>
      <ProductsList products={products} />
    </main>
  );
}

export default ProductsPage;
