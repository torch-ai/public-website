// noinspection JSUnusedGlobalSymbols

import React, { useContext } from "react";
import { TypePage } from "../../../../generated/contentful";
import { InView } from "react-intersection-observer";
import ReadabilityConstraints from "../../../../components/ReadabilityConstraints/ReadabilityConstraints";
import LayoutContext from "../../../../components/layout/LayoutContext";
import Styles from "./styles.module.scss";
import ContentfulAsset from "../../../../components/ContentfulAsset/ContentfulAsset";
import clsx from "clsx";

interface Props {
  page?: TypePage;
  isSharingEnabled?: boolean;
}
const Header: React.FunctionComponent<Props> = ({
  page,
  isSharingEnabled = true,
}) => {
  const { setNavColor } = useContext(LayoutContext);

  return (
    <header
      className={clsx(Styles.header, {
        [Styles.headerIsLightColorScheme]:
          page?.fields.isHeaderBackgroundColorSchemaLight,
      })}
      style={{
        backgroundColor: page?.fields.headerBackgroundColor,
        backgroundImage: page?.fields.headerBackgroundImage?.fields.file.url
          ? `url(${page?.fields.headerBackgroundImage?.fields.file.url})`
          : undefined,
      }}
    >
      <InView
        as="div"
        onChange={(inView) => setNavColor(inView ? "white" : "black")}
      >
        <ReadabilityConstraints>
          <div className={Styles.container}>
            <div className={Styles.title}>
              <h3>{page?.fields.title || "Content not found"}</h3>
              {page?.fields.subtitle && <p>{page.fields.subtitle}</p>}
            </div>
            {isSharingEnabled && <div className={Styles.sharing}>Share:</div>}
            {page?.fields.headerImage && (
              <div className={Styles.image}>
                <ContentfulAsset asset={page.fields.headerImage} />
              </div>
            )}
          </div>
        </ReadabilityConstraints>
      </InView>
    </header>
  );
};

export default Header;
