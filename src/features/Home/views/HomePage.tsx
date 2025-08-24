import { Suspense } from "react";
import Image from "next/image";
import { SourceLoader } from "@shared/components";
import { HighlightedProducts } from "../../Products";
import styles from "./styles/HomePage.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.horizontalScrollSection}>
        <Suspense fallback={<SourceLoader />}>
          <HighlightedProducts />
        </Suspense>
      </div>

      <section>Offers</section>
      <section>Brands</section>
    </main>
  );
}
