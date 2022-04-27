import React from "react";
import clsx from "clsx";
import Styles from "./styles.module.scss";

interface Props {
  isSquare?: boolean;
  elevation?: number;
}
const Card: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ isSquare, elevation = 2, children, ...props }) => (
  <article
    {...props}
    className={clsx(
      Styles.card,
      props.className,
      Styles[`elevation${elevation}`],
      {
        [Styles.square]: isSquare,
      }
    )}
  >
    {children}
  </article>
);
export default Card;
