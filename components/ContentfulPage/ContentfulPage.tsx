import React, { ReactNode } from "react";
import { TypePage } from "../../generated/contentful";
import Styles from "./styles.module.scss";
import ContentfulContent from "../ContentfulContent/ContentfulContent";
import PageHeader from "../PageHeader/PageHeader";
import Container from "../Container/Container";
import ContentfulAsset from "../ContentfulAsset/ContentfulAsset";
import PageTitle from "../PageTitle/PageTitle";

interface Props {
  page: TypePage;
  isSharingEnabled?: boolean;
  /** Appears after the main content */
  mainChildren?: ReactNode;
  /** Appears after the aside content */
  asideChildren?: ReactNode;
}
const ContentfulPage: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, asideChildren, mainChildren, isSharingEnabled, page }) => {
  return (
    <>
      <section>
        <PageHeader
          isLightColorScheme={page?.fields.isHeaderBackgroundColorSchemaLight}
          style={{
            backgroundColor: page?.fields.headerBackgroundColor,
            backgroundImage: page?.fields.headerBackgroundImage?.fields.file.url
              ? `url(${page?.fields.headerBackgroundImage?.fields.file.url})`
              : undefined,
          }}
        >
          <div className={Styles.headerGrid}>
            <div className={Styles.headerGridTitle}>
              <PageTitle>{page?.fields.title || "Content not found"}</PageTitle>
              {page?.fields.subtitle && <p>{page.fields.subtitle}</p>}
            </div>
            {isSharingEnabled && (
              <div className={Styles.headerGridSharing}>Share:</div>
            )}
            {page?.fields.headerImage && (
              <div className={Styles.headerGridImage}>
                <ContentfulAsset asset={page.fields.headerImage} />
              </div>
            )}
          </div>
        </PageHeader>
        <Container className={Styles.contentGrid}>
          <main className={Styles.main}>
            {<ContentfulContent content={page.fields.content} />}
            {mainChildren}
          </main>
          <aside className={Styles.aside}>
            {page.fields.aside && (
              <ContentfulContent content={page.fields.aside} />
            )}
            {asideChildren}
          </aside>
        </Container>
        {children}
      </section>
    </>
  );
};

export default ContentfulPage;
