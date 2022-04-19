import { InView } from "react-intersection-observer";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from "../components/footer";
import Head from "next/head";

const Prism = ({ setNavColor }) => {
  return (
    <>
      <Head>
        <title>
          World's Most Trusted AI Platform | Unlock Human Potential | Torch.AI
        </title>
      </Head>
      <ReactFullpage
        navigation
        verticalCentered={false}
        responsiveWidth={1500}
        render={(props) => {
          return (
            <ReactFullpage.Wrapper>
              <section className={`section hero`}>
                <div className="container">
                  <h1>PRISM</h1>
                  <h4>
                    Military-grade document intelligence. Now for insurance.
                  </h4>
                </div>
              </section>
              <section className={`section professional`}>
                <InView
                  as="div"
                  className="checking"
                  onChange={(inView, entry) =>
                    setNavColor(inView ? "black" : "white")
                  }
                >
                  <div className="container">
                    <h3>
                      As an insurance professional, you enable trust across
                      entire economies.
                    </h3>
                    <p>
                      Prism powers that mission, simplifying how you achieve
                      instant value from critical document data: faster,
                      cheaper, more accurate than anyone else.
                    </p>
                  </div>
                </InView>
              </section>
              <section className={`section organization`}>
                <div className="container">
                  <h3>Insurance organizations deal with messy data.</h3>
                  <p className="subtitle">
                    Most of it—up to 90%—consists of documents, PDFs, scans,
                    faxes, and images.
                  </p>
                  <hr />
                  <div className="prismFeatures">
                    <div className="prismFeature-item">
                      <h5>It's Expensive.</h5>
                      <p>
                        It can cost up to $220 to analyze a single document.
                      </p>
                    </div>
                    <div className="prismFeature-item">
                      <h5>It's not productive.</h5>
                      <p>
                        >60% of teams are manually copying and pasting document
                        data.
                      </p>
                    </div>
                    <div className="prismFeature-item">
                      <h5>It's not accurate.</h5>
                      <p>
                        Manual efforts are error prone and existing solutions
                        can't scale.
                      </p>
                    </div>
                    <div className="prismFeature-item">
                      <h5>It's getting worse, fast.</h5>
                      <p>
                        Messy data is growing 300% faster than more usable,
                        tabular data.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className={`section win`}>
                <InView
                  as="div"
                  className="checking"
                  onChange={(inView, entry) =>
                    setNavColor(inView ? "black" : "white")
                  }
                >
                  <div className="container">
                    <div className="winPoints">
                      <h3>Win with Prism</h3>
                      <ul>
                        <li>Reduce operational cost.</li>
                        <li>
                          Automate & accelerate document processing times.
                        </li>
                        <li>
                          Rely on military-grade, AI document intelligence
                          technology.
                        </li>
                        <li>
                          Achieve a seamless experience for your teams. Enable
                          trust for your clients.
                        </li>
                      </ul>
                    </div>
                    <div className="prismVideo">
                      <video controls poster="./thumbnail.jpg">
                        <source
                          src="./videos/prismVideo.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  </div>
                </InView>
              </section>
              <section className={`section contact`}>
                <div className="container">
                  <h4>
                    Learn why Torch.AI is the world leader in document
                    intelligence.
                  </h4>
                  <form action="https://formspree.io/f/mvolablv" method="POST">
                    <div>
                      <label>
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
              </section>
              <Footer />
            </ReactFullpage.Wrapper>
          );
        }}
      />
    </>
  );
};

export default Prism;
