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
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypeMicrocopy, TypeCustomPage } from "../generated/contentful";
import { getCustomPageAndMicrocopy } from "../contentful/client";
import { createMicrocopyComponent } from "../components/Microcopy/Microcopy";

export const pageSettings: PageSettings = {
  path: "/solutions",
  linkContent: <>Solutions</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage: TypeCustomPage;
}> = async () => {
  const microcopy = await getCustomPageAndMicrocopy("39Sew1oBExcvXJV2hn6BqU");

  return {
    props: {
      microcopy: microcopy.items,
      customPage: (microcopy.includes.Entry as TypeCustomPage[])[0],
    },
  };
};

const Solutions = ({
  microcopy,
  customPage,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  const Microcopy = createMicrocopyComponent(microcopy);

  return (
    <>
      <Head>
        <title>{getHeadPageTitle(customPage.fields.pageHeadTitle)}</title>
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
                <Microcopy id="7sOI4QpNtEeSADqUXnsyoy" />

                <div className={`${Style["index"]}`}>
                  <div className={`${Style["index-item"]}`}>
                    <a
                      href="#infrastructure"
                      className={`${Style["index-content"]}`}
                    >
                      <h5>Infrastructure</h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a
                      href="#analytics"
                      className={`${Style["index-content"]}`}
                    >
                      <h5>Analytics</h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a href="#machine" className={`${Style["index-content"]}`}>
                      <h5>Machine learning & AI</h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a
                      href="#enterprise"
                      className={`${Style["index-content"]}`}
                    >
                      <h5>Enterprise Applications</h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a
                      href="#openSource"
                      className={`${Style["index-content"]}`}
                    >
                      <h5>Open Source</h5>
                    </a>
                  </div>
                  <div className={`${Style["index-item"]}`}>
                    <a href="#dataApis" className={`${Style["index-content"]}`}>
                      <h5>Data APIs</h5>
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
                <Microcopy id="56dtCDayb68rh5iQnVkTn4" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]}`}
              offset={1}
              // id='infrastructure'
              speed={0.5}
            >
              <div className={`${Style["container"]} ${Style["mobile-only"]}`}>
                <Microcopy id="56dtCDayb68rh5iQnVkTn4" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={2}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="1xV4t6ON6YCzEwmKTVs2iq" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={3}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="vvGdBKvMgubpKrllDsS9s" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={4}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6t12xJafOmTlcYbl13A1oL" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={5}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="3F3lpYMxwPJc29NIaS9bj" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={6}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="55Xfvf83FnyK80ejRpjcq3" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={7}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="5gRwSQByu35mVRAD2grdpD" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={8}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="3tMeh1RX9YolAvz8qH3Ijt" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={9}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6cRFzzW2LXTlw5LLr0iJ09" />
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
                <Microcopy id="21OWb1BubnCzXILFmqe2yv" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={10}
              // id='analytics'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="21OWb1BubnCzXILFmqe2yv" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={11}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6YY5LWwdmvy1DP66ZOn6yk" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={12}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="5Bn4UEW7SQEacpLC12B1HN" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={13}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6EuzMi6KdYAlS1fdbrhSg3" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={14}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="2bu65bw91EStNlOyKHxJXQ" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={15}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6tgtXVVH3Q13pb9DgyIzOj" />
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
                <Microcopy id="6axEnLP6IoHjQw9KyUugZS" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={16}
              // id='machine'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6axEnLP6IoHjQw9KyUugZS" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={17}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="5zM1wn0arlAXCeYSJaO3b2" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={18}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6ERyw0JZS617yt73IrZX25" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={19}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="3fNCdlDYmnc4LV0dMdJHrk" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={20}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="MluJHp3BjZahxVWpyYe3Z" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={21}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="4TYiy18TMpXCuBHxEORj6U" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={22}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="1r310eQMbT3yposAIHYXt9" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={23}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="4A65seUIxkXetknhSnOXrx" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={24}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="3xRqI5mr4du5CHJ9H67D90" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={25}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="2RGzVAmVgzRfphjvzCWfpj" />
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
                <Microcopy id="3ofmwuOguTO9Eoapz00WwY" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={26}
              // id='enterprise'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="3ofmwuOguTO9Eoapz00WwY" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={27}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6mM5TnkpypZJ7gZwilXLOx" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={28}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="7sCS7rpmvxkg2mxb0APxDN" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={29}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="3FJMgYEMnOtlre2Vm2nvJp" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={30}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="19McLjcVEM5XtR8FLpTVvC" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={31}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="qeQWkJaejKWegx63orjTl" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={32}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="2USZnJzkRCOxCwnfGe2lwG" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={33}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="4eLBYHxqs5opvs1i7ixTey" />
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
                <Microcopy id="1OR4la1RLemPK7iAk69p7c" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={34}
              // id='openSource'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="1OR4la1RLemPK7iAk69p7c" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={35}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="2dhFq9iRpLhSKcb5Gryda0" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={36}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="1Rr77l6dwco3exKXi2oeky" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={37}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="66eradMRNpdxoDrWYQ5EJ1" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={38}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="1Bv5UVlDZCdGzqPATxebp2" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={39}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="4QjMEOY91EpCtEjzZC5hpu" />
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
                <Microcopy id="6zNdx7BDeJ1qqnYeLRtjcf" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-subtitle"]} ${Style["mobile-only"]}`}
              offset={40}
              // id='dataApis'
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6zNdx7BDeJ1qqnYeLRtjcf" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={41}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="1L6gPaDkjUmyAZPTpJiLzw" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={42}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="4TFVc4vrvf8SyTSooedVPX" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={43}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="6d11tcCXeRuHx1WOfNigaH" />
              </div>
            </ParallaxLayer>

            <ParallaxLayer
              className={`${Style["sol-content"]}`}
              offset={44}
              speed={0.5}
            >
              <div className={`${Style["container"]}`}>
                <Microcopy id="ByCt5QuHzpuOg4pIDbYFP" />
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
