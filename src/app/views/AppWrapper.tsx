import { PropsWithChildren } from "react";
import styles from "./styles/AppWrapper.module.scss";
import Header from "./Header";
import NavigationTabs from "./NavigationTabs";

const AppWrapper = ({ children }: PropsWithChildren) => {
  return (
    <div className={styles.container}>
      <div className={styles.sticky}>
        <Header />
        <NavigationTabs />
      </div>
      <div className={styles.rootLayout}>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default AppWrapper;
