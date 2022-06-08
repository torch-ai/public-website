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
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypeMicrocopy, TypeCustomPage } from "../../generated/contentful";
import { getCustomPageAndMicrocopy } from "../../contentful/client";
import { createMicrocopyComponent } from "../../components/Microcopy/Microcopy";

export const pageSettings: PageSettings = {
  path: "/impact",
  linkContent: <>Impact</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage: TypeCustomPage;
}> = async () => {
  const microcopy = await getCustomPageAndMicrocopy("1yAKxqj5wWxlHOxR3CS5iO");

  return {
    props: {
      microcopy: microcopy.items,
      customPage: (microcopy.includes.Entry as TypeCustomPage[])[0],
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

  const Microcopy = createMicrocopyComponent(microcopy);

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
        <title>{getHeadPageTitle(customPage.fields.pageHeadTitle)}</title>
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
                      <div className={`${Grid["col-xs-11"]}`}>
                        <Microcopy id="6L7382VhFqa1Mw61e9KoqY" />
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
                      <Microcopy id="s2UBqGwoOQJnZv9pwSjWx" />
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
                        <Microcopy id="74Jg1iuqx4t68XQGvsXKCW" />
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
                      <Microcopy id="5pql78wen1KLGceu2Ak5vm" />
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
                        <Microcopy id="7f0hg8KaHLSzx2YiCxNsRF" />
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
                      <Microcopy id="5wVJ1nHJRjMaq4Cx53qDmy" />
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
                        <Microcopy id="3CnK6dPgCtCPNWlCNr1acS" />
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
                      <Microcopy id="3Czc5i0cKTXPbquPAByqjg" />
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
                          <Microcopy id="1EjrIHOiWnQMwp8ccfKHbW" />
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
