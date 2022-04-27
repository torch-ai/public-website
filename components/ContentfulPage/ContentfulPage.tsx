import React, { useContext } from "react";
import { TypePage } from "../../generated/contentful";
import Styles from "./styles.module.scss";
import { InView } from "react-intersection-observer";
import ContentfulContent from "../ContentfulContent/ContentfulContent";
import LayoutContext from "../layout/LayoutContext";
import ReadabilityConstraints from "../ReadabilityConstraints/ReadabilityConstraints";

interface Props {
  page: TypePage;
}
const ContentfulPage: React.FunctionComponent<
  Props & React.HTMLAttributes<HTMLDivElement>
> = ({ children, page }) => {
  const {
    fields: { title, content, subtitle },
  } = page;
  const { setNavColor } = useContext(LayoutContext);

  return (
    <>
      <section>
        <header className={Styles.header}>
          <InView
            as="div"
            onChange={(inView) => setNavColor(inView ? "white" : "black")}
          >
            <ReadabilityConstraints>
              <h3>{title}</h3>
              {subtitle && <p>{subtitle}</p>}
            </ReadabilityConstraints>
          </InView>
        </header>
        <ContentfulContent className={Styles.content} content={content} />
        {children}
      </section>
    </>
  );
};

export default ContentfulPage;
