import React from "react";
import clsx from "clsx";
import Styles from "./styles.module.scss";

interface Props {
  isSquare?: boolean;
  hasBorder?: boolean;
  elevation?: number;
}
const Card: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ isSquare, hasBorder = true, elevation = 2, children, ...props }) => (
  <article
    {...props}
    className={clsx(Styles.card, props.className, {
      [Styles.square]: isSquare,
      [Styles.border]: hasBorder,
      [Styles[`elevation${elevation}`]]: elevation,
    })}
  >
    {children}
  </article>
);
export default Card;
