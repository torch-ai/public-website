// noinspection JSUnusedGlobalSymbols

import React, { ReactElement } from "react";
import Footer from "../../components/Footer";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypePage } from "../../generated/contentful";
import { getPage } from "../../contentful/client";
import ContentfulPage from "../../components/ContentfulPage/ContentfulPage";
import Form from "./components/Form/Form";

export const getStaticProps: GetStaticProps<{
  page?: TypePage;
}> = async () => {
  // See: https://app.contentful.com/spaces/dtb5w0ega2aw/entries/4dnKUurLPWlBXCQojRTIGA
  const page = await getPage("4dnKUurLPWlBXCQojRTIGA");

  return {
    props: {
      page,
    },
  };
};

const Index = ({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  return (
    <>
      <Head>
        <title>{page.fields.title || "Content not found"} | Torch.AI</title>
      </Head>
      <ContentfulPage page={page} asideChildren={<Form />} />
      <Footer />
    </>
  );
};

export default Index;
