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
          Home (SSG). Go to{" "}
          <a style={{ fontSize: 20, color: "#5ce9ef" }} href="/products">
            /products
          </a>{" "}
          to see ISR.
        </p>
      </main>
    </div>
  );
}
