import React from "react";
import clsx from "clsx";
import Styles from "./styles.module.scss";

interface Props {}
const ContentfulContent: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => {
  return (
    <div {...props} className={clsx(Styles.prose, props.className)}>
      {children}
    </div>
  );
};
export default ContentfulContent;
