// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext, useEffect, useRef } from "react";
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
import { getCustomPageAndMicrocopy } from "../../contentful/client";
import { TypeMicrocopy, TypeCustomPage } from "../../generated/contentful";
import Microcopy from "../../components/Microcopy/Microcopy";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import pageIds from "../../contentful/pages";

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
              <div className={`${Style["hero"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]} `}>
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__title"]}`}
                    >
                      <h3 ref={titleRef}>
                        <Microcopy
                          entries={microcopy}
                          id="31GQCkdXK0O5CL9WioPS6n"
                        />
                      </h3>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="7FfUN3VSOMubfdGdDpC4Kb"
                          />
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-logistics"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="3EKIjuHC9nxzCQJJMnX5CD"
                          />
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-insurance"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="54kbEn2vhK2j5M04swycdK"
                          />
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-marketing"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="5NQbrTekTgvgJtuGXWIyDB"
                          />
                        </p>
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
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="J8qYObdm4XRu4kkycYhNG"
                          />
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-manufacture"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="10AtkuqSsaeweJz3RpAzo7"
                          />
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-healthcare"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="3SHgOKakmel4ajTQqEPMtH"
                          />
                        </p>
                      </div>
                    </div>
                    <div
                      className={`${Grid["col-lg-2"]} ${Grid["col-xs-12"]} ${Style["gallery__container-item"]} ${Style["gallery-publicSector"]}`}
                    >
                      <div className={`${Style["gallery__container-content"]}`}>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="MG14TewM0rjLfM6zVTU1J"
                          />
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${Grid["col-xs-12"]} ${Style["gallery__title"]}`}
                  >
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
                      </div>
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="15ir3h0ex7mQa6hnbRDMjk"
                            />
                          </a>
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
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col_xs_8"]} ${Grid["col_lg_8"]} ${Style["inspiration__button"]}`}
                    >
                      <Link href={contactPageSettings.path}>
                        <a role="button">
                          <Microcopy
                            entries={microcopy}
                            id="3ZZe1rBU9dn5oiOfhZsWUJ"
                          />
                        </a>
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
                      </div>
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="6RIyviER51eUoIZNpEywXD"
                            />
                          </a>
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
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div className={`${Grid["col-xs-12"]} ${Grid["col_lg_8"]}`}>
                      <Link href={contactPageSettings.path}>
                        <a role="button">
                          <Microcopy
                            entries={microcopy}
                            id="3isFx6nZLcmw2KdtzP7ScO"
                          />
                        </a>
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
                      </div>
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="TeTXSmARSLhC8MxmBoDHX"
                            />
                          </a>
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
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="7E2bPj9tBFiP84OTv6geyd"
                            />
                          </a>
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
                      </div>
                      <div
                        className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                      >
                        <Link href={contactPageSettings.path}>
                          <a role="button">
                            <Microcopy
                              entries={microcopy}
                              id="6FGiDJdnhTYMDvUY5Wwn9g"
                            />
                          </a>
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
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                    >
                      <Link href={contactPageSettings.path}>
                        <a role="button">
                          <Microcopy
                            entries={microcopy}
                            id="3Cw33kkgFYhYO3E7kelejY"
                          />
                        </a>
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
                            <a role="button">
                              <Microcopy
                                entries={microcopy}
                                id="3570dxwhzqrHA64QccuBAL"
                              />
                            </a>
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
