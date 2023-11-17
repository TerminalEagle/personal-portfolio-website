import clsx from "clsx";
import { ReactNode } from "react";
import styles from "./Reusable.module.css";

interface Props {
  children?: ReactNode;
  type: "primary" | "tertiary";
  onClick?: () => void;
}

const Button = ({ type, children }: Props) => {
  const variant = `button-${type}`;
  const classes = clsx({ [styles.button]: true, [styles[variant]]: true });

  return <div className={classes}>{children}</div>;
};

export default Button;
