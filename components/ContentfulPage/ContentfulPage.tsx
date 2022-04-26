import React from "react";
import { TypePage } from "../../generated/contentful";
import Styles from "./styles.module.scss";
import ContentfulContent from "../ContentfulContent/ContentfulContent";
import PageHeader from "../PageHeader/PageHeader";
import Container from "../Container/Container";
import ContentfulAsset from "../ContentfulAsset/ContentfulAsset";

interface Props {
  page: TypePage;
  isSharingEnabled?: boolean;
}
const ContentfulPage: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, isSharingEnabled, page }) => {
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
              <h3>{page?.fields.title || "Content not found"}</h3>
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
          </main>
          <aside className={Styles.aside}>
            {page.fields.aside && (
              <ContentfulContent content={page.fields.aside} />
            )}
          </aside>
        </Container>
        <Container>{children}</Container>
      </section>
    </>
  );
};

export default ContentfulPage;
