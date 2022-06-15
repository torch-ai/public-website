// noinspection JSUnusedGlobalSymbols

import React, { ReactElement } from "react";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypePage } from "../../generated/contentful";
import { getPage } from "../../contentful/client";
import ContentfulPage from "../../components/ContentfulPage/ContentfulPage";
import { getHeadPageTitle } from "../../utils/meta";

export const getStaticProps: GetStaticProps<{
  page: TypePage;
}> = async () => {
  // See: https://app.contentful.com/spaces/dtb5w0ega2aw/entries/7iwdVdgUAl4bzvQMzWl3Ww
  const page = await getPage("7iwdVdgUAl4bzvQMzWl3Ww");

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
    fields: { title },
  } = page;
  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle([title, "Unlock your potential", "Talk to us"])}
        </title>
      </Head>
      <ContentfulPage page={page} />
      <Footer />
    </>
  );
};

export default ThankYou;
