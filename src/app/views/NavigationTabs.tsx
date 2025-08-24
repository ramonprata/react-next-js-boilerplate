"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./styles/NavigationTabs.module.scss";
import { NAVIGATION_TABS } from "../utils/constants";

const NavigationTabs = () => {
  const pathname = usePathname();

  return (
    <div className={styles.navigationContainer}>
      <div className={styles.tablist}>
        {NAVIGATION_TABS.map((tab) => (
          <Link
            key={tab.id}
            href={tab.path}
            className={`${styles.tab} ${
              pathname === tab.path ? styles.active : ""
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavigationTabs;
