import React, { ReactNode } from "react";
import { TypePage } from "../../generated/contentful";
import Styles from "./styles.module.scss";
import ContentfulContent from "../ContentfulContent/ContentfulContent";
import PageHeader from "../PageHeader/PageHeader";
import Container from "../Container/Container";
import ContentfulAsset from "../ContentfulAsset/ContentfulAsset";
import PageTitle from "../PageTitle/PageTitle";
import PageSubtitle from "../PageSubtitle/PageSubtitle";
import clsx from "clsx";
import Sharing from "../Sharing/Sharing";

interface Props {
  page: TypePage;
  sharingUrl?: string;
  /** Appears after the main content */
  mainChildren?: ReactNode;
  /** Appears after the aside content */
  asideChildren?: ReactNode;
}
const ContentfulPage: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, asideChildren, mainChildren, sharingUrl = null, page }) => {
  const hasHeaderImage = !!page?.fields.headerImage;
  const hasAside = asideChildren || page.fields.aside;

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
          <div
            className={clsx(Styles.headerGrid, {
              [Styles.headerGridHasImage]: hasHeaderImage,
            })}
          >
            <div className={Styles.headerGridTitle}>
              <PageTitle>{page?.fields.title || "Content not found"}</PageTitle>
              {page?.fields.subtitle && (
                <PageSubtitle>{page.fields.subtitle}</PageSubtitle>
              )}
            </div>
            {hasHeaderImage && (
              <div className={Styles.headerGridImage}>
                <ContentfulAsset asset={page.fields.headerImage} />
              </div>
            )}
          </div>
          {sharingUrl && (
            <Sharing postText={page.fields.title} url={sharingUrl} />
          )}
        </PageHeader>
        <Container
          className={clsx(Styles.contentGrid, {
            [Styles.contentGridHasAside]: hasAside,
          })}
        >
          <main className={Styles.main}>
            {<ContentfulContent content={page.fields.content} />}
            {mainChildren}
          </main>

          {hasAside && (
            <aside className={Styles.aside}>
              <ContentfulContent content={page.fields.aside} />
              {asideChildren}
            </aside>
          )}
        </Container>
        {children}
      </section>
    </>
  );
};

export default ContentfulPage;
