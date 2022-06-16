// noinspection JSUnusedGlobalSymbols

import React, { useContext, useRef } from "react";
import Style from "./styles.module.scss";
import { InView } from "react-intersection-observer";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import Footer from "../../components/Footer/Footer";
import Head from "next/head";
import LayoutContext from "../../components/layout/LayoutContext";
import { getHeadPageTitle } from "../../utils/meta";
import { PageSettings } from "../../types/next";
import clsx from "clsx";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

export const pageSettings: PageSettings = {
  path: "/prism",
  linkContent: <>PRISM</>,
};

const Index: React.FunctionComponent = () => {
  const { setNavColor } = useContext(LayoutContext);

  const fullpageApiRef = useRef<fullpageApi>();

  return (
    <>
      <Head>
        <title>{getHeadPageTitle(["PRISM", "Nexus platform"])}</title>
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
              <section className={clsx("section", Style.hero)}>
                <div className={Style.container}>
                  <h1>PRISM</h1>
                  <h4>
                    Military-grade document intelligence. Now for insurance.
                  </h4>
                </div>
              </section>
              <section className={clsx("section", Style.professional)}>
                <InView
                  as="div"
                  className={Style.checking}
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div className={Style.container}>
                    <h3>
                      As an insurance professional, you enable trust across
                      entire economies.
                    </h3>
                    <p>
                      Prism powers that mission, simplifying how you achieve
                      cheaper, more accurate than anyone else.
                    </p>
                  </div>
                </InView>
              </section>
              <section className={clsx("section", Style.organization)}>
                <div className={Style.container}>
                  <h3>Insurance organizations deal with messy data.</h3>
                  <p className={Style.subtitle}>
                    Most of it—up to 90%—consists of documents, PDFs, scans,
                    faxes, and images.
                  </p>
                  <hr />
                  <div className={Style.prismFeatures}>
                    <div className={Style.prismFeatureItem}>
                      <h5>It's Expensive.</h5>
                      <p>
                        It can cost up to $220 to analyze a single document.
                      </p>
                    </div>
                    <div className={Style.prismFeatureItem}>
                      <h5>It's not productive.</h5>
                      <p>
                        &gt;60% of teams are manually copying and pasting
                        document data.
                      </p>
                    </div>
                    <div className={Style.prismFeatureItem}>
                      <h5>It's not accurate.</h5>
                      <p>
                        Manual efforts are error prone and existing solutions
                        can't scale.
                      </p>
                    </div>
                    <div className={Style.prismFeatureItem}>
                      <h5>It's getting worse, fast.</h5>
                      <p>
                        Messy data is growing 300% faster than more usable,
                        tabular data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className={clsx("section", Style.win)}>
                <InView
                  as="div"
                  className={Style.checking}
                  onChange={(inView) => setNavColor(inView ? "black" : "white")}
                >
                  <div className={Style.container}>
                    <div className={Style.winPoints}>
                      <h3>Win with Prism</h3>
                      <ul>
                        <li>Reduce operational cost.</li>
                        <li>
                          Automate & accelerate document processing times.
                        </li>
                        <li>
                          Rely on military-grade, AI document intelligence
                          technology.
                        </li>
                        <li>
                          Achieve a seamless experience for your teams. Enable
                          trust for your clients.
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
              </section>
              <section className={clsx("section", Style.contact)}>
                <div className={Style.container}>
                  <h4>
                    Learn why Torch.AI is the world leader in document
                    intelligence.
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

export default Index;
