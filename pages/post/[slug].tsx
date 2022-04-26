// noinspection JSUnusedGlobalSymbols

import Static from "../../styles/modules/static.module.scss";
import Footer from "../../components/Footer";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";
import { getNewsEntries } from "../../contentful/client";
import { TypeNews } from "../../generated/contentful";
import ContentfulContent from "../../components/ContentfulContent/ContentfulContent";
import clsx from "clsx";
import PageHeader from "../../components/PageHeader/PageHeader";

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await getNewsEntries();

  return {
    paths: res.items.map((item) => ({
      params: {
        slug: item.fields.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ item: TypeNews }> = async ({
  params,
}) => {
  const { items } = await getNewsEntries({
    "fields.slug": params.slug as string,
  });

  return {
    props: { item: items[0] },
  };
};

const Slug = ({
  item,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { content } = item.fields;
  return (
    <>
      <Head>
        <title>{item.fields.title} | Torch.AI</title>
      </Head>
      <section>
        <PageHeader>
          <div className={`${Static["content"]}`}>
            <div className={`post flow`}>
              <h3>{item.fields.title}.</h3>
              <p>
                <em>{item.fields.summary} </em>
              </p>
            </div>
          </div>
        </PageHeader>
        <main className={clsx(Static["service-content"], "post")}>
          <ContentfulContent content={content} />
        </main>
      </section>
      <Footer />
    </>
  );
};

export default Slug;
