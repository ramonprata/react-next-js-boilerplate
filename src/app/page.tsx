import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <h1>POC E-commerce</h1>
        <p>
          Home (SSG). Vá para <a href="/products">/products</a> para ver ISR.
        </p>
      </main>
    </div>
  );
}
