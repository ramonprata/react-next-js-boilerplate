import { SourceLoader } from "@/src/shared/components";
import styles from "./styles/ProductsLoading.module.scss";

const ProductsLoading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <SourceLoader />
    </div>
  );
};

export default ProductsLoading;
