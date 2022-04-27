// noinspection JSUnusedGlobalSymbols

import React from "react";
import Styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {}
const PageSubtitle: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, ...props }) => {
  return (
    <div className={clsx(Styles.default, props.className)}>{children}</div>
  );
};

export default PageSubtitle;
