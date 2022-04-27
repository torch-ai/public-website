// noinspection JSUnusedGlobalSymbols

import React, { useContext } from "react";
import { InView } from "react-intersection-observer";
import LayoutContext from "../layout/LayoutContext";
import Container from "../Container/Container";
import Styles from "./styles.module.scss";
import clsx from "clsx";

interface Props {
  isLightColorScheme?: boolean;
}
const PageHeader: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ isLightColorScheme, children, ...props }) => {
  const { setNavColor } = useContext(LayoutContext);

  return (
    <header
      {...props}
      className={clsx(Styles.header, props.className, {
        [Styles.isLightColorScheme]: isLightColorScheme,
      })}
    >
      <InView
        as="div"
        onChange={(inView) => setNavColor(inView ? "white" : "black")}
      >
        <Container>{children}</Container>
      </InView>
    </header>
  );
};

export default PageHeader;
