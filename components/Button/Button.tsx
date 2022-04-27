import React from "react";
import clsx from "clsx";
import Styles from "./styles.module.scss";
import Link from "next/link";

export interface Props
  extends Partial<
    React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > &
      React.DetailedHTMLProps<
        React.AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
  > {
  isLink?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isBlock?: boolean;
}
const Button: React.FunctionComponent<Props> = ({
  isPrimary,
  isSecondary,
  isBlock,
  children,
  ...props
}) => {
  const className = clsx(Styles.default, props.className, {
    [Styles.isPrimary]: isPrimary,
    [Styles.isSecondary]: isSecondary,
    [Styles.isBlock]: isBlock,
  });

  return (
    <>
      {props.href ? (
        <Link href={props.href} passHref>
          <a {...props} className={className}>
            {children}
          </a>
        </Link>
      ) : (
        <button {...props} className={className}>
          {children}
        </button>
      )}
    </>
  );
};
export default Button;
