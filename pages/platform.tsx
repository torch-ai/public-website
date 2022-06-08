// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Grid from "../styles/modules/grid.module.scss";
import Image from "next/image";
import Style from "../styles/modules/platform.module.scss";
import { InView } from "react-intersection-observer";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypeMicrocopy, TypeCustomPage } from "../generated/contentful";
import { getCustomPageAndMicrocopy } from "../contentful/client";
import { createMicrocopyComponent } from "../components/Microcopy/Microcopy";
import datamodel1 from "../img/datamodel1.svg";
import datamodel2 from "../img/datamodel2.svg";
import datamodel3 from "../img/datamodel3.svg";
import LayoutContext from "../components/layout/LayoutContext";
import { getHeadPageTitle } from "../utils/meta";
import { PageSettings } from "../types/next";

export const pageSettings: PageSettings = {
  path: "/platform",
  linkContent: <>Platform</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage: TypeCustomPage;
}> = async () => {
  const microcopy = await getCustomPageAndMicrocopy("2yr6rxUJNQz7QHpruI8VRw");

  return {
    props: {
      microcopy: microcopy.items,
      customPage: (microcopy.includes.Entry as TypeCustomPage[])[0],
    },
  };
};

const Platform = ({
  microcopy,
  customPage,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);

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
      arrowRef.current,
      { opacity: 0, y: "-100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration / 2, delay }
    );
  }, []);

  const Microcopy = createMicrocopyComponent(microcopy);

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
              <div className={` ${Style["hero"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div
                    className={`${Grid["col-xs-12"]} ${Style["content-center"]}`}
                  >
                    <h2 ref={titleRef}>
                      Nexus<sup>&trade;</sup>. The highest-performance data
                      processing platform ever built.
                    </h2>
                    <div ref={arrowRef} className={`${Style["circle-icon"]}`}>
                      <svg
                        width="50"
                        height="50"
                        viewBox="0 0 80 80"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="40" cy="40" r="39.5" stroke="white" />
                        <path
                          d="M54.3773 40.4767L54.3796 40.479L55.2318 41.3243C55.4056 41.5037 55.5015 41.7425 55.5 41.9899C55.4985 42.2382 55.399 42.4769 55.2216 42.6545C55.2215 42.6546 55.2213 42.6547 55.2212 42.6548L41.1742 56.6368C40.9941 56.811 40.7516 56.9092 40.4983 56.9092C40.2451 56.9092 40.0027 56.811 39.8226 56.6369L25.7898 42.6569C25.7893 42.6565 25.7889 42.6561 25.7885 42.6557C25.6127 42.4771 25.515 42.2383 25.515 41.9903C25.515 41.7426 25.6126 41.504 25.7881 41.3255C25.7887 41.3249 25.7892 41.3244 25.7898 41.3238L26.6415 40.4791L26.6438 40.4767C26.7312 40.3888 26.8356 40.3188 26.951 40.271C27.0664 40.2231 27.1904 40.1984 27.3156 40.1984C27.4409 40.1984 27.5649 40.2231 27.6803 40.271C27.7956 40.3188 27.8999 40.3888 27.9874 40.4767L27.9889 40.4782L38.0928 50.549L38.9458 51.3991L38.9458 50.1948L38.9458 24.4423C38.9458 24.1938 39.0453 23.9546 39.2238 23.7775C39.4024 23.6004 39.6454 23.5001 39.8997 23.5001L41.1214 23.5001C41.3757 23.5001 41.6187 23.6004 41.7973 23.7775C41.9758 23.9546 42.0753 24.1938 42.0753 24.4423L42.0753 50.1948L42.0753 51.3991L42.9283 50.549L53.0322 40.4782L53.0337 40.4767C53.1212 40.3888 53.2255 40.3188 53.3408 40.271C53.4562 40.2231 53.5802 40.1984 53.7055 40.1984C53.8307 40.1984 53.9547 40.2231 54.0701 40.271C54.1855 40.3188 54.2899 40.3888 54.3773 40.4767Z"
                          fill="white"
                          stroke="white"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Style["engines"]} section`}>
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div
                    className={`${Grid["container"]} ${Grid["margin_center"]}`}
                  >
                    <div className={`${Grid["row"]}`}>
                      <div
                        className={`${Grid["col-lg-12"]} ${Grid["col-xs-12"]} ${Grid["margin_center"]}`}
                      >
                        <Microcopy id="7E0DOj5tn2i4SXQ6u6WSl8" />
                      </div>
                    </div>
                    <div
                      className={`${Grid["row"]} ${Style["engines__models"]}`}
                    >
                      <div
                        className={`${Grid["col-lg-4"]} ${Grid["col-xs-12"]}`}
                      >
                        <div>
                          <Image src={datamodel1} alt={""} />
                        </div>
                        <div>
                          <Microcopy id="58eU8jhDl31NfXVwwrSaov" />
                        </div>
                      </div>
                      <div
                        className={`${Grid["col-lg-4"]} ${Grid["col-xs-12"]}`}
                      >
                        <div>
                          <Image src={datamodel2} alt={""} />
                        </div>
                        <div>
                          <Microcopy id="2QI3k7g9CVXk8osHhkYdmA" />
                        </div>
                      </div>
                      <div
                        className={`${Grid["col-lg-4"]} ${Grid["col-xs-12"]}`}
                      >
                        <div>
                          <Image src={datamodel3} alt={""} />
                        </div>
                        <div>
                          <Microcopy id="hLuHIbi3VJubemjGnjcvL" />
                        </div>
                      </div>
                    </div>
                  </div>
                </InView>
              </div>
              <div className={`${Style["datalake"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div
                    className={`${Grid["row"]} ${Style["datalake__content"]}`}
                  >
                    <div className={`${Grid["col-lg-6"]} ${Grid["col-xs-12"]}`}>
                      <Microcopy id="IiM647ZizgxwpqmFpWMUM" />
                    </div>
                    <div className={`${Grid["col-lg-6"]} ${Grid["col-xs-12"]}`}>
                      <div className={`${Style["datalake__title"]}`}>
                        <h1>10.7x</h1>
                        <h4>Faster compute performance.</h4>
                      </div>
                      <div>
                        <table>
                          <tbody>
                            <tr>
                              <td>Nexus: </td>
                              <td>3.78 GB per 1 second 32-core CPU</td>
                            </tr>
                            <tr>
                              <td>Nearest peer:</td>
                              <td>
                                0.345 GB per 1 second 32-core CPU (built on
                                Apache Spark)
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Style["code"]} section`}>
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div
                    className={`${Grid["container"]} ${Grid["margin_center"]}`}
                  >
                    <div className={`${Grid["row"]}`}>
                      <div className={`${Grid["col-lg-1"]}${Grid["col-xs-8"]}`}>
                        <h2>As Code</h2>
                        <p className={`${Style["code__subtitle"]}`}>
                          The engineer-friendly approach
                        </p>
                        <Microcopy id="lzAHB4u9lAcWVCceGkblD" />
                      </div>
                    </div>
                  </div>
                </InView>
              </div>
              <div className={`${Style["benefits"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-lg-12"]} ${Grid["col-xs-12"]}`}
                    >
                      <h2>Features and benefits</h2>
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div className={`${Grid["col-lg-6"]} ${Grid["col-xs-12"]}`}>
                      <Microcopy id="1a6A1yjCwK99DBAQMRz1bm" />
                    </div>
                    <div className={`${Grid["col-lg-6"]} ${Grid["col-xs-12"]}`}>
                      <Microcopy id="5CLWOqc6fslOOfxsjwzO1W" />
                    </div>
                  </div>
                  <div className={`${Grid["row"]}`}>
                    <div className={`${Grid["col-lg-6"]} ${Grid["col-xs-12"]}`}>
                      <Microcopy id="3esBCYvqHSAEEmk63GqgoH" />
                    </div>
                    <div className={`${Grid["col-lg-6"]} ${Grid["col-xs-12"]}`}>
                      <Microcopy id="2WpPX6VJRRFy2xnBMvW7We" />
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Platform;
