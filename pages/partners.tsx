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
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypeMicrocopy, TypeCustomPage } from "../generated/contentful";
import { getCustomPageAndMicrocopy } from "../contentful/client";
import { createMicrocopyComponent } from "../components/Microcopy/Microcopy";

export const pageSettings: PageSettings = {
  path: "/partners",
  linkContent: <>Partners</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage: TypeCustomPage;
}> = async () => {
  const microcopy = await getCustomPageAndMicrocopy("630HdbjY5Sis0xB2w2vWfP");

  return {
    props: {
      microcopy: microcopy.items,
      customPage: (microcopy.includes.Entry as TypeCustomPage[])[0],
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
              <div className={`${Style["hero"]} section`}>
                <div
                  className={`${Grid["container"]} ${Grid["margin_center"]}`}
                >
                  <div className={`${Grid["row"]}`}>
                    <div
                      className={`${Grid["col-xs-12"]} ${Style["content-center"]}`}
                    >
                      <h1 ref={titleRef}>Be a hero for your customers.</h1>
                      <p ref={subtitleRef}>
                        Deploy Nexus to solve your customers problems.
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
                        <Microcopy id="3tZvyDKqb45GORlQZHewT7" />
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
                    <h3>Benefits for our partners.</h3>
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
                      <Microcopy id="7BY3W6R5GWiiUy14Go0Zys" />
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
                      <Microcopy id="28Otcj3y8xx5pQ1B7fJzQ3" />
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
                      <Microcopy id="2XsYSKxcyT1VqRLrbFLr4y" />
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
                      <h2>Help us change the world.</h2>
                      <p>Interested in becoming a partner?</p>
                      <p>
                        Contact us for more information{" "}
                        <a href="mailto:partners@torch.ai">
                          {" "}
                          partners@torch.ai{" "}
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
