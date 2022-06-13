// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useEffect } from "react";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import Footer from "../../components/Footer";
import Head from "next/head";
import forbes from "../../img/forbes.png";
import PageHeader from "../../components/PageHeader/PageHeader";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageSubtitle from "../../components/PageSubtitle/PageSubtitle";
import Container from "../../components/Container/Container";
import Styles from "./styles.module.scss";
import useScript from "../../hooks/useScript";
import Prose from "../../components/Prose/Prose";
import clsx from "clsx";
import { getHeadPageTitle } from "../../utils/meta";
import { PageSettings } from "../../types/next";
import {
  getNewsEntries,
  getCustomPageAndMicrocopy,
} from "../../contentful/client";
import {
  TypeNews,
  TypeMicrocopy,
  TypeCustomPage,
} from "../../generated/contentful";
import Microcopy from "../../components/Microcopy/Microcopy";

export const pageSettings: PageSettings = {
  path: "/careers",
  linkContent: <>Careers</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const content = await getCustomPageAndMicrocopy("acalTvHwciWsZovjVPPEL");

  return {
    props: {
      microcopy: content.microcopy,
      customPage: content.customPage || null,
    },
  };
};

const Index = ({
  microcopy,
  customPage,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  useEffect(() => {
    // @ts-expect-error Meh
    window.ht_settings = window.ht_settings || {};
    // @ts-expect-error Meh
    window.ht_settings.site_url = "torch-ai";
    // set this to true if you want jobs to open in a new window
    // @ts-expect-error Meh
    window.ht_settings.open_jobs_in_new_tab = true;
  });

  useScript({
    src: "https://assets.rippling-ats.com/javascripts/embed.js",
    id: "rippling-jobs-widget",
  });
  // Flaky, can't be trusted in SPA context at this time
  // useScript({
  //   src: "https://assets.applicant-tracking.com/webpack/forms_widget.js",
  //   id: "rippling-signup-widget",
  // });

  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle(
            !!customPage ? customPage.fields.pageHeadTitle : []
          )}
        </title>
      </Head>
      <PageHeader>
        <div className={Styles.headerGrid}>
          <div className={Styles.headerGridTitle}>
            <PageTitle>
              <Microcopy entries={microcopy} id="6UgTfOgThFEd1bFdMx5O0j" />
            </PageTitle>
            <PageSubtitle>
              <Microcopy entries={microcopy} id="7GsjbmnHfaSdx2souw3HNi" />
            </PageSubtitle>
          </div>
          <div className={Styles.headerGridImage}>
            <Image
              src={forbes}
              alt={
                "Recognized by Forbes as one of America's best startups employers for 2022"
              }
            />
          </div>
        </div>
      </PageHeader>

      <Container
        className={clsx(
          Styles.contentGrid
          // , Styles.contentGridHasAside
        )}
      >
        <main className={Styles.main}>
          <Prose>
            <section id="hiringthing-jobs" className={Styles.ripplingJobs} />
            {/* The widget produces this HTML, repeated per job: */}
            {/*<a*/}
            {/*  href="https://torch-ai.rippling-ats.com/job/421510/agile-coach?s=cw"*/}
            {/*  target="_blank"*/}
            {/*  className="ht-title-link"*/}
            {/*>*/}
            {/*  Agile Coach*/}
            {/*</a>*/}
            {/*<div className="ht-location">Leawood, KS &nbsp; United States</div>*/}
            {/*<div className="ht-summary">Torch is looking for a strategic and results-driven leader with comprehensive*/}
            {/*  project management, creative, analytical, and implementation skills who will report to the Chief Product*/}
            {/*  Officer. This…*/}
            {/*</div>*/}
            {/*<a href="https://torch-ai.rippling-ats.com/job/421510/agile-coach?s=cw" target="_blank"*/}
            {/*   className="ht-apply-link">Apply Now</a>*/}

            <noscript>
              <a href="https://torch-ai.rippling-ats.com">
                View our currently open positions.
              </a>

              <br />
              <br />
              <small>
                Job listings brought to you by{" "}
                <a href="https://www.rippling-ats.com">Rippling ATS</a>.
              </small>
            </noscript>
          </Prose>
        </main>

        {/*<aside className={Styles.aside}>*/}
        {/*  <section*/}
        {/*    data-jobs-url="https://torch-ai.rippling-ats.com"*/}
        {/*    data-signup="true"*/}
        {/*  />*/}
        {/*</aside>*/}
      </Container>

      <Footer />
    </>
  );
};

export default Index;
