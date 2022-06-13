// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Grid from "../../styles/modules/grid.module.scss";
import Landing from "../../styles/modules/landing.module.scss";
import Image from "next/image";
import Style from "./styles.module.scss";
import News from "../../components/News";
import Footer from "../../components/Footer";
import { gsap } from "gsap";
import { InView } from "react-intersection-observer";
import LayoutContext from "../../components/layout/LayoutContext";
import { GetStaticProps, InferGetStaticPropsType } from "next";
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
import { getHeadPageTitle } from "../../utils/meta";
import { pageSettings as careersPageSettings } from "../careers";
import { PageSettings } from "../../types/next";
import clsx from "clsx";
import ContentOverImage from "../../components/ContentOverImage/ContentOverImage";
import BrainWeaver from "../../img/dotArt/BrainWeaver.png";
import AdamLurie from "../../img/dotArt/AdamLurie.png";
import AmyBradshaw from "../../img/dotArt/AmyBradshaw.png";
import DavidKern from "../../img/dotArt/DavidKern.png";
import HondoGeruts from "../../img/dotArt/HondoGeruts.png";
import JanetHanofee from "../../img/dotArt/JanetHanofee.png";
import JasonDelker from "../../img/dotArt/JasonDelker.png";
import JenniferUtting from "../../img/dotArt/JenniferUtting.png";
import JonKramer from "../../img/dotArt/JonKramer.png";
import MikeDanda from "../../img/dotArt/MikeDanda.png";
import LaurenceTosi from "../../img/dotArt/LaurenceTosi.png";
import ChristanSchnedler from "../../img/dotArt/ChristanSchnedler.png";
import WilliamBeyer from "../../img/dotArt/WilliamBeyer.png";
import MarkPerrin from "../../img/dotArt/MarkPerrin.png";
import KevinMarcus from "../../img/dotArt/KevinMarcus.png";
import forbes from "../../img/forbes.png";
import logoBookshelf from "./assets/logo-bookshelf.png";
import galleryBackground from "./assets/gallerypic.png";

export const pageSettings: PageSettings = {
  path: "/company",
  linkContent: <>Company</>,
};

export const getStaticProps: GetStaticProps<{
  news: TypeNews[];
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const news = await getNewsEntries({
    limit: 5,
  });

  const content = await getCustomPageAndMicrocopy("7gw479ghJ6W9LGpvT1Txwl");

  return {
    props: {
      news: news.items,
      microcopy: content.microcopy,
      customPage: content.customPage || null,
    },
  };
};

const Index = ({
  news,
  microcopy,
  customPage,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  const titleRef = useRef<HTMLHeadingElement>();
  const subtitleRef = useRef<HTMLParagraphElement>();

  useEffect(() => {
    let delay = 1;
    const titleDuration = 1;
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: "100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration, delay }
    );

    delay += titleDuration;
    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: "-100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration / 2, delay }
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
                  <InView
                    as="div"
                    onChange={(inView) =>
                      setNavColor(inView ? "white" : "black")
                    }
                  >
                    <div className={`${Grid["row"]}`}>
                      <div
                        className={`${Grid["col-xs-12"]} ${Style["content-center"]}`}
                      >
                        <h2 ref={titleRef}>
                          <Microcopy
                            entries={microcopy}
                            id="1oRO3VvNiTI7o6XjTbl9HE"
                          />
                        </h2>
                        <p ref={subtitleRef}>
                          <Microcopy
                            entries={microcopy}
                            id="3P0Qo0eHKZlDFTfYh9o6z8"
                          />
                        </p>
                        <div className={`${Style["forbes"]}`}>
                          <Image
                            className={`${Style["forbes-img"]}`}
                            src={forbes}
                            alt={
                              "Recognized by Forbes as one of America's best startups employers for 2022"
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </InView>
                </div>
              </div>
              <ContentOverImage
                data-anchor="culture"
                className={clsx(Style.culture, "section")}
                contentProps={{
                  className: clsx(
                    Style.culture__content,
                    Grid.container,
                    Grid.margin_center
                  ),
                }}
                imageProps={{
                  src: logoBookshelf,
                  alt: "Logo made with photo!",
                  layout: "fill",
                  objectFit: "contain",
                  objectPosition: "right bottom",
                }}
              >
                <div className={Grid.row}>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}>
                    <h3>
                      <Microcopy
                        entries={microcopy}
                        id="3ygbPcVyaAM61oVIjWTK93"
                      />
                    </h3>
                  </div>
                </div>
                <div className={`${Grid["row"]}`}>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-3"]}`}>
                    <h5>
                      <Microcopy
                        entries={microcopy}
                        id="4ifgiXYI1Z7gWkseff1CXI"
                      />
                    </h5>
                    <p>
                      <Microcopy
                        entries={microcopy}
                        id="1EZp5AZAReREFTQQ46pNB9"
                      />
                    </p>
                  </div>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-8"]}`}>
                    <h5>
                      <Microcopy
                        entries={microcopy}
                        id="1csSg4cQiPXH6fdwHxyil0"
                      />
                    </h5>
                    <p>
                      <Microcopy
                        entries={microcopy}
                        id="5IqvM2y4XENoOidq9umX3z"
                      />
                    </p>
                  </div>
                </div>
                <div className={`${Grid["row"]}`}>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-3"]}`}>
                    <h5>
                      <Microcopy
                        entries={microcopy}
                        id="4AuB1mTnVNpWnLZLrrafMB"
                      />
                    </h5>
                    <p>
                      <Microcopy
                        entries={microcopy}
                        id="2jL4viZtSh0JrfxdQoSTKG"
                      />
                    </p>
                  </div>
                  <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-8"]}`}>
                    <h5>
                      <Microcopy
                        entries={microcopy}
                        id="2kwofJ1BbHDb6SHTODZYEI"
                      />
                    </h5>
                    <p>
                      <Microcopy
                        entries={microcopy}
                        id="3GElBd2wnOO2DS8vhiT1KJ"
                      />
                    </p>
                  </div>
                </div>
              </ContentOverImage>
              <div className={`${Style["gallery"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]}  ${Style["gallery__title"]}`}
                    >
                      <h3>
                        <Microcopy
                          entries={microcopy}
                          id="4pJ1ZPTkt61ffeWedHaNgx"
                        />
                      </h3>
                    </div>
                  </div>
                  <div
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__layout"]}`}
                    >
                      <div
                        className={`${Grid["row"]} ${Style["gallery__layout-featured"]} `}
                      >
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={BrainWeaver}
                              alt={"Drawing of Brian Weaver"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="7ovjEQqyvr2JPeG0dZlS5z"
                              />
                            </h5>
                            <p>
                              <Microcopy
                                entries={microcopy}
                                id="4u4aeTHWFKUgBdvDcOjmKR"
                              />
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={AmyBradshaw}
                              alt={"Drawing of Amy Bradshaw"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="4LJP18PGKSKV6flvGtKpsh"
                              />
                            </h5>
                            <p>
                              <Microcopy
                                entries={microcopy}
                                id="3r8Qt2pd1iot0YGMrmXXx3"
                              />
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={JanetHanofee}
                              alt={"Drawing of Janet Hanofee"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="3AJpqcTe6eRXZbL8RhBUsQ"
                              />
                            </h5>
                            <p>
                              <Microcopy
                                entries={microcopy}
                                id="39TThX7reWTVNU66xRVXEk"
                              />
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={DavidKern}
                              alt={"Drawing of David Kervin"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="6jFMIdATTAQjshDen0fyrL"
                              />
                            </h5>
                            <p>
                              <Microcopy
                                entries={microcopy}
                                id="2SrJ3gRwjF7dsYknUIcbnu"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__layout"]}`}
                    >
                      <div
                        className={`${Grid["row"]} ${Style["gallery__layout-list"]}`}
                      >
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={AdamLurie}
                              alt={"Drawing of Adam Lurie"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="60JEwAIGK86rmUFtiitssR"
                              />
                            </h5>
                            <p>
                              <Microcopy
                                entries={microcopy}
                                id="4xaKTyYJR6VF96BesQjrso"
                              />
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]}  ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={JasonDelker}
                              alt={"Drawing of Jason Delker"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="48GZFDmehqy1C5cVJ8rVVM"
                              />
                            </h5>
                            <p>
                              <Microcopy
                                entries={microcopy}
                                id="2MJF4Gd4EmyNJs5Gz2QaqL"
                              />
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={JonKramer}
                              alt={"Drawing of Jon Kramer"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="5Zgt3B5Mb3nvVmrviO7mhW"
                              />
                            </h5>
                            <p>
                              <Microcopy
                                entries={microcopy}
                                id="5IUCsd3Fzj4h13pKCIDPCP"
                              />
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={JenniferUtting}
                              alt={"Drawing of Jennifer Utting"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="5v04aX8A6yVEndfebQsY6F"
                              />
                            </h5>
                            <p>
                              <Microcopy
                                entries={microcopy}
                                id="7Mn0tBgi13E5HoKbICdqUe"
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Style["gallery"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]}  ${Style["gallery__title"]}`}
                    >
                      <h3>
                        <Microcopy
                          entries={microcopy}
                          id="6U3y2YhaWmHBLXdVXSv31K"
                        />
                      </h3>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="3qc2rh6iLDmymMmRadozVX"
                        />
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__layout"]}`}
                    >
                      <div
                        className={`${Grid["row"]} ${Style["gallery__layout-list"]}`}
                      >
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={BrainWeaver}
                              alt={"Drawing of Brian Weaver"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="Badahlu9e8ZOKblqkptjc"
                              />
                            </h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]}  ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={LaurenceTosi}
                              alt={"Drawing of Laurence Tosi"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="2grXuzJafTTiAXPnxoHeT0"
                              />
                            </h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={ChristanSchnedler}
                              alt={"Drawing of Christian Schnedler"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="3KVmsXGyesPxWAY7p0rRB8"
                              />
                            </h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={WilliamBeyer}
                              alt={"Drawing of William Beyer"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="424NYd6BFRReTJ1f9kiEEz"
                              />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Style["gallery"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]}  ${Style["gallery__title"]}`}
                    >
                      <h3>
                        <Microcopy
                          entries={microcopy}
                          id="3FPtgeOMGtZqkvc7d3pLxN"
                        />
                      </h3>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="6QxA7qcoXysSRYR1ARTYaw"
                        />
                      </p>
                    </div>
                  </div>
                  <div
                    className={`${Grid["row"]} ${Style["gallery__container"]}`}
                  >
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["gallery__layout"]}`}
                    >
                      <div
                        className={`${Grid["row"]} ${Style["gallery__layout-list"]}`}
                      >
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={KevinMarcus}
                              alt={"Drawing of Kevin Marcus"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="3JK4FIL7GTc5noF9v1MLas"
                              />
                            </h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]}  ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={MarkPerrin}
                              alt={"Drawing of Mark W. Perrin"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="5alFK4bykE1q4yr6Yzasf6"
                              />
                            </h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={HondoGeruts}
                              alt={'Drawing of James "Hondo" Geurts'}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="2VuKC17G7mOE3NKQCt23e7"
                              />
                            </h5>
                          </div>
                        </div>
                        <div
                          className={`${Grid["col-lg-3"]} ${Grid["col-xs-12"]} ${Style["gallery__layout-item"]}`}
                        >
                          <div
                            className={`${Style["gallery__layout-item-content"]}`}
                          >
                            <Image
                              src={MikeDanda}
                              alt={"Drawing of LtGen Mike Dana"}
                            />
                            <h5>
                              <Microcopy
                                entries={microcopy}
                                id="7bxCMjlNK6uERXsYBSpzj4"
                              />
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ContentOverImage
                className={clsx(Style.careers, "section")}
                contentProps={{
                  className: clsx(Grid.container, Grid.margin_center),
                }}
                imageProps={{
                  src: galleryBackground,
                  alt: "",
                  layout: "fill",
                  objectPosition: "left center",
                  objectFit: "contain",
                }}
              >
                <div className={clsx(Grid.row, Style.careers__content)}>
                  <div className={clsx(Grid["col-xs-12"], Grid["col-lg-6"])}>
                    <h2>
                      <Microcopy
                        entries={microcopy}
                        id="65hvS4h0kwdOieAKPSTM9f"
                      />
                    </h2>
                    <p>
                      <Microcopy
                        entries={microcopy}
                        id="6AcP8ezk701A5LGEao0wr3"
                      />
                    </p>
                    <div>
                      <Link href={careersPageSettings.path}>
                        <a role="button">
                          <Microcopy
                            entries={microcopy}
                            id="3sTrnyb7jga2Fey4XwLpAy"
                          />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </ContentOverImage>
              <div className={`${Landing["news"]} section`}>
                <News items={news} />
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
