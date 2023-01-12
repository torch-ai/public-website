// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useEffect } from "react";
import Footer from "../../components/Footer/Footer";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { TypePage } from "../../generated/contentful";
import { getPage } from "../../contentful/client";
import Head from "next/head";
import ContentfulPage from "../../components/ContentfulPage/ContentfulPage";
import { getHeadPageTitle } from "../../utils/meta";
import { PageSettings } from "../../types/next";

export const pageSettings: PageSettings = {
  path: "/dcsa/thank-you",
  linkContent: <>Thank you</>,
};

export const getStaticProps: GetStaticProps<{
  page: TypePage;
}> = async () => {
  // See: https://app.contentful.com/spaces/dtb5w0ega2aw/entries/318OE7L9RkvYtf86yISiV3
  const page = await getPage("318OE7L9RkvYtf86yISiV3");

  return {
    props: {
      page,
    },
  };
};

const ThankYou = ({
  page,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const {
    fields: { title },
  } = page;
  useEffect(() => {
    window?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Head>
        <title>{getHeadPageTitle([title])}</title>
      </Head>
      <ContentfulPage
        page={page}
        mainChildren={
          <>
            <div
              style={{
                padding: "75% 0 0 0",
                position: "relative",
                minWidth: "65rem",
              }}
            >
              <iframe
                src="https://player.vimeo.com/video/788492535?h=ece97effbd&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
                title="DCSA.mp4"
              ></iframe>
            </div>
            <script src="https://player.vimeo.com/api/player.js" defer></script>
          </>
        }
      />

      <Footer />
    </>
  );
};

export default ThankYou;
