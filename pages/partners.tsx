// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Grid from "../styles/modules/grid.module.scss";
import Image from "next/image";
import Style from "../styles/modules/partners.module.scss";
import Footer from "../components/Footer";
import { InView } from "react-intersection-observer";
import { gsap } from "gsap";
import training from "../img/training.png";
import opportunities from "../img/oppertunities.png";
import tools from "../img/tools.png";
import LayoutContext from "../components/layout/LayoutContext";
import { getHeadPageTitle } from "../utils/meta";
import { PageSettings } from "../types/next";
import { getCustomPageAndMicrocopy } from "../contentful/client";
import { TypeMicrocopy, TypeCustomPage } from "../generated/contentful";
import Microcopy from "../components/Microcopy/Microcopy";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import pageIds from "../contentful/pages";

export const pageSettings: PageSettings = {
  path: "/partners",
  linkContent: <>Partners</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const content = await getCustomPageAndMicrocopy(pageIds.partners);

  return {
    props: {
      microcopy: content.microcopy,
      customPage: content.customPage || null,
    },
  };
};

const Partners = ({
  microcopy,
  customPage,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const titleDuration = 1;
    let delay = 1;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: "100%", ease: "power1" },
      { opacity: 1, y: 0, duration: titleDuration, delay }
    );

    delay += titleDuration / 2;
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
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["content-center"]}`}
                    >
                      <h1 ref={titleRef}>
                        <Microcopy
                          entries={microcopy}
                          id="7u1eC2J0ll8jYlNDuQGKF9"
                        />
                      </h1>
                      <p ref={subtitleRef}>
                        <Microcopy
                          entries={microcopy}
                          id="5wF0UGzt38cVthUz7K6HK6"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Style["value"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <InView
                    as="div"
                    onChange={(inView) =>
                      setNavColor(inView ? "black" : "white")
                    }
                  >
                    <div
                      className={`${Grid["row"]} ${Style["value__content"]}`}
                    >
                      <div
                        className={`${Grid["col-lg-offset-3"]} ${Grid["col-xs-12"]}`}
                      >
                        <h3>
                          <Microcopy
                            entries={microcopy}
                            id="2vdciL2PyJb2vuzEbipyhN"
                          />
                        </h3>
                        <p>
                          <Microcopy
                            entries={microcopy}
                            id="1otFTfga7E2vw3fOVJXaZc"
                          />
                        </p>
                      </div>
                    </div>
                  </InView>
                </div>
              </div>
              <div className={`${Style["benefitsPartners"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div
                    className={`${Grid["row"]} ${Style["benefitsPartners__title"]}`}
                  >
                    <h3>
                      <Microcopy
                        entries={microcopy}
                        id="4JT7mAUm2RnmPGydZcWwXQ"
                      />
                    </h3>
                  </div>
                  <div
                    className={`${Grid["row"]} ${Style["benefitsPartners__content"]}`}
                  >
                    <div
                      className={`${Grid["col-xs-12"]} ${Grid["col-lg-3"]} ${Style["benefitsPartners-item"]}`}
                    >
                      <div>
                        <Image
                          src={training}
                          alt={
                            "Picture of a man in headphones on a conference call"
                          }
                        />
                      </div>
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="zWgdevmK6hRVFneNwQNbL"
                        />
                      </h5>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="4f3LTeCb56qO1BMuKj6nqP"
                        />
                      </p>
                    </div>
                    <div
                      className={`${Grid["col-xs-12"]} ${Grid["col-lg-3"]} ${Style["benefitsPartners-item"]}`}
                    >
                      <div>
                        <Image
                          src={opportunities}
                          alt={"Picture of people around a conference table"}
                        />
                      </div>
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="5eOcxVbdV4qTVx085ne9j0"
                        />
                      </h5>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="Jk3opaCKBH8T7XFa046ca"
                        />
                      </p>
                    </div>
                    <div
                      className={`${Grid["col-xs-12"]} ${Grid["col-lg-3"]} ${Style["benefitsPartners-item"]}`}
                    >
                      <div>
                        <Image
                          src={tools}
                          alt={
                            "Picture of a woman in front of a pair of screens showing dashboards"
                          }
                        />
                      </div>
                      <h5>
                        <Microcopy
                          entries={microcopy}
                          id="2NJWYnm7Xv3hT1aEmVbmyR"
                        />
                      </h5>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="3jsTS6MdCuSkVt8gFZYGbN"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${Style["change"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["change__title"]}`}
                    >
                      <h2>
                        <Microcopy
                          entries={microcopy}
                          id="1NtGc7nTrPsBYzUFY1GCvy"
                        />
                      </h2>
                      <p>
                        <Microcopy
                          entries={microcopy}
                          id="6hgf0IzBfcbZyhUSqDSyn6"
                        />
                      </p>
                      <p>
                        Contact us for more information{" "}
                        <a href="mailto:partners@torch.ai">
                          <Microcopy
                            entries={microcopy}
                            id="1YadSfD04VZrIGVswCPAJ0"
                          />
                        </a>
                      </p>
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

export default Partners;
