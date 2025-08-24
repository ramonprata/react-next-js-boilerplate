import { Suspense } from "react";
import Image from "next/image";
import { SourceLoader } from "@shared/components";
import { HighlightedProducts } from "../../Products";
import styles from "./styles/HomePage.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />

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
