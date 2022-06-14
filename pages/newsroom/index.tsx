import React, { ReactElement, useContext } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypeNews } from "../../generated/contentful";
import { getAllNewsEntries } from "../../contentful/client";
import { getHeadPageTitle } from "../../utils/meta";
import Head from "next/head";
import Footer from "../../components/Footer";
import NewsGrid from "../../components/News/NewsGrid";
import Style from "./styles.module.scss";
import LayoutContext from "../../components/layout/LayoutContext";
import { PageSettings } from "../../types/next";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export const pageSettings: PageSettings = {
  path: "/newsroom",
  linkContent: <>Newsroom</>,
};

export const getStaticProps: GetStaticProps<{
  news: TypeNews[];
}> = async () => {
  const news = await getAllNewsEntries();

  return {
    props: {
      news: news,
    },
  };
};

const Index = ({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  setNavColor("black");

  return (
    <>
      <Head>
        <title>{getHeadPageTitle(["Newsroom"])}</title>
      </Head>
      <ScrollToTop scrollType="window" />
      <div className={Style.newsContent}>
        <NewsGrid news={news} title="Newsroom" className={Style.newsItems} />
        <Footer />
      </div>
    </>
  );
};

export default Index;
