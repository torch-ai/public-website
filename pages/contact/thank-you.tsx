// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext } from "react";
import Grid from "../../styles/modules/grid.module.scss";
import Style from "../../styles/modules/contact.module.scss";
import Footer from "../../components/Footer";
import Head from "next/head";
import { InView } from "react-intersection-observer";
import LayoutContext from "../../components/layout/LayoutContext";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypePage } from "../../generated/contentful";
import { getPageEntry } from "../../contentful/client";
import ContentfulContent from "../../components/ContentfulContent";

export const getStaticProps: GetStaticProps<{
  page: TypePage;
}> = async () => {
  // See: https://app.contentful.com/spaces/dtb5w0ega2aw/entries/7iwdVdgUAl4bzvQMzWl3Ww
  const page = await getPageEntry("7iwdVdgUAl4bzvQMzWl3Ww");

  return {
    props: {
      page,
    },
  };
};

const ThankYou = ({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const {
    fields: { title, content, subtitle },
  } = page;
  const { setNavColor } = useContext(LayoutContext);

  return (
    <>
      <Head>
        <title>{title} | Unlock Your Potential | Talk to Us | Torch.AI</title>
      </Head>
      <section className={`${Style["contact__container"]}`}>
        <InView
          as="div"
          onChange={(inView) => setNavColor(inView ? "black" : "white")}
        >
          <div className={`${Grid["container"]} ${Grid["margin_center"]}`}>
            <div className={`${Grid["row"]}`}>
              <div
                className={`${Grid["col-xs-12"]} ${Style["contact__title"]}`}
              >
                <h2>{title}</h2>
                {subtitle && <p>{subtitle}</p>}
              </div>
            </div>
            <ContentfulContent content={content} />
          </div>
        </InView>
      </section>
      <Footer />
    </>
  );
};

export default ThankYou;
