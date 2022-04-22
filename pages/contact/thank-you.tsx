import React, { useContext } from "react";
import Grid from "../../styles/modules/grid.module.scss";
import Style from "../../styles/modules/contact.module.scss";
import Footer from "../../components/Footer";
import Head from "next/head";
import { InView } from "react-intersection-observer";
import LayoutContext from "../../components/layout/LayoutContext";

const Index: React.FunctionComponent = () => {
  const { setNavColor } = useContext(LayoutContext);

  return (
    <>
      <Head>
        <title>
          Contact Us | Unlock Your Potential | Talk to Us | Torch.AI
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
                <h2>Thank you.</h2>
                <p>Find out how Nexus can unlock your productivity.</p>
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
