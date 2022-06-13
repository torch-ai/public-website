import React from "react";
import Grid from "../../styles/modules/grid.module.scss";
import clsx from "clsx";

interface Props {}
const Container: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => (
  <div
    {...props}
    className={clsx(Grid.container, Grid.marginCenter, props.className)}
  >
    {children}
  </div>
);
export default Container;
