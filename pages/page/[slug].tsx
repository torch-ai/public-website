// noinspection JSUnusedGlobalSymbols

import Footer from "../../components/Footer";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import React, { ReactElement } from "react";
import { getPageEntries } from "../../contentful/client";
import { TypePage } from "../../generated/contentful";
import ContentfulPage from "../../components/ContentfulPage/ContentfulPage";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getPageEntries({
    "fields.slug[exists]": true,
  });

  return {
    paths: res.items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ page: TypePage }> = async ({
  params,
}) => {
  const { items } = await getPageEntries({
    "fields.slug": params.slug as string,
  });

  return {
    props: { page: items[0] },
  };
};

const Slug = ({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  return (
    <>
      <Head>
        <title>{page.fields.title} | Torch.AI</title>
      </Head>
      <ContentfulPage page={page} />
      <Footer />
    </>
  );
};

export default Slug;
