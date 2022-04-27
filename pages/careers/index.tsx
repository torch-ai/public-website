// noinspection JSUnusedGlobalSymbols

import React, { ReactElement } from "react";
import Image from "next/image";
import Grid from "../../styles/modules/grid.module.scss";
import CareersClasses from "../../styles/modules/careers.module.scss";
import CareerCard from "../../components/CareerCard";
import Footer from "../../components/Footer";
import Head from "next/head";
import forbes from "../../img/forbes.png";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCareerPostingsEntries } from "../../contentful/client";
import { TypeCareerPosting } from "../../generated/contentful";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageSubtitle from "../../components/PageSubtitle/PageSubtitle";
import Container from "../../components/Container/Container";
import Styles from "./styles.module.scss";
import ContentfulAsset from "../../components/ContentfulAsset/ContentfulAsset";

export const getStaticProps: GetStaticProps<{
  careers: TypeCareerPosting[];
}> = async () => {
  const res = await getCareerPostingsEntries({});

  return {
    props: {
      careers: res.items,
    },
  };
};

const Index = ({
  careers,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  return (
    <>
      <Head>
        <title>
          AI and Machine Learning Jobs | Current Openings | Torch.AI
        </title>
      </Head>
      <PageHeader>
        <div className={Styles.headerGrid}>
          <div className={Styles.headerGridTitle}>
            <PageTitle>Careers</PageTitle>
            <PageSubtitle>
              At Torch.AI, we are passionate about building software that solves
              some of the world's most challenging problems. On the leading edge
              for AI for National Security clients and beyond, we partner with
              some of the most influential organizations to transform how they
              define success using data and technology.
            </PageSubtitle>
          </div>
          <div className={Styles.headerGridImage}>
            <Image src={forbes} />
          </div>
        </div>
      </PageHeader>
      <Container>
        <main className={Styles.main}>
          <section
            className={`${CareersClasses["job-list"]} ${CareersClasses["section"]}`}
          >
            {careers.map((career) => (
              <div key={career.sys.id} className={`${Grid["col-xs-12"]}`}>
                <CareerCard career={career} />
              </div>
            ))}
          </section>
        </main>
      </Container>
      <Footer />
    </>
  );
};

export default Index;
