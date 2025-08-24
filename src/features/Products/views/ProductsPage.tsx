import productsManager from "../services";
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
        <h3>Products (ISR)</h3>
        <p>Updated at: {lastUpdate}</p>
      </section>

      <ProductsList products={products} />
    </main>
  );
}

export default ProductsPage;
