import { ReactNode } from "react";
import styles from "./Reusable.module.css";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return <div className={styles.wrapper}>{children}</div>;
};

export default MaxWidthWrapper;
