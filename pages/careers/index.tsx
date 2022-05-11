// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useEffect } from "react";
import Image from "next/image";
import CareersClasses from "../../styles/modules/careers.module.scss";
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

const Index = (): ReactElement => {
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
      </Container>
      <Footer />
    </>
  );
};

export default Index;
