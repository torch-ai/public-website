// noinspection JSUnusedGlobalSymbols

import React from "react";
import Styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {}
const PageTitle: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLHeadingElement>
> = ({ children, ...props }) => {
  return <h1 className={clsx(Styles.default, props.className)}>{children}</h1>;
};

export default PageTitle;
