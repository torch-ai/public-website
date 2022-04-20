// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext } from "react";
import Image from "next/image";
import Grid from "../styles/modules/grid.module.scss";
import CareersClasses from "../styles/modules/careers.module.scss";
import CareerCard from "../components/CareerCard";
import Footer from "../components/Footer";
import Head from "next/head";
import { InView } from "react-intersection-observer";
import forbes from "../img/forbes.png";
import LayoutContext from "../components/layout/LayoutContext";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCareerPostingsEntries } from "../contentful/client";
import { TypeCareerPosting } from "../generated/contentful";

export const getStaticProps: GetStaticProps<{
  careers: TypeCareerPosting[];
}> = async () => {
  const res = await getCareerPostingsEntries({});

  return {
    props: {
      careers: res.items,
    },
  };
};

const Careers = ({
  careers,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  return (
    <>
      <Head>
        <title>
          AI and Machine Learning Jobs | Current Openings | Torch.AI
        </title>
      </Head>
      <section className={`${CareersClasses["intro"]}`}>
        <InView
          as="div"
          onChange={(inView) => setNavColor(inView ? "white" : "black")}
        >
          <div
            className={`${Grid.row} ${Grid.margin_center}  ${Grid.container} ${CareersClasses["carrers__content"]}`}
          >
            <div className={`${Grid["col-xs-12"]}`}>
              <h1> Careers. </h1>
              <p>
                At Torch.AI, we are passionate about building software that
                solves some of the world's most challenging problems. On the
                leading edge for AI for National Security clients and beyond, we
                partner with some of the most influential organizations to
                transform how they define success using data and technology.
              </p>
            </div>
            <div className={`${Grid["col-xs-12"]}`}>
              <p>
                We are honored to be included on the Forbes America's best
                startup employers award list.
              </p>
              <Image src={forbes} />
            </div>
          </div>
        </InView>
      </section>

      <section
        className={`${CareersClasses["job-list"]} ${CareersClasses["section"]}`}
      >
        <div className={`${Grid.row} ${Grid.margin_center} ${Grid.container}`}>
          <div className={`${Grid["row"]}`}>
            <h2>Job Openings</h2>
          </div>
          <div className={`${Grid["row"]}`}>
            {careers.map((career) => (
              <div key={career.sys.id} className={`${Grid["col-xs-12"]}`}>
                <CareerCard career={career} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Careers;
