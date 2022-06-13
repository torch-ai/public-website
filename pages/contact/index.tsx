// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext } from "react";
import Grid from "../../styles/modules/grid.module.scss";
import Style from "../../styles/modules/contact.module.scss";
import Footer from "../../components/Footer";
import Head from "next/head";
import { InView } from "react-intersection-observer";
import LayoutContext from "../../components/layout/LayoutContext";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageSubtitle from "../../components/PageSubtitle/PageSubtitle";
import { getHeadPageTitle } from "../../utils/meta";
import { PageSettings } from "../../types/next";
import { getCustomPageAndMicrocopy } from "../../contentful/client";
import { TypeMicrocopy, TypeCustomPage } from "../../generated/contentful";
import Microcopy from "../../components/Microcopy/Microcopy";
import { GetStaticProps, InferGetStaticPropsType } from "next";

export const pageSettings: PageSettings = {
  path: "/contact",
  linkContent: <>Contact</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const content = await getCustomPageAndMicrocopy("6ITsMPinDCSu0CljB3me4S");

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

  return (
    <>
      <Head>
        <title>
          {getHeadPageTitle(
            !!customPage ? customPage.fields.pageHeadTitle : []
          )}
        </title>
      </Head>
      <section className={`${Style["contact__container"]}`}>
        <InView
          as="div"
          onChange={(inView) => setNavColor(inView ? "black" : "white")}
        >
          <div className={`${Grid["container"]} ${Grid["margin_center"]}`}>
            <div className={`${Grid["row"]}`}>
              <div
                className={`${Grid["col-xs-12"]} ${Style["contact__title"]}`}
              >
                <PageTitle>
                  <Microcopy entries={microcopy} id="6xt33azGkVk0pVxwLYyLE4" />
                </PageTitle>
                <PageSubtitle>
                  <Microcopy entries={microcopy} id="4Cufep8wTzibupuz0UlH2p" />
                </PageSubtitle>
              </div>
            </div>
            <div className={`${Grid["row"]}`}>
              <div className={`${Grid["col-xs-12"]}`}>
                <form
                  className={`${Style["contact__form"]}`}
                  action="https://formspree.io/f/mvolablv"
                  method="POST"
                >
                  <div>
                    <label className={`${Style["contact__names"]}`}>
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        required
                        autoComplete="name"
                        autoFocus
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Index"
                        autoComplete="organization"
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
                        autoComplete="email"
                      />
                    </label>
                  </div>

                  <div>
                    <label>
                      <textarea name="message" placeholder="Message" required />
                    </label>
                  </div>
                  <div>
                    <button type="submit">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </InView>
      </section>
      <Footer />
    </>
  );
};

export default Index;
