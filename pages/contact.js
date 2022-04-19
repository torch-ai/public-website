import React from "react";
import Grid from "../styles/modules/grid.module.scss";
import Style from "../styles/modules/contact.module.scss";
import Footer from "../components/footer";
import Head from "next/head";
import { InView } from "react-intersection-observer";

const Contact = ({ setNavColor }) => {
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
                <h2>Contact Us.</h2>
                <p>Find out how Nexus can unlock your productivity.</p>
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
                        placeholder="Full Name"
                        required
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <input
                        type="text"
                        name="company"
                        placeholder="Company"
                        required
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
                      />
                    </label>
                  </div>
                  <div>
                    <label>
                      <textarea
                        name="message"
                        placeholder="Message"
                        required
                      ></textarea>
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

export default Contact;
