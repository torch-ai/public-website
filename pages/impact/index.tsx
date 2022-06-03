// noinspection JSUnusedGlobalSymbols

import React, { useContext, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Grid from "../../styles/modules/grid.module.scss";
import Link from "next/link";
import Style from "../../styles/modules/inspiration.module.scss";
import { InView } from "react-intersection-observer";
import Footer from "../../components/Footer";
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
              <div className={`${Style["hero"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]} `}>
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__title"]}`}
                    >
                      <h3 ref={titleRef}>Make your impact.</h3>
                    </div>
                  </div>
                  <div
                    ref={sectorsForegroundRef}
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-defense"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>Defense & Intelligence</p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-logistics"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>Logistics</p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-insurance"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>Insurance</p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-marketing"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>Marketing</p>
                      </div>
                    </div>
                  </div>
                  <div
                    ref={sectorsBackgroundsRef}
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-financial"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>Financial Services</p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-manufacture"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>Manufacturing</p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-healthcare"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>Healthcare</p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-publicSector"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>Public Sector</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${Grid["col-xs-12"]} ${Style["gallery__title"]}`}
                  >
                    <p ref={subtitleRef}>Find your passion below:</p>
                    <FontAwesomeIcon
                      icon={faArrowAltCircleDown as IconProp}
                      size="2x"
                    />
                  </div>
                </div>
              </div>
              <div
                data-anchor="defense"
                className={`${Style["defense"]} section`}
              >
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div
                    id="defense"
                    className={`${Grid["container"]} ${Grid["margin_center"]}`}
                  >
                    <div
                      className={`${Grid["row"]} ${Style["defenses__content"]}`}
                    >
                      <div className={`${Grid["col-xs-12"]}`}>
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
                      </div>
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </InView>
              </div>
              <div
                data-anchor="logistics"
                className={`${Style["logistics"]} section`}
              >
                <div
                  id="logistics"
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div
                    className={`${Grid["row"]} ${Style["logistics__content"]}`}
                  >
                    <div className={`${Grid["col_xs_8"]}`}>
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
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col_xs_8"]} ${Grid["col_lg_8"]} ${Style["inspiration__button"]}`}
                    >
                      <Link href={contactPageSettings.path}>
                        <a role="button">Request Brief</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-anchor="insurance"
                className={`${Style["insurance"]} section`}
              >
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div
                    id="insurance"
                    className={`${Grid["container"]} ${Grid["margin_center"]}`}
                  >
                    <div
                      className={`${Grid["row"]} ${Style["insurance__content"]}`}
                    >
                      <div className={`${Grid["col-xs-12"]}`}>
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
                      </div>
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </InView>
              </div>
              <div
                data-anchor="marketing"
                className={`${Style["marketing"]} section`}
              >
                <div
                  id="marketing"
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div
                    className={`${Grid["row"]} ${Style["marketing__content"]}`}
                  >
                    <div className={`${Grid["col-xs-12"]}`}>
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
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div className={`${Grid["col-xs-12"]} ${Grid["col_lg_8"]}`}>
                      <Link href={contactPageSettings.path}>
                        <a role="button">Request Brief</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-anchor="financial"
                className={`${Style["financial"]} section`}
              >
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div
                    id="financial"
                    className={`${Grid["container"]} ${Grid["margin_center"]}`}
                  >
                    <div
                      className={`${Grid["row"]} ${Style["financial__content"]}`}
                    >
                      <div className={`${Grid["col-xs-12"]}`}>
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
                      </div>
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </InView>
              </div>
              <div
                data-anchor="manufacturing"
                className={`${Style["manufacturing"]} section`}
              >
                <div
                  id="manufacturing"
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div
                    className={`${Grid["row-reverse"]} ${Style["manufacturing__content"]}`}
                  >
                    <div className={`${Grid["col-lg-5"]} ${Grid["col-xs-12"]}`}>
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
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-anchor="healthcare"
                className={`${Style["healthcare"]} section`}
              >
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div
                    id="healthcare"
                    className={`${Grid["container"]} ${Grid["margin_center"]}`}
                  >
                    <div
                      className={`${Grid["row"]} ${Style["healthcare__content"]}`}
                    >
                      <div className={`${Grid["col-xs-12"]}`}>
                        <h2>Healthcare.</h2>
                        <p>
                          Artificial Intelligence is revolutionizing healthcare,
                          from diagnosing conditions using computer vision in
                          imagery to illuminating risk in a medical parts supply
                          chain. Nexus can integrate data across all your
                          systems, providing an enhanced patient profile for
                          intelligent decisioning.
                        </p>
                      </div>
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">Request Brief</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </InView>
              </div>
              <div
                data-anchor="publicSector"
                className={`${Style["publicSector"]} section`}
              >
                <div
                  id="public"
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div
                    className={`${Grid["row"]} ${Style["publicSector__content"]}`}
                  >
                    <div className={`${Grid["col-xs-12"]}`}>
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
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                    >
                      <Link href={contactPageSettings.path}>
                        <a role="button">Request Brief</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Style["cta"]} section`}>
                <ContentOverImage
                  imageProps={{
                    src: staffFlameBackground,
                    alt: "",
                    layout: "fill",
                    objectPosition: "left center",
                    objectFit: "contain",
                  }}
                >
                  <InView
                    as="div"
                    onChange={(inView) =>
                      setNavColor(inView ? "black" : "white")
                    }
                  >
                    <div
                      id="public"
                      className={clsx(Grid.container, Grid.margin_center)}
                    >
                      <div className={clsx(Grid.row, Style.cta__content)}>
                        <div
                          className={clsx(
                            Grid["col-lg-offset-6"],
                            Grid["col-xs-12"]
                          )}
                        >
                          <h3>Let us help you make data easier to use.</h3>
                          <p>It's time to unleash your potential.</p>
                        </div>
                      </div>
                      <div className={Grid.row}>
                        <div
                          className={clsx(
                            Grid["col-lg-offset-6"],
                            Grid["col-lg-12"]
                          )}
                        >
                          <Link href={contactPageSettings.path}>
                            <a role="button">Let's be friends</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </InView>
                </ContentOverImage>
              </div>
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Index;
