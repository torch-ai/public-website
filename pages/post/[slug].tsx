// noinspection JSUnusedGlobalSymbols

import Static from "../../styles/modules/static.module.scss";
import { createClient } from "contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Footer from "../../components/Footer";
import { InView } from "react-intersection-observer";
import Head from "next/head";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { ReactElement, useContext } from "react";
import LayoutContext from "../../components/layout/LayoutContext";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY,
});

// noinspection JSUnusedGlobalSymbols
export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries<
    Record<string | number, string | string[]>
  >({
    content_type: "news",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "news",
    "fields.slug": params.slug,
  });

  return {
    props: { news: items[0] },
  };
};

const slug = ({
  news,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  const { content } = news.fields;
  return (
    <>
      <Head>
        <title>{news.fields.title} | Torch.AI</title>
      </Head>
      <section>
        <header className={`${Static["service-header"]}`}>
          <InView
            as="div"
            onChange={(inView) => setNavColor(inView ? "white" : "black")}
          >
            <div className={`${Static["service"]}`}>
              <div className={`${Static["content"]}`}>
                <div className={`post flow`}>
                  <h3>{news.fields.title}.</h3>
                  <p>
                    <em>{news.fields.summary} </em>
                  </p>
                </div>
              </div>
            </div>
          </InView>
        </header>
        {/* <InView as='div' onChange={(inView, entry) => setNavColor(inView ? 'black' : 'white')}> */}
        <div className={`${Static["service-content"]}`}>
          <div>
            <div className={` ${Static["content"]} post flow`}>
              <p>{documentToReactComponents(content)}</p>
            </div>
          </div>
        </div>
        {/* </InView> */}
      </section>
      <Footer />
    </>
  );
};

export default slug;
