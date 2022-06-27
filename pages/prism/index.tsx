// noinspection JSUnusedGlobalSymbols

import React, { useContext, useRef, ReactElement } from "react";
import Style from "./styles.module.scss";
import { InView } from "react-intersection-observer";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import LayoutContext from "../../components/layout/LayoutContext";
import { getHeadPageTitle } from "../../utils/meta";
import { PageSettings } from "../../types/next";
import { getCustomPageAndMicrocopy } from "../../contentful/client";
import { TypeMicrocopy, TypeCustomPage } from "../../generated/contentful";
import Microcopy from "../../components/Microcopy/Microcopy";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import pageIds from "../../contentful/pages";
import FullpageSection from "../../components/FullpageSection/FullpageSection";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export const pageSettings: PageSettings = {
  path: "/prism",
  linkContent: <>PRISM</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const content = await getCustomPageAndMicrocopy(pageIds.prism);

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

  const fullpageApiRef = useRef<fullpageApi>();

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
                <div className={Style.container}>
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
              </FullpageSection>
              <FullpageSection className={Style.professional}>
                <InView
                  as="div"
                  className={Style.checking}
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div className={Style.container}>
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
              </FullpageSection>
              <FullpageSection className={Style.organization}>
                <div className={Style.container}>
                  <h3>
                    <Microcopy
                      entries={microcopy}
                      id="3PPmCDev70MfolTJWApHDa"
                    />
                  </h3>
                  <p className={Style.subtitle}>
                    <Microcopy entries={microcopy} id="anDyE3d02R0gNfy7K3lrh" />
                  </p>
                  <hr />
                  <div className={Style.prismFeatures}>
                    <div className={Style.prismFeatureItem}>
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
                    <div className={Style.prismFeatureItem}>
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
                    <div className={Style.prismFeatureItem}>
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
                    <div className={Style.prismFeatureItem}>
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
              </FullpageSection>

              <FullpageSection className={Style.win}>
                <InView
                  as="div"
                  className={Style.checking}
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div className={Style.container}>
                    <div className={Style.winPoints}>
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
                    <div className={Style.prismVideo}>
                      <video controls poster="/torch-video-poster.jpg">
                        <source
                          src="//videos.ctfassets.net/dtb5w0ega2aw/2PdGM8dFgBF7poRWGQGjDI/530cb7a3a89765ac820196eec7ea8dbc/prism-highlights.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </InView>
              </FullpageSection>
              <FullpageSection className={Style.contact}>
                <div className={Style.container}>
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
