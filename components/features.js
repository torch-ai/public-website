import Style from "../styles/modules/accordian.module.scss";
import { useState } from "react";

const Features = () => {
  return (
    <>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="f1"
            className={`${Style["accordian__input"]}`}
          />
          <label htmlFor="f1" className={`${Style["accordian__label"]}`}>
            Real-Time Data Transformation.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Nexus' ability to analyze data in real-time absolves an enterprise
              from unnecessary infrastructure costs, without undermining speed,
              reliability, or even compliance.
            </p>
          </div>
        </div>
      </div>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="f2"
            className={`${Style["accordian__input"]}`}
          />
          <label htmlFor="f2" className={`${Style["accordian__label"]}`}>
            Unstructured Data Processing and Fusion.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Nexus enables organizations to semantically understand the wealth
              of information in their unstructured data, and then use that
              knowledge to contextualize and correlate their entire data
              ecosystem.
            </p>
          </div>
        </div>
      </div>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="f3"
            className={`${Style["accordian__input"]}`}
          />
          <label htmlFor="f3" className={`${Style["accordian__label"]}`}>
            Semantic Stitching.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Unlock the total value of your entire data ecosystem with Semantic
              Stitching™, a proprietary “no code” data retrieval system which
              converts business-friendly data requests into optimized technical
              queries.
            </p>
          </div>
        </div>
      </div>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="f4"
            className={`${Style["accordian__input"]}`}
          />
          <label htmlFor="f4" className={`${Style["accordian__label"]}`}>
            Composability.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Nexus is a SaaS solution comprised of packaged business
              capabilities and pluggable microservices, enabling you to easily
              engage Torch.AI within your existing architecture.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
