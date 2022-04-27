import React from "react";
import Button, { Props as ButtonProps } from "../Button/Button";

interface Props extends ButtonProps {}
const PrimaryButton: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, ...props }) => (
  <Button isPrimary {...props}>
    {children}
  </Button>
);
export default PrimaryButton;
