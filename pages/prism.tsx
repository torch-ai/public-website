// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext } from "react";
import { InView } from "react-intersection-observer";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../components/Footer";
import Head from "next/head";
import LayoutContext from "../components/layout/LayoutContext";
import { getHeadPageTitle } from "../utils/meta";
import { PageSettings } from "../types/next";
import { getCustomPageAndMicrocopy } from "../contentful/client";
import { TypeMicrocopy, TypeCustomPage } from "../generated/contentful";
import Microcopy from "../components/Microcopy/Microcopy";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const pageSettings: PageSettings = {
  path: "/prism",
  linkContent: <>PRISM</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const content = await getCustomPageAndMicrocopy("7vYSW1kH6ruqlTFRVRxO3C");

  return {
    props: {
      microcopy: content.microcopy,
      customPage: content.customPage || null,
    },
  };
};

const Prism = ({
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
      <ReactFullpage
        navigation
        verticalCentered={false}
        responsiveWidth={1500}
        render={() => {
          return (
            <ReactFullpage.Wrapper>
              <section className={`section hero`}>
                <div className="container">
                  <h1>
                    <Microcopy
                      entries={microcopy}
                      id="6aXGlt9bH2rvyjz2QcAPfM"
                    />
                  </h1>
                  <h4>
                    <Microcopy
                      entries={microcopy}
                      id="5ZQR3QYrHW0MR5f3NcdyLW"
                    />
                  </h4>
                </div>
              </section>
              <section className={`section professional`}>
                <InView
                  as="div"
                  className="checking"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div className="container">
                    <h3>
                      <Microcopy
                        entries={microcopy}
                        id="2PR1mZnbrbHMucUYg51chy"
                      />
                    </h3>
                    <p>
                      <Microcopy
                        entries={microcopy}
                        id="ZpQqmPtb6bVckgKkrclIH"
                      />
                    </p>
                  </div>
                </InView>
              </section>
              <section className={`section organization`}>
                <div className="container">
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3PPmCDev70MfolTJWApHDa"
                    />
                  </h3>
                  <p className="subtitle">
                    <Microcopy entries={microcopy} id="anDyE3d02R0gNfy7K3lrh" />
                  </p>
                  <hr />
                  <div className="prismFeatures">
                    <div className="prismFeature-item">
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="2RI4i862xZxDiqRegFDVZb"
                        />
                      </h5>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="3NbOdT88fhF5w2wCy9jNWg"
                        />
                      </p>
                    </div>
                    <div className="prismFeature-item">
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="1xsFDvArPFh0qL77boqRT5"
                        />
                      </h5>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="40f3z3OUld8OGK5Ri41J3C"
                        />
                      </p>
                    </div>
                    <div className="prismFeature-item">
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="45AlgMmfESEWciRmpB9NA0"
                        />
                      </h5>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="5LaIaUQvkeovd43OgG2kmQ"
                        />
                      </p>
                    </div>
                    <div className="prismFeature-item">
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="6ibXq6IQENFU4nBxiKb6Nk"
                        />
                      </h5>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="5FJ7mkZl1hwORBfPFJypgn"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className={`section win`}>
                <InView
                  as="div"
                  className="checking"
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div className="container">
                    <div className="winPoints">
                      <h3>
                        <Microcopy
                          entries={microcopy}
                          id="6m5Y1WWrvanMRSGL3fkjrY"
                        />
                      </h3>
                      <ul>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="5UdWgojD1RlAwyU8sPcHfr"
                          />
                        </li>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="5FC4uEDfbvMHHQ8NUI3mQu"
                          />
                        </li>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="7spsNqltRYgHmQtbwDHN0g"
                          />
                        </li>
                        <li>
                          <Microcopy
                            entries={microcopy}
                            id="8F7wm9n77Vq8diNdhIMKS"
                          />
                        </li>
                      </ul>
                    </div>
                    <div className="prismVideo">
                      <video controls poster="/torch-video-poster.jpg">
                        <source
                          src="//videos.ctfassets.net/dtb5w0ega2aw/2PdGM8dFgBF7poRWGQGjDI/530cb7a3a89765ac820196eec7ea8dbc/prism-highlights.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </InView>
              </section>
              <section className={`section contact`}>
                <div className="container">
                  <h4>
                    <Microcopy
                      entries={microcopy}
                      id="65NH7NUwJvaUoymOJ4uEjT"
                    />
                  </h4>
                  <form action="https://formspree.io/f/mvolablv" method="POST">
                    <div>
                      <label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Full Name"
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="text"
                          name="company"
                          placeholder="Index"
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <label>
                        <textarea
                          name="message"
                          placeholder="Message"
                          required
                        />
                      </label>
                    </div>
                    <div>
                      <button type="submit">Send</button>
                    </div>
                  </form>
                </div>
              </section>
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Prism;
