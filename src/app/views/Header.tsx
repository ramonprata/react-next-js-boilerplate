import React from "react";
import Image from "next/image";
import styles from "./styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header} id="header">
      <div className={styles.logo}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </div>
    </header>
  );
}
