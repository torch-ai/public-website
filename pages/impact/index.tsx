// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext, useEffect, useRef } from "react";
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
import { getCustomPageAndMicrocopy } from "../../contentful/client";
import { TypeMicrocopy, TypeCustomPage } from "../../generated/contentful";
import Microcopy from "../../components/Microcopy/Microcopy";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import pageIds from "../../contentful/pages";
import FullpageSection from "../../components/FullpageSection/FullpageSection";

export const pageSettings: PageSettings = {
  path: "/impact",
  linkContent: <>Impact</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const content = await getCustomPageAndMicrocopy(pageIds.impact);

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
          {getHeadPageTitle(
            !!customPage ? customPage.fields.pageHeadTitle : []
          )}
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
                      <h3 ref={titleRef}>
                        <Microcopy
                          entries={microcopy}
                          id="31GQCkdXK0O5CL9WioPS6n"
                        />
                      </h3>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="7FfUN3VSOMubfdGdDpC4Kb"
                          />
                        </p>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="3EKIjuHC9nxzCQJJMnX5CD"
                          />
                        </p>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="54kbEn2vhK2j5M04swycdK"
                          />
                        </p>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="5NQbrTekTgvgJtuGXWIyDB"
                          />
                        </p>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="J8qYObdm4XRu4kkycYhNG"
                          />
                        </p>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="10AtkuqSsaeweJz3RpAzo7"
                          />
                        </p>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="3SHgOKakmel4ajTQqEPMtH"
                          />
                        </p>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="MG14TewM0rjLfM6zVTU1J"
                          />
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                  <Grid size={{ Xs: 12 }} className={Style.galleryTitle}>
                    <p ref={subtitleRef}>
                      <Microcopy
                        entries={microcopy}
                        id="15JqsNCj33XEYOYDJA8jF0"
                      />
                    </p>
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
                        <h2>
                          <Microcopy
                            entries={microcopy}
                            id="7sycCdQSWPdoW6tx5myAjJ"
                          />
                        </h2>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="2XCbWYToiin21v5IlSYwE3"
                          />
                        </p>
                      </Grid>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="15ir3h0ex7mQa6hnbRDMjk"
                            />
                          </a>
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
                      <h2>
                        <Microcopy
                          entries={microcopy}
                          id="4My8Gs57U7aXrotdges1Su"
                        />
                      </h2>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="2Yq6nuJpLRy6MiDkLg2KAX"
                        />
                      </p>
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid
                      size={{ Xs: 8, Lg: 8 }}
                      className={Style.inspirationButton}
                    >
                      <Link href={contactPageSettings.path}>
                        <a role="button">
                          <Microcopy
                            entries={microcopy}
                            id="3ZZe1rBU9dn5oiOfhZsWUJ"
                          />
                        </a>
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
                        <h2>
                          <Microcopy
                            entries={microcopy}
                            id="6UMiEmAqI8qChY3bqvUaXl"
                          />
                        </h2>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="7r1Kmw8KQjRKbrnlM45jJm"
                          />
                        </p>
                      </Grid>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="6RIyviER51eUoIZNpEywXD"
                            />
                          </a>
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
                      <h2>
                        <Microcopy
                          entries={microcopy}
                          id="24Mda67H8iMm8Ya8S26KTx"
                        />
                      </h2>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="5qqWrQcgYss6bP8mpNKYi6"
                        />
                      </p>
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid size={{ Xs: 12, Lg: 8 }}>
                      <Link href={contactPageSettings.path}>
                        <a role="button">
                          <Microcopy
                            entries={microcopy}
                            id="3isFx6nZLcmw2KdtzP7ScO"
                          />
                        </a>
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
                        <h2>
                          <Microcopy
                            entries={microcopy}
                            id="2ahItxqwZFn8xByM05KXGy"
                          />
                        </h2>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="5N8v0mngiLvU04ZLBeyWSI"
                          />
                        </p>
                      </Grid>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="TeTXSmARSLhC8MxmBoDHX"
                            />
                          </a>
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
                      <h2>
                        <Microcopy
                          entries={microcopy}
                          id="5w5v6QlZWjBZNDI4tucy6C"
                        />
                      </h2>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="3tQ7G0ZXYUYxJXAA1FIRZa"
                        />
                      </p>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="7E2bPj9tBFiP84OTv6geyd"
                            />
                          </a>
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
                        <h2>
                          <Microcopy
                            entries={microcopy}
                            id="Yab8EIYxfIT93h73bK8Fc"
                          />
                        </h2>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="2CIFgyAmiSJQptuBI57Oof"
                          />
                        </p>
                      </Grid>
                      <Grid size={{ Xs: 12, Lg: 12 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="6FGiDJdnhTYMDvUY5Wwn9g"
                            />
                          </a>
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
                      <h2>
                        <Microcopy
                          entries={microcopy}
                          id="4F9EM5kyW3GdR4OB5K7kHu"
                        />
                      </h2>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="5831ewhHGJAmAVcMdfkVw6"
                        />
                      </p>
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid size={{ Xs: 12, Lg: 12 }}>
                      <Link href={contactPageSettings.path}>
                        <a role="button">
                          <Microcopy
                            entries={microcopy}
                            id="3Cw33kkgFYhYO3E7kelejY"
                          />
                        </a>
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
                        <h3>
                          <Microcopy
                            entries={microcopy}
                            id="3pQLuZSq2rKd0LBA3xpK7i"
                          />
                        </h3>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="3482laEjwULQZ7d3Q3lmdm"
                          />
                        </p>
                      </Grid>
                    </Grid>
                    <Grid row>
                      <Grid size={{ Lg: 12 }} offset={{ Lg: 6 }}>
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="3570dxwhzqrHA64QccuBAL"
                            />
                          </a>
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
