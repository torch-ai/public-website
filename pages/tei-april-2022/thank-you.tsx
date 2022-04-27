// noinspection JSUnusedGlobalSymbols

import React, { ReactElement } from "react";
import Footer from "../../components/Footer";
import Head from "next/head";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypePage } from "../../generated/contentful";
import { getPage } from "../../contentful/client";
import ContentfulPage from "../../components/ContentfulPage/ContentfulPage";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export const getStaticProps: GetStaticProps<{
  page: TypePage;
}> = async () => {
  // See: https://app.contentful.com/spaces/dtb5w0ega2aw/entries/38wyUNS9a6o51vmi5Sdxiy
  const page = await getPage("38wyUNS9a6o51vmi5Sdxiy");

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
        <title>{title} | Torch.AI</title>
      </Head>
      <ContentfulPage
        page={page}
        mainChildren={
          <PrimaryButton
            href="https://assets.ctfassets.net/dtb5w0ega2aw/2FnZhiiicswz3f6KF1KDoN/3612599961eafb905b147e415ac57815/The_Total_Economic_Impact_of_Torch.AIs_Nexus_Platform_April_2022_FINAL.pdf"
            isBlock
            download
          >
            Download
          </PrimaryButton>
        }
      />
      <Footer />
    </>
  );
};

export default ThankYou;
