// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext } from "react";
import Head from "next/head";
import Style from "../styles/modules/solution.module.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { InView } from "react-intersection-observer";
import Footer from "../components/Footer";
import LayoutContext from "../components/layout/LayoutContext";
import { getHeadPageTitle } from "../utils/meta";
import { PageSettings } from "../types/next";
import { getCustomPageAndMicrocopy } from "../contentful/client";
import { TypeMicrocopy, TypeCustomPage } from "../generated/contentful";
import Microcopy from "../components/Microcopy/Microcopy";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import pageIds from "../contentful/pages";

export const pageSettings: PageSettings = {
  path: "/solutions",
  linkContent: <>Solutions</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const content = await getCustomPageAndMicrocopy(pageIds.solutions);

  return {
    props: {
      microcopy: content.microcopy,
      customPage: content.customPage || null,
    },
  };
};

const Solutions = ({
  microcopy,
  customPage,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle(
            !!customPage ? customPage.fields.pageHeadTitle : []
          )}
        </title>
      </Head>
      <section className={`${Style["wrap"]}`}>
        <InView
          as="span"
          onChange={(inView) => setNavColor(inView ? "white" : "white")}
        >
          <Parallax pages={46} className={`${Style["wrapper"]}`}>
            <ParallaxLayer
              className={`${Style["sol-title"]}`}
              offset={0}
              speed={2.5}
            >
              <div className={`${Style["container"]}`}>
                <h2>
                  <Microcopy entries={microcopy} id="6XjILsMC9rJHZb42LGvQnz" />
                </h2>
                <p>
                  <Microcopy entries={microcopy} id="50pI2pTGSmUgEMCAINvP2C" />
                </p>

                <div className={`${Style["index"]}`}>
                  <div className={`${Style["index-item"]}`}>
                    <a
                      href="#infrastructure"
                      className={`${Style["index-content"]}`}
                    >
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="2nqPqgtH5H6zv12EoRa60A"
                        />
                      </h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a
                      href="#analytics"
                      className={`${Style["index-content"]}`}
                    >
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="3RWWJDnMeXft6MD5HHAqNQ"
                        />
                      </h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a href="#machine" className={`${Style["index-content"]}`}>
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="7FbhlDst4QKtuqbCplBV9P"
                        />
                      </h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a
                      href="#enterprise"
                      className={`${Style["index-content"]}`}
                    >
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="3s69DqQHUZXqLAmYGzMmOI"
                        />
                      </h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a
                      href="#openSource"
                      className={`${Style["index-content"]}`}
                    >
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="1CvSOb4NZFGLNsqeSnYp29"
                        />
                      </h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a href="#dataApis" className={`${Style["index-content"]}`}>
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="2nlSq9SVPI3lP0M4MhaVkt"
                        />
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </ParallaxLayer>

            {/* <ParallaxLayer offset={1} speed={0.9} className={`${Style['sol-background']}`} /> */}

            {/* Section Infrastructure */}

            <ParallaxLayer
              sticky={{ start: 1, end: 9 }}
              className={`${Style["sol-subtitle"]} ${Style["desktop-only"]}`}
              id="infrastructure"
              offset={1}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-infra"]}`}>
                  <Microcopy entries={microcopy} id="5bXBdXXJuZHeso1bIrXwI1" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="5h1yxzu89hoJmwEbDeWNvm" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]}`}
              offset={1}
              // id='infrastructure'
              speed={0.5}
            >
              <div className={`${Style["container"]} ${Style["mobile-only"]}`}>
                <h3 className={`${Style["title-infra"]}`}>
                  <Microcopy entries={microcopy} id="12zBPZUh0OLJzPFbbvdJT4" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="5ETVuZWGKqd1v7G2WSybTF" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={2}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]} `}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3eICwpeWk43rbeC3VsJLHk"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="3rvsj5adkSS4u06czZsfrV"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="26fiECcebORCb7DIg2Ho4S"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="1VpEQIJK9CaOAHiej5ggad"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="34fA1EsUJaoyQN5Daxt8zq"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={3}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="1ysc4s4fgnyV35XHmivBr8"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="7lRTrPEilQivKlsJXrrUZK"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="6jPQgqEWtEsj1PbNQEGWFs"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="vag7Tjosg00e6aH6S8fMu" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="3ILCGPmp8O0pTSgSIEqaLD"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={4}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3A44j4VNQtDsqfovhgc8vl"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="6iKM9PiyiOEbRCPVASUQhT"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1AgOqugyt2NHflOPznzBYC"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="66Wrz5ZgIQttzrDn1vB6Nj"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="7s9w34XOqbF5VbBuWEx6K2"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={5}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="2ONO7mFehjpVgwsoQZtG52"
                    />
                  </h3>
                  <p>
                    <Microcopy entries={microcopy} id="Q0fMSVCsUrPEuyQ0I3ndi" />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1xhw2jH8MV7LqJcfvmg46y"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="5ywMv6WL1L96fX9G4pAGbK"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2oatKq7cA7XRQFIjm1rQ1T"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={6}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="5FAyk5g9dnqNmw9rgLzFQF"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="7H0Wc5EewwmWJHFdvg92wH"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy entries={microcopy} id="5MWlwBgdWUr9bEWlcm2BX" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2JarEKUdOysFPvaAiHDW4L"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="6frZ3dHB3mQc2ZJXZkXlUQ"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={7}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="7EwfjkXe0oO5EKKS6fXr2q"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="3H9nVKN7lygrM6bmWtFGVC"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1nn8KoUKFwvsWUJTV7hFv9"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="1yBdf6lltigmEujILUUbBF"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2pHguYzHewAVr9eBXrozCW"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={8}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="7ntdFsGQqfi2GiZSaJ9Fe5"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="7ANRRfqAXsqOQvbgtTI549"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy entries={microcopy} id="PPuKv1errjf8KFPmgwMWl" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4cFDfMsk8LbpBy3jmwgw5w"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="5ohsRZXdN6taHh1PV2ayPv"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={9}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="4VnhsZtivMEp7NZUJ7cfQB"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="6XJ6SCkFN06vzVKRl8CfKw"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="7fhzPJCRLbd0VSCX4mld5L"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2gYq1GwAhtdbcIM91cgNyG"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2AjJ77MluT8Dy2AhBmB3Dq"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            {/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
            {/* Section Analytics */}

            <ParallaxLayer
              sticky={{ start: 10, end: 15 }}
              className={`${Style["sol-subtitle"]} ${Style["desktop-only"]}`}
              id="analytics"
              offset={10}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3>
                  <Microcopy entries={microcopy} id="3vGG0rIdAwfr5xNaUwsa9J" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="2Nxk0xBXclwJtzt6gaypGR" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={10}
              // id='analytics'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-analytics"]}`}>
                  <Microcopy entries={microcopy} id="77b1ls9oYC8ZQ1B70lZUK0" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="7m75ybAiIFz4IRje3LWx35" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={11}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy entries={microcopy} id="GecKyCLO8aUYZvEQsIf6z" />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="3C3gjDDfVd7Q5q8grGfW2x"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="5ZGqfCkFL25LnnzDraWnWS"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="6vopieUSFn0XJw8uBoqloC"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4R1aTkYkawtYgJtpT1Pv3j"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={12}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="7wN2IDQBWCF0b4X1hPHSA2"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="7JdJ8CP1gjFQ26Nv3BJORa"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="10bY73YUed2bjmFYd9RAav"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="45jq6kuy63tA67vR9WECH2"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="1G9z0lEyo21MsnxGfnsKhC"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={13}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="1C3M1sAfs50nRgdbe8m6po"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="61pieNCIaWS3kbxllh7i9U"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="3HT9j4HW9b5sfFmT8vm7OO"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="7isjt5Mi5yZX57SCI0ETCW"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="3U2H4YAnRhI2lUf2XMMjHa"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={14}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="5FqKmWBoTVRKVcQKvuhKSU"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="7dbm1zBuePdrfnkjKm0ofY"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1dCBv2T0j6X5hjYjqKVQrn"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="5mKWHUdPToanSsPeUhoLYa"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="380nbfUaT44Lz756HgxZEk"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={15}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="4LJmF6PjtKEO67oRAhXnUU"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="2r3EqiodhDL9MV7Ts6b9ib"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="7oSuW80PPIspTMDszvwZ9n"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="3lZ5AE5FaJihDD4Lfj5AOt"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="5OUjMyPMq7YvjlKhrf7W7i"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            {/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
            {/* Section Machine learning & AI */}

            <ParallaxLayer
              sticky={{ start: 16, end: 25 }}
              className={`${Style["sol-subtitle"]} ${Style["desktop-only"]}`}
              id="machine"
              offset={16}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-machine"]}`}>
                  <Microcopy entries={microcopy} id="f7AVVbtEoaHRNbWRhD4pB" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="3FdcBna3mjJBbQjzF00BSn" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={16}
              // id='machine'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-machine"]}`}>
                  <Microcopy entries={microcopy} id="m6OzKVsIplGJvyH7ups2t" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="6WfoQsjq7BPcSe5zeoMryd" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={17}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3VxDh2hRzK6D5i8EoztfRW"
                    />
                  </h3>
                  <p>
                    <Microcopy entries={microcopy} id="Wnvo34tOEgBn4Qk2FrmrI" />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1S44zbBcRnJ6g1y1KUN2ap"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="3iNKyeBTPik0yaWl35ttj0"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="7FAz7EzmAH3DoLAHEX2STa"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={18}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="6mLBAFgdN7odvrTAsgK6QA"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="7vQm9PaxBEAuyJ0DVyRASD"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1tmmPB8VGznynxAx8opg3h"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2OgnEMDeBygaFXqInBPyUE"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="3kUhAdIMzT7xfnw727pjcI"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={19}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="6BU1fewptackaNbbHVPYkD"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="6Xge75VqZKET0jaJv0Z55m"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy entries={microcopy} id="9nvwXrGvDMQIMkRL5CCLi" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="HDPuj44gWWCMRnXZz2i75" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="nAXISeshVbycHdkLwX8mt" />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={20}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="622nWmwmnhCwoGasftMgRu"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="4rqFsoJ2GgNOP9LuLfzIR2"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="6dx4jxEF9wDOpJuSgamdwk"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="1kpsaiGSifxByCq3pq7nOJ"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2JBsKXvIEdOEOwS0h7npBQ"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={21}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3lABvQMjeODxeBBBTm8i89"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="2eyVLOHJhjPAbU9Ko67PcR"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="4sQr7LHQusgkmArWtrhMu9"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="5lKQoE4PbeDEhVFl8AYfLt"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="3LuneuPAIES42vofLR14Hd"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={22}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy entries={microcopy} id="biIoi5OTbyq4MfcmSWiEJ" />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="6AS4n3UFZsBc8DrKWHGxeM"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy entries={microcopy} id="NlYNsleRWHgiTn8zCjGbO" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="ukEXrQzDJ84gIEZphvvkg" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4AvoCcIXrwA0jd9CWuwYL0"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={23}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="7wU5GXTtdOx7KJPoqzxMov"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="25ZnRWfFpb0FRX8lgowiLm"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="2HTXNJjYNEFhP6TtBD6eMK"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2FoO71YDTAwPpiC5ETNutm"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="6daeY6o3ns7pJzm5yTYZ5H"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={24}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="4322BtclOBU4ZNWFGsiYdE"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1tLicSdwwHtJ778vr8TlDi"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="5DmYopRtfIApaAWnDm3NdN"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="vFhVOGb50A5t4qmifJ4sj" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4q9Qlvr7q2VrRbjXTa6zkH"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={25}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="6r8OHnbn5EKUKLCoOKYtFA"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="3a4clSHBVBAyQwxBSs72AY"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="4PjQ71riz44dJZcK7dpZpU"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="XQePSDmCRdOQ2vo3zwHsW" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4F06HC0u0W1d5dRx86YtfW"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            {/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
            {/* Section Enterprise Applications */}

            <ParallaxLayer
              sticky={{ start: 26, end: 33 }}
              className={`${Style["sol-subtitle"]} ${Style["desktop-only"]}`}
              id="enterprise"
              offset={26}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-machine"]}`}>
                  <Microcopy entries={microcopy} id="3U45RNRTZXsALSuGKPN6ml" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="75rlNmNHcCkWwWZiYujmJ3" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={26}
              // id='enterprise'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-machine"]}`}>
                  <Microcopy entries={microcopy} id="2vZzW3U2OFbqJi8yldC7mG" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="2aJFHtHkpLELi1eAmUpO17" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={27}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="4759SsmiX7sXdzVB5ezi43"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="3OfQwVYpgiaICcEOjQSEXf"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="2i5uYcO8ALiGmR7BsOPgsS"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4Lh1yVCCJtagUKo2Dhg3iD"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="3BjmBxergLmfkkfw1fHzCC"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={28}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="7o3y09ReyIcSbk9QMOcS0N"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="3o5mtL8krOTxKAd9cMhwXw"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="6xWrFFFRk18nj7PHc6fnVG"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="6PnYaS4XOWtwmrNOckIca4"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="53ORxZmPUfSN1t6DGRxODZ"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={29}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3llZFhnUR3X0GGTIqqTPyz"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1whDQh3Z9WWtc1MqzIyce9"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="4P6ocXxcNw2H2vkRreMsd0"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4CTAMBtjNh8YlJIc46X2U9"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="1rJnVqCj8HJkp1nquC0g4P"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={30}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy entries={microcopy} id="wsUaDDFprCZjUvPoZjVNP" />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="3ZVTRyX3oRDgU0ute1RjIw"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy entries={microcopy} id="FIQzuFYCX9xd5voJuzqaD" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4Eyo4xtC9LZfSjiDWY9GJI"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="XxxUsSAgsmGBzJ33ALfFW" />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={31}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3tmGuwOzMnJgZtfZ9OQZFt"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="2bLSiCrSrg0tYDoFpLUUQN"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="4NOIlWCdkFlLd4Ud6fK5zs"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="21QQJTBzpLTjmlwjsS3iwA"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2zOjnWLOoKYUYhwH699bds"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={32}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="6JvHFCvp6ABeEuRvBjJxuI"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="7JjDg0blu7pVN5J4fjSTnI"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="4ghimZfqGD4rt0bh2JywDu"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="6Aet7SsKlOqksVGp0WKjVm"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="5OrNGPF6uWbyYicg4osYGb"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={33}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy entries={microcopy} id="kg3uARNwHb3JduIE1vIc9" />
                  </h3>
                  <p>
                    <Microcopy entries={microcopy} id="oCT880yH6RrZ7YjnMmexc" />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1lYLuXS7C1qsVcjhOkWigs"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="6gyFiqSW6SwXlMhypgPtzD"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="7Iy7sEcKKHFd5BfReogOH3"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            {/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
            {/* Section Open Source */}

            <ParallaxLayer
              sticky={{ start: 34, end: 39 }}
              className={`${Style["sol-subtitle"]} ${Style["desktop-only"]}`}
              id="openSource"
              offset={34}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-machine"]}`}>
                  <Microcopy entries={microcopy} id="1ch1zoHhJh4B0xjMv9CHdx" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="1MbCtwbqVrwAChkuXQcebx" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={34}
              // id='openSource'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-openSource"]}`}>
                  <Microcopy entries={microcopy} id="2SmzNqnUOF4XXA4dLnq8ld" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="1wgzweK3EM3K68sEFoBBdJ" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={35}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3D2Bnxi1J00YRK9UctKZQI"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="5xtSAqNXAS8hiKA4NHQGUn"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1E3PMJJoaqM0ZrhknosVWK"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="lmp1Zyvpv4SwJf00RxpEH" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="6PdxjU6aRwp7QVVEKdGTsF"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={36}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="6qYwlpOP2KTV5VoyuqoSqr"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="50mhYUZflWp34hMu1XYsU4"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="37OCH4L5yp8JUOlPTW5iOO"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="7Gzv3npO2crwBJww0Eq78j"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="5CoNWPP06O4jdM8rKCzLDZ"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={37}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy entries={microcopy} id="bdUnGusME8mFjk9Z2Xb7r" />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="38PGD1A3ANjsjh986nI5q2"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="5hmSsOAQxTE9i7cRefIRBO"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="2m1QvGAnZw99jooBOteQkz"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="1epCrPdWya5J6thXcbmrGY"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={38}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3irO9MiJm5n5jEj9uEGDV1"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="2sfQZt8d89fbhH2V10cSpJ"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="5hY6xUys8KqKf9QS6eKTwj"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="6w7r861hXWNcl3xgy75j4m"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="kHWdOSZOZOgB0ICG91CnG" />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={39}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="2WTLaNHluQQRYcbxYIJjbx"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1ljwZr6LSIVgjRFVTuMZqj"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1jUU51aQadjGY760dUbptX"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="6FhvSYTuZahDt7gMXVctlX"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="M5nqa4xnPQMlaXbTvosZw" />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            {/* <ParallaxLayer offset={10} speed={2} className={`${Style['sol-background']}`} /> */}
            {/* Section Data APIs */}

            <ParallaxLayer
              sticky={{ start: 40, end: 44 }}
              className={`${Style["sol-subtitle"]} ${Style["desktop-only"]}`}
              id="dataApis"
              offset={40}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-machine"]}`}>
                  <Microcopy entries={microcopy} id="51pvjP3a4kQC2TjggUDWSO" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="3K6DJKoDNzD4QxLrofzXlX" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={40}
              // id='dataApis'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <h3 className={`${Style["title-openSource"]}`}>
                  <Microcopy entries={microcopy} id="6qKIgEouYG7oNYiTKJj2hb" />
                </h3>
                <p>
                  <Microcopy entries={microcopy} id="3lolvTKiKBJzyZm6eVdY7M" />
                </p>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={41}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="1FKZ0KvBAVZ6GKjaRz8utZ"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="3LmWEWp29GXG63qd3P2hwD"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="5tdOsRLNRZJ1agzMK59IPO"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="1b70LZFCmJWXZthKNDMBIO"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="467ZSYwGvTNieGpd2cuutj"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={42}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="1O2wpGTQFO9i4AlvlrN4ZS"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="5uUvfddFuugEJvS1W6GAjm"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="328CagX7edWOouUJkhPWtr"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4e92prsEBcNyk8MZ6FICZa"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4ovM06d6mTxy5IvxmQissx"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={43}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="7kLxAWOK4i5HNPHqkAhOCf"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="39AkDEIpy9PSIe5xZbVHJU"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="6an0Dy9L0Z3BlEOtJXKiHF"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="9dzed0PFdC5pjdjkGXjKj" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy
                      entries={microcopy}
                      id="4RIRZU6c63GsA0ayjFYMCG"
                    />
                  </p>
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={44}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <div className={`${Style["sub-content-title"]}`}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="2FPhS1LVvEi0PwFF8Drxb1"
                    />
                  </h3>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="1xFk8YkwgimIskvOdAb7sz"
                    />
                  </p>
                </div>
                <div className={`${Style["sub-content"]}`}>
                  <p>
                    <Microcopy
                      entries={microcopy}
                      id="4kDODp4xxNemtWX83Z9ZCd"
                    />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Challenge:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="cuPJ8tVkwY83FHMgpOiIv" />
                  </p>
                  <p>
                    <span className={`${Style["sub-content-accent"]}`}>
                      Solution:&nbsp;
                    </span>
                    <Microcopy entries={microcopy} id="Dm6HLfYxG2TTsmF0CweB3" />
                  </p>
                </div>
              </div>
            </ParallaxLayer>
            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={45.5}
              speed={0.5}
            >
              <Footer />
            </ParallaxLayer>
          </Parallax>
        </InView>
      </section>
    </>
  );
};

export default Solutions;
