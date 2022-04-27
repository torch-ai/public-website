import React from "react";
import clsx from "clsx";
import Styles from "./styles.module.scss";

interface Props {
  isPrimary?: boolean;
  isSecondary?: boolean;
}
const Button: React.FunctionComponent<
  Props &
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >
> = ({ isPrimary, isSecondary, children, ...props }) => (
  <button
    {...props}
    className={clsx(Styles.default, props.className, {
      [Styles.isPrimary]: isPrimary,
      [Styles.isSecondary]: isSecondary,
    })}
  >
    {children}
  </button>
);
export default Button;
