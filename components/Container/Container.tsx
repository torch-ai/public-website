import React from "react";
import Grid from "../Grid/Grid";

interface Props {}
const Container: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => (
  <Grid container marginCenter className={props.className} {...props}>
    {children}
  </Grid>
);
export default Container;
