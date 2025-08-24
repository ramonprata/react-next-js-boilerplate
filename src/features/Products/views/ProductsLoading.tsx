import { SourceLoader } from "@/src/shared/components";
import styles from "./styles/ProductsLoading.module.scss";

const ProductsLoading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <SourceLoader />
      <p>Loading Products...</p>
    </div>
  );
};

export default ProductsLoading;
