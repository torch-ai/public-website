// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext, useEffect, useRef } from "react";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import Head from "next/head";
import Grid from "../../components/Grid/Grid";
import Image from "next/image";
import Style from "./styles.module.scss";
import { InView } from "react-intersection-observer";
import Footer from "../../components/Footer/Footer";
import { gsap } from "gsap";
import { getCustomPageAndMicrocopy } from "../../contentful/client";
import { TypeMicrocopy, TypeCustomPage } from "../../generated/contentful";
import Microcopy from "../../components/Microcopy/Microcopy";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import datamodel1 from "../../img/datamodel1.svg";
import datamodel2 from "../../img/datamodel2.svg";
import datamodel3 from "../../img/datamodel3.svg";
import LayoutContext from "../../components/layout/LayoutContext";
import { getHeadPageTitle } from "../../utils/meta";
import { PageSettings } from "../../types/next";
import pageIds from "../../contentful/pages";
import FullpageSection from "../../components/FullpageSection/FullpageSection";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export const pageSettings: PageSettings = {
  path: "/platform",
  linkContent: <>Platform</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const content = await getCustomPageAndMicrocopy(pageIds.platform);

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
  const arrowRef = useRef<HTMLDivElement>(null);

  const fullpageApiRef = useRef<fullpageApi>();

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

  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle(
            !!customPage ? customPage.fields.pageHeadTitle : []
          )}
        </title>
      </Head>
      <ScrollToTop
        scrollType="overrides"
        overrideIsBeyondFirstPage={
          fullpageApiRef.current &&
          !fullpageApiRef.current.getActiveSection().isFirst
        }
        overrideScrollToTopFunc={() => {
          fullpageApiRef.current.moveTo(1, 0);
        }}
      />
      <ReactFullpage
        licenseKey={"A33F98B7-1BF24B82-AB8933EF-A1EC533E"}
        navigation
        verticalCentered={false}
        responsiveWidth={1500}
        render={({ fullpageApi }) => {
          if (fullpageApi) {
            fullpageApiRef.current = fullpageApi;
          }
          return (
            <ReactFullpage.Wrapper>
              <FullpageSection className={Style.hero}>
                <Grid container marginCenter>
                  <Grid size={{ Xs: 12 }} className={Style.contentCenter}>
                    <h2 ref={titleRef}>
                      Nexus<sup>&trade;</sup>. The highest-performance data
                      processing platform ever built.
                    </h2>
                    <div ref={arrowRef} className={Style.circleIcon}>
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
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection className={Style.engines}>
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <Grid container marginCenter>
                    <Grid row>
                      <Grid marginCenter size={{ Lg: 12, Xs: 12 }}>
                        <h3>
                          Nexus<sup>&trade;</sup> is a transparent and
                          composable software platform bridging three powerful
                          capabilities:
                        </h3>
                      </Grid>
                    </Grid>
                    <Grid row className={Style.enginesModels}>
                      <Grid size={{ Lg: 4, Xs: 12 }}>
                        <div>
                          <Image src={datamodel1} alt={""} />
                        </div>
                        <div>
                          <h4>
                            <Microcopy
                              entries={microcopy}
                              id="24tbJdhd85ELlDe1RZJtyY"
                            />
                          </h4>
                          <p>
                            <Microcopy
                              entries={microcopy}
                              id="14Byiunh6hH79OrcBGddHQ"
                            />
                          </p>
                        </div>
                      </Grid>
                      <Grid size={{ Lg: 4, Xs: 12 }}>
                        <div>
                          <Image src={datamodel2} alt={""} />
                        </div>
                        <div>
                          <h4>
                            <Microcopy
                              entries={microcopy}
                              id="3LZYmzhiM1jyvJwCHzWhdC"
                            />
                          </h4>
                          <p>
                            <Microcopy
                              entries={microcopy}
                              id="5c8zgYDGXEdN5euZgFpDkw"
                            />
                          </p>
                        </div>
                      </Grid>
                      <Grid size={{ Lg: 4, Xs: 12 }}>
                        <div>
                          <Image src={datamodel3} alt={""} />
                        </div>
                        <div>
                          <h4>
                            <Microcopy
                              entries={microcopy}
                              id="5Seg6fDHb8r2Y4v2Osork9"
                            />
                          </h4>
                          <p>
                            <Microcopy
                              entries={microcopy}
                              id="4Bhzsi0WDiY1wAn8YxC58X"
                            />
                          </p>
                        </div>
                      </Grid>
                    </Grid>
                  </Grid>
                </InView>
              </FullpageSection>
              <FullpageSection className={Style.datalake}>
                <Grid container marginCenter>
                  <Grid row className={Style.datalakeContent}>
                    <Grid size={{ Lg: 6, Xs: 12 }}>
                      <h3>
                        <Microcopy
                          entries={microcopy}
                          id="2MG7aQRcsRNQzUCgGSCedC"
                        />
                      </h3>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="4mJVql0cD2lWeuRnNbF2dM"
                        />
                      </p>
                    </Grid>
                    <Grid size={{ Lg: 6, Xs: 12 }}>
                      <div className={Style.datalakeTitle}>
                        <h1>
                          <Microcopy
                            entries={microcopy}
                            id="4Th1X7N4Yl4xH1acv47xFM"
                          />
                        </h1>
                        <h4>
                          <Microcopy
                            entries={microcopy}
                            id="6vPtxA66tJ1c46G8i5AyoH"
                          />
                        </h4>
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
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection className={Style.code}>
                <InView
                  as="div"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <Grid container marginCenter>
                    <Grid row>
                      <div>
                        <h2>
                          <Microcopy
                            entries={microcopy}
                            id="flK6Kh6vQ586hcloCrcmV"
                          />
                        </h2>
                        <p className={Style.codeSubtitle}>
                          <Microcopy
                            entries={microcopy}
                            id="2OLuJ7H0zrzOOfRUJMvel8"
                          />
                        </p>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="1U9TeeGpzYzNN87Oox5tJa"
                          />
                        </p>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="7xvp4Y0Z8yAkXBdZmcRZb4"
                          />
                        </p>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="x2wWMPuLKHGiQ7WzUIDYR"
                          />
                        </p>
                      </div>
                    </Grid>
                  </Grid>
                </InView>
              </FullpageSection>
              <FullpageSection className={Style.benefits}>
                <Grid container marginCenter>
                  <Grid row>
                    <Grid size={{ Lg: 12, Xs: 12 }}>
                      <h2>
                        <Microcopy
                          entries={microcopy}
                          id="1KfEYLOmtc69ScfZUL75f8"
                        />
                      </h2>
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid size={{ Lg: 6, Xs: 12 }}>
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="skY8BLi1i1rP4PQN9ktr3"
                        />
                      </h5>
                      <ul>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="7zDk7DI6ULFJ7uZr7EcOcQ"
                          />
                        </li>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="6Hx4TV8Acy6QSUD9uVFu8g"
                          />
                        </li>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="4WbIUPz2yRyHlvNLoDdIj1"
                          />
                        </li>
                      </ul>
                    </Grid>
                    <Grid size={{ Lg: 6, Xs: 12 }}>
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="6hwpU83z36BLZfaI8x1LaQ"
                        />
                      </h5>
                      <ul>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="4sXu4ROUrG3It9KTIVNcIS"
                          />
                        </li>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="3aXKSBIHCwHooQJuC2rjxT"
                          />
                        </li>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="2eipJC43NSut00egHOxjEN"
                          />
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
                  <Grid row>
                    <Grid size={{ Lg: 6, Xs: 12 }}>
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="cywywbqbwJskDaGX8wNGC"
                        />
                      </h5>
                      <ul>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="4SGCAxIU3XmjpK37pzvjDb"
                          />
                        </li>
                      </ul>
                    </Grid>
                    <Grid size={{ Lg: 6, Xs: 12 }}>
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="784a8xWLpXdLHXLWNdt2Lo"
                        />
                      </h5>
                      <ul>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="3JZBkZYNOKPmqkd9YhGugn"
                          />
                        </li>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="6xrmfPgwA1YGDHZ6IvWggd"
                          />
                        </li>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="1TcZasCwa1KsjKchNNb5p9"
                          />
                        </li>
                      </ul>
                    </Grid>
                  </Grid>
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
