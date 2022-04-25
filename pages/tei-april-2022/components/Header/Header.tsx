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
  page: TypePage;
  isSharingEnabled?: boolean;
}
const Header: React.FunctionComponent<Props> = ({
  page,
  isSharingEnabled = true,
}) => {
  const {
    fields: {
      title,
      subtitle,
      headerImage,
      headerBackgroundImage,
      headerBackgroundColor,
      isHeaderBackgroundColorSchemaLight,
    },
  } = page;
  const { setNavColor } = useContext(LayoutContext);
  console.info("headerBackgroundImage", headerBackgroundImage?.fields.file.url);

  return (
    <header
      className={clsx(Styles.header, {
        [Styles.headerIsLightColorScheme]: isHeaderBackgroundColorSchemaLight,
      })}
      style={{
        backgroundColor: headerBackgroundColor,
        backgroundImage: headerBackgroundImage?.fields.file.url
          ? `url(${headerBackgroundImage?.fields.file.url})`
          : undefined,
      }}
    >
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
            {isSharingEnabled && <div className={Styles.Share}>Share:</div>}
            {headerImage && (
              <div className={Styles.Image}>
                <ContentfulAsset asset={headerImage} />
              </div>
            )}
          </div>
        </ReadabilityConstraints>
      </InView>
    </header>
  );
};

export default Header;
