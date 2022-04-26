import React from "react";
import { TypePage } from "../../generated/contentful";
import Styles from "./styles.module.scss";
import ContentfulContent from "../ContentfulContent/ContentfulContent";
import PageHeader from "../PageHeader/PageHeader";
import Container from "../Container/Container";

interface Props {
  page: TypePage;
}
const ContentfulPage: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, page }) => {
  const {
    fields: { title, content, subtitle },
  } = page;

  return (
    <>
      <section>
        <PageHeader className={Styles.header}>
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </PageHeader>
        <Container>
          <ContentfulContent className={Styles.content} content={content} />
          {children}
        </Container>
      </section>
    </>
  );
};

export default ContentfulPage;
