// noinspection JSUnusedGlobalSymbols

import React, { useContext, ReactElement } from "react";
import Grid from "../../components/Grid/Grid";
import Style from "./styles.module.scss";
import Footer from "../../components/Footer/Footer";
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
import pageIds from "../../contentful/pages";
import clsx from "clsx";

export const pageSettings: PageSettings = {
  path: "/contact",
  linkContent: <>Contact</>,
};

export const getStaticProps: GetStaticProps<{
  microcopy: TypeMicrocopy[];
  customPage?: TypeCustomPage;
}> = async () => {
  const content = await getCustomPageAndMicrocopy(pageIds.contact);

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
      <section className={clsx(Style.contactContainer)}>
        <InView
          as="div"
          onChange={(inView) => setNavColor(inView ? "black" : "white")}
        >
          <Grid container marginCenter>
            <Grid row>
              <Grid size={{ Xs: 12 }} className={Style.contactTitle}>
                <PageTitle>
                  <Microcopy entries={microcopy} id="6xt33azGkVk0pVxwLYyLE4" />
                </PageTitle>
                <PageSubtitle>
                  <Microcopy entries={microcopy} id="4Cufep8wTzibupuz0UlH2p" />
                </PageSubtitle>
              </Grid>
            </Grid>
            <Grid row>
              <Grid size={{ Xs: 12 }}>
                <form
                  className={clsx(Style.contactForm)}
                  action="https://formspree.io/f/mvolablv"
                  method="POST"
                >
                  <div>
                    <label className={clsx(Style.contactNames)}>
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
              </Grid>
            </Grid>
          </Grid>
        </InView>
      </section>
      <Footer />
    </>
  );
};

export default Index;
