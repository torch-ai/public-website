// noinspection JSUnusedGlobalSymbols

import React, { useContext, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Grid from "../../components/Grid/Grid";
import Link from "next/link";
import Style from "./styles.module.scss";
import { InView } from "react-intersection-observer";
import Footer from "../../components/Footer/Footer";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import LayoutContext from "../../components/layout/LayoutContext";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { getHeadPageTitle } from "../../utils/meta";
import { pageSettings as contactPageSettings } from "../contact";
import { PageSettings } from "../../types/next";
import ContentOverImage from "../../components/ContentOverImage/ContentOverImage";
import staffFlameBackground from "./assets/staff-flame-background.png";
import clsx from "clsx";
import FullpageSection from "../../components/FullpageSection/FullpageSection";

export const pageSettings: PageSettings = {
  path: "/impact",
  linkContent: <>Impact</>,
};

const Index: React.FunctionComponent = () => {
  const { setNavColor } = useContext(LayoutContext);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const sectorsForegroundRef = useRef<HTMLDivElement>(null);
  const sectorsBackgroundsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const titleDuration = 1;
    const sectionsDuration = titleDuration / 2;

    let delay = 1;
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: "100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration, delay }
    );
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: "100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration, delay }
    );

    delay += titleDuration;
    gsap.fromTo(
      sectorsForegroundRef.current,
      { opacity: 0, y: "-100%", ease: "power1" },
      { opacity: 1, y: 0, duration: sectionsDuration, delay }
    );
    gsap.fromTo(
      sectorsBackgroundsRef.current,
      { opacity: 0, y: "-100%", ease: "power1" },
      { opacity: 1, y: 0, duration: sectionsDuration, delay }
    );
  }, []);

  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle(["What impact can Nexus have in the world?"])}
        </title>
      </Head>
      <ReactFullpage
        licenseKey={"A33F98B7-1BF24B82-AB8933EF-A1EC533E"}
        navigation
        verticalCentered={false}
        responsiveWidth={1500}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <FullpageSection className={Style.hero}>
                <Grid container marginCenter>
                  <Grid row>
                    <Grid size={{ Xs: 12 }} className={Style.galleryTitle}>
                      <h3 ref={titleRef}>Make your impact.</h3>
                    </Grid>
                  </Grid>
                  <Grid
                    row
                    ref={sectorsForegroundRef}
                    className={Style.galleryContainer}
                  >
                    <Grid
                      size={{ Lg: 2, Xs: 12 }}
                      className={clsx(
                        Style.galleryContainerItem,
                        Style.galleryDefense
                      )}
                    >
                      <div className={clsx(Style.galleryContainerContent)}>
                        <p>Defense & Intelligence</p>
                      </div>
                    </Grid>
                    <Grid
                      size={{ Lg: 2, Xs: 12 }}
                      className={clsx(
                        Style.galleryContainerItem,
                        Style.galleryLogistics
                      )}
                    >
                      <div className={clsx(Style.galleryContainerContent)}>
                        <p>Logistics</p>
                      </div>
                    </Grid>
                    <Grid
                      size={{ Lg: 2, Xs: 12 }}
                      className={clsx(
                        Style.galleryContainerItem,
                        Style.galleryInsurance
                      )}
                    >
                      <div className={clsx(Style.galleryContainerContent)}>
                        <p>Insurance</p>
                      </div>
                    </Grid>
                    <Grid
                      size={{ Lg: 2, Xs: 12 }}
                      className={clsx(
                        Style.galleryContainerItem,
                        Style.galleryMarketing
                      )}
                    >
                      <div className={clsx(Style.galleryContainerContent)}>
                        <p>Marketing</p>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid
                    row
                    ref={sectorsBackgroundsRef}
                    className={Style.galleryContainer}
                  >
                    <Grid
                      size={{ Lg: 2, Xs: 12 }}
                      className={clsx(
                        Style.galleryContainerItem,
                        Style.galleryFinancial
                      )}
                    >
                      <div className={clsx(Style.galleryContainerContent)}>
                        <p>Financial Services</p>
                      </div>
                    </Grid>
                    <Grid
                      size={{ Lg: 2, Xs: 12 }}
                      className={clsx(
                        Style.galleryContainerItem,
                        Style.galleryManufacture
                      )}
                    >
                      <div className={clsx(Style.galleryContainerContent)}>
                        <p>Manufacturing</p>
                      </div>
                    </Grid>
                    <Grid
                      size={{ Lg: 2, Xs: 12 }}
                      className={clsx(
                        Style.galleryContainerItem,
                        Style.galleryHealthcare
                      )}
                    >
                      <div className={clsx(Style.galleryContainerContent)}>
                        <p>Healthcare</p>
                      </div>
                    </Grid>
                    <Grid
                      size={{ Lg: 2, Xs: 12 }}
                      className={clsx(
                        Style.galleryContainerItem,
                        Style.galleryPublicSector
                      )}
                    >
                      <div className={clsx(Style.galleryContainerContent)}>
                        <p>Public Sector</p>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid size={{ Xs: 12 }} className={Style.galleryTitle}>
                    <p ref={subtitleRef}>Find your passion below:</p>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleDown as IconProp}
                      size="2x"
                    />
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection
                data-anchor="defense"
                className={clsx(Style.defense, "section")}
              >
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <Grid container marginCenter id="defense">
                    <Grid row className={Style.defensesContent}>
                      <Grid size={{ Xs: 12 }}>
                        <h2>Defense & Intelligence.</h2>
                        <p>
                          The national security enterprise is awash with vast
                          quantities of data sources, types, and structures,
                          across multiple domains. The Nexus platform enables
                          our government customers to rapidly access valuable
                          information, strengthening our position against our
                          adversaries. Deploying Nexus truly supports our
                          warfighters and intelligence professionals in their
                          mission to bolster the defense of our nation.
                        </p>
                      </Grid>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </InView>
              </FullpageSection>
              <FullpageSection
                data-anchor="logistics"
                className={Style.logistics}
              >
                <Grid container marginCenter id="logistics">
                  <Grid row className={Style.logisticsContent}>
                    <Grid size={{ Xs: 8 }}>
                      <h2>Logistics.</h2>
                      <p>
                        Modern logistics requires the ability to orchestrate
                        massive pipelines of information in real-time to move
                        critical products and supplies across the globe. Nexus
                        enhances your logistics processes by fusing together
                        previously unrelated sets of information, optimizing
                        your supply chain, delivery mechanisms and distribution.
                        Nexus leaves its mark by providing immediate bottom-line
                        results
                      </p>
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid
                      size={{ Xs: 8, Lg: 8 }}
                      className={Style.inspirationButton}
                    >
                      <Link href={contactPageSettings.path}>
                        <a role="button">Request Brief</a>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection
                data-anchor="insurance"
                className={Style.insurance}
              >
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <Grid container marginCenter id="insurance">
                    <Grid row className={Style.insuranceContent}>
                      <Grid size={{ Xs: 12 }}>
                        <h2>Insurance.</h2>
                        <p>
                          Creating new policies or certificates of insurance
                          (COIs) require human labor to review, interpret, and
                          extract relevant information from various documents—a
                          slow, error prone, and expensive process. Nexus solves
                          this problem by automating the data extraction process
                          resulting in a simple and efficient solution that
                          helps insurance companies generate new policies and
                          COIs at an average speed of 9.8 milliseconds per page
                          and with over 96% accuracy for data extraction.
                        </p>
                      </Grid>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </InView>
              </FullpageSection>
              <FullpageSection
                data-anchor="marketing"
                className={Style.marketing}
              >
                <Grid container marginCenter id="marketing">
                  <Grid row className={Style.marketingContent}>
                    <Grid size={{ Xs: 12 }}>
                      <h2>Marketing.</h2>
                      <p>
                        Innovative marketers understand the trends and
                        inclinations of customers by sifting through piles of
                        data, attempting to filter the noise. Staying at the
                        forefront of markets requires keen insight, correlating
                        information from disparate sources to drive decision
                        making. Nexus applies its machine learning to associate
                        features hidden from the human eye, ensuring marketers
                        pick up tendencies before the masses, honing appropriate
                        messaging and driving increased sales.
                      </p>
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid size={{ Xs: 12, Lg: 8 }}>
                      <Link href={contactPageSettings.path}>
                        <a role="button">Request Brief</a>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection
                data-anchor="financial"
                className={Style.financial}
              >
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <Grid container marginCenter id="financial">
                    <Grid row className={Style.financialContent}>
                      <Grid size={{ Xs: 12 }}>
                        <h2>Financial Services.</h2>
                        <p>
                          Financial service organizations seek to fully engage
                          their customers and prospects with their growing list
                          of products and services. Analysts and advisors are
                          currently forced to sift through vast amounts of
                          disparate information to understand current and future
                          needs. By integrating Nexus, surfacing only the most
                          valuable and actionable information can happen in an
                          instant.
                        </p>
                      </Grid>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </InView>
              </FullpageSection>
              <FullpageSection
                data-anchor="manufacturing"
                className={Style.manufacturing}
              >
                <Grid container marginCenter id="manufacturing">
                  <Grid row reverse className={Style.manufacturingContent}>
                    <Grid size={{ Lg: 5, Xs: 12 }}>
                      <h2>Manufacturing.</h2>
                      <p>
                        With supply chains operating on a global scale,
                        intelligence must be aggregated across language,
                        cultural, and national security barriers. Nexus
                        implements AI to deploy risk measures across the supply
                        chain, including financial distress, foreign influence,
                        sole-source supplier, and economic threat, mitigating
                        perilous activity.
                      </p>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection
                data-anchor="healthcare"
                className={Style.healthcare}
              >
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <Grid container marginCenter id="healthcare">
                    <Grid row className={Style.healthcareContent}>
                      <Grid size={{ Xs: 12 }}>
                        <h2>Healthcare.</h2>
                        <p>
                          Artificial Intelligence is revolutionizing healthcare,
                          from diagnosing conditions using computer vision in
                          imagery to illuminating risk in a medical parts supply
                          chain. Nexus can integrate data across all your
                          systems, providing an enhanced patient profile for
                          intelligent decisioning.
                        </p>
                      </Grid>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </InView>
              </FullpageSection>
              <FullpageSection
                data-anchor="publicSector"
                className={Style.publicSector}
              >
                <Grid container marginCenter id="public">
                  <Grid row className={Style.publicSectorContent}>
                    <Grid size={{ Xs: 12 }}>
                      <h2>Public Sector.</h2>
                      <p>
                        Governments exist to strengthen the lives of their
                        constituents. Federal, State and Local agencies are
                        hyper focused on providing better services for their
                        citizens, constantly searching for ways to protect and
                        enhance our critical infrastructure, increase the
                        quality of public services and mitigating fraud, waste
                        and abuse. As a platform that has been proven to tackle
                        the largest and most complex data challenges, Nexus is
                        uniquely positioned to support public sector agencies by
                        maintaining technical credentials that allow for data &
                        decision auditability, traceability, scalability and
                        security.
                      </p>
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid size={{ Xs: 12, Lg: 12 }}>
                      <Link href={contactPageSettings.path}>
                        <a role="button">Request Brief</a>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <ContentOverImage
                imageProps={{
                  src: staffFlameBackground,
                  alt: "",
                  layout: "fill",
                  objectPosition: "left center",
                  objectFit: "contain",
                }}
                className={Style.cta}
              >
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <Grid container marginCenter id="public">
                    <Grid row className={Style.ctaContent}>
                      <Grid size={{ Xs: 12 }} offset={{ Lg: 6 }}>
                        <h3>Let us help you make data easier to use.</h3>
                        <p>It's time to unleash your potential.</p>
                      </Grid>
                    </Grid>
                    <Grid row>
                      <Grid size={{ Lg: 12 }} offset={{ Lg: 6 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">Let's be friends</a>
                        </Link>
                      </Grid>
                    </Grid>
                  </Grid>
                </InView>
              </ContentOverImage>
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Index;
