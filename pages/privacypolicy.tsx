// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useEffect } from "react";
import Footer from "../components/Footer";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypePage } from "../generated/contentful";
import { getPage } from "../contentful/client";
import Head from "next/head";
import ContentfulPage from "../components/ContentfulPage/ContentfulPage";

export const getStaticProps: GetStaticProps<{
  page: TypePage;
}> = async () => {
  // See: https://app.contentful.com/spaces/dtb5w0ega2aw/entries/5i3yZq0vX2fFCrA34EWxIb
  const page = await getPage("5i3yZq0vX2fFCrA34EWxIb");

  return {
    props: {
      page,
    },
  };
};

const Legal = ({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const {
    fields: { title },
  } = page;
  useEffect(() => {
    window?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title} | Torch.AI</title>
      </Head>
      <ContentfulPage page={page} />
      <Footer />
    </>
  );
};

export default Legal;
