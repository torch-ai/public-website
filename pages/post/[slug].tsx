// noinspection JSUnusedGlobalSymbols

import Footer from "../../components/Footer";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement } from "react";
import { getAllNewsEntries, getNewsEntries } from "../../contentful/client";
import { TypeNews } from "../../generated/contentful";
import ContentfulContent from "../../components/ContentfulContent/ContentfulContent";
import PageHeader from "../../components/PageHeader/PageHeader";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageSubtitle from "../../components/PageSubtitle/PageSubtitle";
import Styles from "./styles.module.scss";
import { getHeadPageTitle } from "../../utils/meta";

export const getStaticPaths: GetStaticPaths = async () => {
  const items = await getAllNewsEntries();

  return {
    paths: items.map((item) => ({
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
        <title>{getHeadPageTitle([item.fields.title])}</title>
      </Head>
      <PageHeader>
        <PageTitle>{item.fields.title}.</PageTitle>
        <PageSubtitle>{item.fields.summary}</PageSubtitle>
      </PageHeader>
      <Container>
        <main className={Styles.main}>
          <ContentfulContent className={Styles.content} content={content} />
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default Slug;
