// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import router from "next/router";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Image from "next/image";
import Style from "./styles.module.scss";
import Grid from "../../components/Grid/Grid";
import NewsGrid from "../../components/News/NewsGrid";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/Footer";
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
import { pageSettings as newsroomPageSettings } from "../newsroom";
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
import FullpageSection from "../../components/FullpageSection/FullpageSection";
import pageIds from "../../contentful/pages";

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

  const content = await getCustomPageAndMicrocopy(pageIds.company);

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
              <FullpageSection className={Style.hero}>
                <Grid container marginCenter>
                  <InView
                    as="div"
                    onChange={(inView) =>
                      setNavColor(inView ? "white" : "black")
                    }
                  >
                    <Grid row>
                      <Grid size={{ Xs: 12 }} className={Style.contentCenter}>
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
                        <div className={clsx(Style.forbes)}>
                          <Image
                            className={clsx(Style.forbesImg)}
                            src={forbes}
                            alt={
                              "Recognized by Forbes as one of America's best startups employers for 2022"
                            }
                          />
                        </div>
                      </Grid>
                    </Grid>
                  </InView>
                </Grid>
              </FullpageSection>
              <FullpageSection>
                <ContentOverImage
                  data-anchor="culture"
                  className={clsx(Style.culture, "section")}
                  imageProps={{
                    src: logoBookshelf,
                    alt: "Logo made with photo!",
                    layout: "fill",
                    objectFit: "contain",
                    objectPosition: "right bottom",
                  }}
                >
                  <Grid row>
                    <Grid size={{ Xs: 12, Lg: 12 }}>
                      <h3>
                        <Microcopy
                          entries={microcopy}
                          id="3ygbPcVyaAM61oVIjWTK93"
                        />
                      </h3>
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid size={{ Xs: 12, Lg: 3 }}>
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
                    </Grid>
                    <Grid size={{ Xs: 12, Lg: 8 }}>
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
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid size={{ Xs: 12, Lg: 3 }}>
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
                    </Grid>
                    <Grid size={{ Xs: 12, Lg: 8 }}>
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
                    </Grid>
                  </Grid>
                </ContentOverImage>
              </FullpageSection>
              <FullpageSection className={Style.gallery}>
                <Grid container marginCenter>
                  <Grid row>
                    <Grid size={{ Xs: 12 }} className={Style.galleryTitle}>
                      <h3>Leadership.</h3>
                    </Grid>
                  </Grid>
                  <Grid row className={Style.galleryContainer}>
                    <Grid size={{ Xs: 12 }} className={Style.galleryLayout}>
                      <Grid row className={Style.galleryLayoutFeatured}>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid row className={Style.galleryContainer}>
                    <Grid size={{ Xs: 12 }} className={Style.galleryLayout}>
                      <Grid row className={Style.galleryLayoutList}>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection className={Style.gallery}>
                <Grid container marginCenter>
                  <Grid row>
                    <Grid size={{ Xs: 12 }} className={Style.galleryTitle}>
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
                    </Grid>
                  </Grid>
                  <Grid row className={Style.galleryContainer}>
                    <Grid size={{ Xs: 12 }} className={Style.galleryLayout}>
                      <Grid row className={Style.galleryLayoutList}>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection className={Style.gallery}>
                <Grid container marginCenter>
                  <Grid row>
                    <Grid size={{ Xs: 12 }} className={Style.galleryTitle}>
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
                    </Grid>
                  </Grid>
                  <Grid row className={Style.galleryContainer}>
                    <Grid size={{ Xs: 12 }} className={Style.galleryLayout}>
                      <Grid row className={Style.galleryLayoutList}>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                        <Grid
                          size={{ Lg: 3, Xs: 12 }}
                          className={Style.galleryLayoutItem}
                        >
                          <div className={clsx(Style.galleryLayoutItemContent)}>
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
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection>
                <ContentOverImage
                  className={clsx(Style.careers, "section")}
                  imageProps={{
                    src: galleryBackground,
                    alt: "",
                    layout: "fill",
                    objectPosition: "left center",
                    objectFit: "contain",
                  }}
                >
                  <Grid container marginCenter>
                    <Grid row className={Style.careersContent}>
                      <Grid size={{ Xs: 12, Lg: 6 }}>
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
                      </Grid>
                    </Grid>
                  </Grid>
                </ContentOverImage>
              </FullpageSection>
              <FullpageSection className={Style.news}>
                <Grid container marginCenter>
                  <NewsGrid news={news} title="Latest News" />
                  <Button
                    style={{ display: "block" }}
                    onClick={() => {
                      router.push(newsroomPageSettings.path);
                    }}
                  >
                    View all
                  </Button>
                </Grid>
              </FullpageSection>
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Index;
