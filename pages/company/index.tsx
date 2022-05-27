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
import LayoutContext from "../../components/layout/LayoutContext";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getNewsEntries } from "../../contentful/client";
import { TypeNews } from "../../generated/contentful";
import { getHeadPageTitle } from "../../utils/meta";
import { pageSettings as careersPageSettings } from "../careers";
import { PageSettings } from "../../types/next";
import clsx from "clsx";

export const pageSettings: PageSettings = {
  path: "/company",
  linkContent: <>Company</>,
};

export const getStaticProps: GetStaticProps<{
  news: TypeNews[];
}> = async () => {
  const res = await getNewsEntries({
    limit: 5,
  });

  return {
    props: {
      news: res.items,
    },
  };
};

const Index = ({
  news,
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
          {getHeadPageTitle([
            "Kansas City's next great company",
            "Unmatched environment for innovation",
          ])}
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
              <div
                data-anchor="culture"
                className={clsx(Style.culture, "section")}
              >
                <div
                  className={clsx(
                    Style.culture__content,
                    Grid.container,
                    Grid.margin_center
                  )}
                >
                  <div className={Grid.row}>
                    <div
                      className={`${Grid["col-xs-12"]} ${Grid["col-lg-12"]}`}
                    >
                      <h3>Total badasses.</h3>
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-3"]}`}>
                      <h5>Mission-Focused</h5>
                      <p>
                        We have the awesome privilege of sharing responsibility
                        for the security of our country and the lives of
                        warfighters protecting that security. From this starting
                        point, we’ve developed a deep sense of duty to our
                        clients, company, and each other. Our client’s mission
                        is our mission.
                      </p>
                    </div>
                    <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-8"]}`}>
                      <h5>Curious & Innovative</h5>
                      <p>
                        We are always interested in finding new and better ways
                        to do things and never satisfied with what we have. We
                        wonder constantly about “what could be” and how we might
                        “solve the unsolvable.”
                      </p>
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-3"]}`}>
                      <h5>Gumption</h5>
                      <p>
                        We approach everything we do with a level of passion and
                        intensity, consistent with the knowledge and
                        understanding that our work is important and meaningful.
                        We think and act like a start-up. Every day is Day 1.
                      </p>
                    </div>
                    <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-8"]}`}>
                      <h5>Do What's Right</h5>
                      <p>
                        We approach every decision, action, and interaction with
                        an unwavering commitment to being ethical, considerate,
                        transparent, and focused on achieving the best outcome
                        for our clients and team, rather than ourselves.
                      </p>
                    </div>
                  </div>
                </div>
                <div className={Style.cultureBackground}>
                  <Image
                    layout={"fill"}
                    objectFit={"contain"}
                    objectPosition={"right bottom"}
                    className={Style.cultureBackgroundImage}
                    src={logoBookshelf}
                    alt={"Logo made with photo!"}
                  />
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
                      <h3>Leadership.</h3>
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
                            <h5>Brian Weaver</h5>
                            <p>Chief Executive Officer</p>
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
                            <h5>Amy Bradshaw</h5>
                            <p>Chief Financial Officer</p>
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
                            <h5>Janet Hanofee</h5>
                            <p>Chief People Officer</p>
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
                            <h5>David Kervin</h5>
                            <p> Chief Solutions Officer</p>
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
                            <h5>Adam Lurie</h5>
                            <p>Chief Strategy Officer</p>
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
                            <h5>Jason Delker</h5>
                            <p>Chief of Product</p>
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
                            <h5>Jon Kramer</h5>
                            <p>Chief Technology Officer</p>
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
                            <h5>Jennifer Utting</h5>
                            <p>General Counsel</p>
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
                      <h3>Board of Directors</h3>
                      <p>
                        Torch.AI's board members have vast domain, technology,
                        product, and business experience, and are helping us
                        create one of our country's great companies. We endeavor
                        to make the world a better place by advancing the use of
                        AI to change how data is put to use.
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
                            <h5>Brian Weaver</h5>
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
                            <h5>Laurence Tosi</h5>
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
                            <h5>Christian Schnedler</h5>
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
                            <h5>William Beyer</h5>
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
                      <h3>Board of Advisors</h3>
                      <p>
                        Torch.AI's board of advisors have vast domain,
                        technology, product, and business experience, and are
                        helping create one of our country's great companies.
                        Their unique backgrounds and experience allow us to make
                        the world a better place by advancing the use of AI to
                        change how data is put to use.
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
                            <h5>Kevin Marcus</h5>
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
                            <h5>Mark W. Perrin</h5>
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
                            <h5>James "Hondo" Geurts</h5>
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
                            <h5>LtGen Mike Dana</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={` ${Style["careers"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div
                    className={`${Grid["row"]} ${Style["careers__content"]}`}
                  >
                    <div className={`${Grid["col-xs-12"]} ${Grid["col-lg-6"]}`}>
                      <h2>Careers.</h2>
                      <p>
                        At Torch.AI, we are passionate about building software
                        that solves some of the world's most challenging
                        problems. Our work is hard. It is fun. It has meaning.
                        We have built a team of exceptional people that build
                        great products and provide the highest quality support
                        and services. If you are a curious pioneer looking for a
                        challenge, let's connect.
                      </p>
                      <div className={` ${Style["button__content"]}`}>
                        <Link href={careersPageSettings.path}>
                          <a role="button">Find your job</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
