import React from "react";
import styles from "./Reusable.module.css";
import clsx from "clsx";

interface Props {
  location?: "footer";
}

export const Logo = ({ location }: Props) => {
  const variant = `logo-${location}`;
  const classes = clsx({ [styles.logo]: true, [styles[variant]]: variant });

  return (
    <div className={classes}>
      <svg xmlns="http://www.w3.org/2000/svg" width="61" height="32">
        <path fillRule="evenodd" d="M60.082 5.878L44.408 32 28.735 5.878h31.347zM15.673 0l15.674 26.122H0L15.673 0z" />
      </svg>
    </div>
  );
};
