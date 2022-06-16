// noinspection JSUnusedGlobalSymbols

import React, { useContext, useEffect, useRef } from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import Head from "next/head";
import Grid from "../../components/Grid/Grid";
import Image from "next/image";
import Style from "./styles.module.scss";
import Footer from "../../components/Footer/Footer";
import { InView } from "react-intersection-observer";
import { gsap } from "gsap";
import training from "../../img/training.png";
import opportunities from "../../img/oppertunities.png";
import tools from "../../img/tools.png";
import LayoutContext from "../../components/layout/LayoutContext";
import { getHeadPageTitle } from "../../utils/meta";
import { PageSettings } from "../../types/next";
import clsx from "clsx";
import FullpageSection from "../../components/FullpageSection/FullpageSection";

export const pageSettings: PageSettings = {
  path: "/partners",
  linkContent: <>Partners</>,
};

const Index: React.FunctionComponent = () => {
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
          {getHeadPageTitle([
            "Partnerships",
            "Transforming the potential of data for good",
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
              <FullpageSection className={Style.hero}>
                <Grid container marginCenter>
                  <Grid row>
                    <Grid size={{ Xs: 12 }} className={Style.contentCenter}>
                      <h1 ref={titleRef}>Be a hero for your customers.</h1>
                      <p ref={subtitleRef}>
                        Deploy Nexus to solve your customers problems.
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection className={Style.value}>
                <Grid container marginCenter>
                  <InView
                    as="div"
                    onChange={(inView) =>
                      setNavColor(inView ? "black" : "white")
                    }
                  >
                    <Grid row className={Style.valueContent}>
                      <Grid size={{ Xs: 12 }} offset={{ Lg: 3 }}>
                        <h3>
                          We value our friends. This is more than business for
                          us.
                        </h3>
                        <p>
                          Torch.AI's strong partner ecosystem is foundational to
                          our mission of "Transforming the potential of data for
                          good.” Often, we co-invest in solutions alongside our
                          more established partners, but we have also enjoyed
                          great success providing support to new and emerging
                          partners.
                        </p>
                      </Grid>
                    </Grid>
                  </InView>
                </Grid>
              </FullpageSection>
              <FullpageSection className={Style.benefitsPartners}>
                <Grid container marginCenter>
                  <Grid row className={Style.benefitsPartnersTitle}>
                    <h3>Benefits for our partners.</h3>
                  </Grid>
                  <Grid row className={Style.benefitsPartnersContent}>
                    <Grid
                      size={{ Xs: 12, Lg: 3 }}
                      className={clsx(Style.benefitsPartnersItem)}
                    >
                      <div>
                        <Image
                          src={training}
                          alt={
                            "Picture of a man in headphones on a conference call"
                          }
                        />
                      </div>
                      <h5>Training.</h5>
                      <p>
                        Access a robust set of training and enablement content.
                        Get friendly with our Solution Architects to guarantee
                        success of your program.
                      </p>
                    </Grid>
                    <Grid
                      size={{ Xs: 12, Lg: 3 }}
                      className={clsx(Style.benefitsPartnersItem)}
                    >
                      <div>
                        <Image
                          src={opportunities}
                          alt={"Picture of people around a conference table"}
                        />
                      </div>
                      <h5>Customer Opportunities.</h5>
                      <p>
                        Our partners enjoy new sales opportunities, sourced by
                        Torch.AI, and aligned to their core competencies.
                      </p>
                    </Grid>
                    <Grid
                      size={{ Xs: 12, Lg: 3 }}
                      className={clsx(Style.benefitsPartnersItem)}
                    >
                      <div>
                        <Image
                          src={tools}
                          alt={
                            "Picture of a woman in front of a pair of screens showing dashboards"
                          }
                        />
                      </div>
                      <h5>Tools.</h5>
                      <p>
                        Access a wide variety of sales, marketing, ML modeling,
                        and other technical tools.
                      </p>
                    </Grid>
                  </Grid>
                </Grid>
              </FullpageSection>
              <FullpageSection className={Style.change}>
                <Grid container marginCenter>
                  <Grid row>
                    <Grid size={{ Xs: 12 }} className={Style.changeTitle}>
                      <h2>Help us change the world.</h2>
                      <p>Interested in becoming a partner?</p>
                      <p>
                        Contact us for more information{" "}
                        <a href="mailto:partners@torch.ai">
                          {" "}
                          partners@torch.ai{" "}
                        </a>
                      </p>
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
