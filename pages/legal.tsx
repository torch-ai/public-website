// noinspection JSUnusedGlobalSymbols

import React, { ReactElement, useContext } from "react";
import Static from "../styles/modules/static.module.scss";
import { InView } from "react-intersection-observer";
import Footer from "../components/footer";
import LayoutContext from "../components/layout/LayoutContext";

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {},
//   };
// };
// props: InferGetStaticPropsType<typeof getStaticProps>

const Legal = (): ReactElement => {
  const { setNavColor } = useContext(LayoutContext);

  return (
    <>
      <section className={`${Static["service"]} post`}>
        <InView
          as="div"
          onChange={(inView) => setNavColor(inView ? "black" : "white")}
        >
          <div className={`${Static["content"]}`}>
            <h2>Torch.AI Standard Terms & Agreements.</h2>
            <p>Last updated: March 22, 2022</p>
          </div>
          <div className={`${Static["content"]}`}>
            <h3>NEXUS&trade;-as-a-Service (NaaS) – Terms of Service</h3>
            <p>
              TORCH.AI NaaS Terms of Service can be TORCH.AI owns the NEXUS™
              software suite, through which it provides certain software
              solutions delivered either by on-premises or software-as-a-service
              (through its NEXUS™-as-a-Service offering) delivery models. The
              Terms of Service for NEXUS™-as-a-Service are located{" "}
              <a
                href="../terms/62165287b0c6e1dd637c8e75_NaaS-Terms-8.27.2021.pdf"
                target="_blank"
              >
                {" "}
                here{" "}
              </a>
              .
            </p>
          </div>
          <div className={`${Static["content"]}`}>
            <h3>End User License Agreement (EULA)</h3>
            <p>
              TORCH.AI owns the NEXUS™ software suite, through which it provides
              certain software solutions delivered either by on-premises or
              software-as-a-service (through its NEXUS™-as-a-Service offering)
              delivery models. All use of NEXUS™ by End Users is conditioned
              upon agreement with the EULA which is located{" "}
              <a
                href="../terms/6128f1444f09249ec2ac66d8_EULA.pdf"
                target="_blank"
              >
                here
              </a>
              .
            </p>
          </div>
          <div className={`${Static["content"]}`}>
            <h3>Standard Mutual NDA</h3>
            <p>
              TORCH.AI's general NDA is located{" "}
              <a
                href="../terms/6189340041493f70a5de981e_TORCH.AI-NDA-Mutual-November-2021.pdf"
                target="_blank"
              >
                here
              </a>{" "}
              and should be completed, signed and returned to hello@torch.ai
            </p>
          </div>
        </InView>
      </section>
      <Footer />
    </>
  );
};

export default Legal;
