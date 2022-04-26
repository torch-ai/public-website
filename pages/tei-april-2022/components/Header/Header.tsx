// noinspection JSUnusedGlobalSymbols

import React from "react";
import { TypePage } from "../../../../generated/contentful";
import Styles from "./styles.module.scss";
import ContentfulAsset from "../../../../components/ContentfulAsset/ContentfulAsset";
import PageHeader from "../../../../components/PageHeader/PageHeader";

interface Props {
  page?: TypePage;
  isSharingEnabled?: boolean;
}
const Header: React.FunctionComponent<Props> = ({
  page,
  isSharingEnabled = true,
}) => {
  return (
    <PageHeader
      isLightColorScheme={page?.fields.isHeaderBackgroundColorSchemaLight}
      style={{
        backgroundColor: page?.fields.headerBackgroundColor,
        backgroundImage: page?.fields.headerBackgroundImage?.fields.file.url
          ? `url(${page?.fields.headerBackgroundImage?.fields.file.url})`
          : undefined,
      }}
    >
      <div className={Styles.grid}>
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
    </PageHeader>
  );
};

export default Header;
