import React from "react";
import Styles from "./styles.module.scss";

interface Props {}
const ReadabilityConstraints: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => (
  <div
    {...props}
    className={[Styles.readabilityConstraints, props.className]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </div>
);
export default ReadabilityConstraints;
