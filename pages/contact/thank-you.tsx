// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext } from "react";
import Footer from "../../components/Footer/Footer";
import Style from "./styles.module.scss";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  getCustomPageAndMicrocopy,
  getNewsEntries,
} from "../../contentful/client";
import pageIds from "../../contentful/pages";
import { getHeadPageTitle } from "../../utils/meta";
import Microcopy from "../../components/Microcopy/Microcopy";
import {
  TypeNews,
  TypeMicrocopy,
  TypeCustomPage,
} from "../../generated/contentful";
import NewsGrid from "../../components/News/NewsGrid";
import LayoutContext from "../../components/layout/LayoutContext";

export const getStaticProps: GetStaticProps<{
  news: TypeNews[];
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const news = await getNewsEntries({
    limit: 2,
  });

  const content = await getCustomPageAndMicrocopy(pageIds.contactCompleted);

  return {
    props: {
      news: news.items,
      microcopy: content.microcopy,
      customPage: content.customPage || null,
    },
  };
};

const ThankYou = ({
  customPage,
  microcopy,
  news,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  setNavColor("black");

  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle(
            !!customPage ? customPage.fields.pageHeadTitle : []
          )}
        </title>
      </Head>
      <div className={Style.thankyouContainer}>
        <h2>
          <Microcopy entries={microcopy} id="6zfV64GBqiJ03ucaMJpbP9" />
        </h2>
        <p>
          <Microcopy entries={microcopy} id="6t5vqERmlnhnW4qyMI77ZR" />
        </p>
        <div className={Style.newsContainer}>
          <h4>
            <Microcopy entries={microcopy} id="2zT9DC2jbq5prP54s0u8FS" />
          </h4>
          <NewsGrid news={news} showViewAllButton />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
