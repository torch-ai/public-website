import React, { FunctionComponent } from "react";
import clsx from "clsx";
import Style from "./styles.module.scss";

// Fullpagejs requires that all top level sections have the class "section". Why.
const FullpageSection: FunctionComponent<
  React.HTMLAttributes<HTMLDivElement>
> = ({ className, children, ...props }) => {
  return (
    <div
      className={clsx("section", className, Style.fullpageSection)}
      {...props}
    >
      {children}
    </div>
  );
};

export default FullpageSection;
