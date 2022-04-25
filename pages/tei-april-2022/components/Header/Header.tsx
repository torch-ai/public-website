// noinspection JSUnusedGlobalSymbols

import React, { useContext } from "react";
import { TypePage } from "../../../../generated/contentful";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import ReadabilityConstraints from "../../../../components/ReadabilityConstraints/ReadabilityConstraints";
import LayoutContext from "../../../../components/layout/LayoutContext";
import Styles from "./styles.module.scss";
import ForresterReport from "./forrester-report.png";

interface Props {
  page: TypePage;
}
const Header: React.FunctionComponent<Props> = ({ page }) => {
  const {
    fields: { title, subtitle },
  } = page;
  const { setNavColor } = useContext(LayoutContext);

  return (
    <header className={Styles.header}>
      <InView
        as="div"
        onChange={(inView) => setNavColor(inView ? "white" : "black")}
      >
        <ReadabilityConstraints>
          <div className={Styles.container}>
            <div className={Styles.Title}>
              <h3>{title}</h3>
              {subtitle && <p>{subtitle}</p>}
            </div>
            <div className={Styles.Share}>Share:</div>
            <div className={Styles.Image}>
              <Image
                src={ForresterReport}
                alt={"Title page of the Forrester economic impact report"}
              />
            </div>
          </div>
        </ReadabilityConstraints>
      </InView>
    </header>
  );
};

export default Header;
