import { InView } from "react-intersection-observer";
import Footer from "../components/footer";

const Prism = ({ setNavColor }) => {
  return (
    <>
      <section className={`prismHero`}>
        <InView
          as="div"
          onChange={(inView, entry) => setNavColor(inView ? "black" : "white")}
        >
          <div className={`container`}>
            <h1>Military-Grade Data Ecosystems.</h1>
            <h4>Now for the Insurance Industry.</h4>
          </div>
        </InView>
      </section>

      <section className="prismAboutTorch">
        <div className="container">
          <h5>
            Torch.AI is the world leader in document intelligence. With the
            launch of <strong className="prismAccent">Prism</strong>, we now
            bring our military-grade AI technology to the insurance industry to
            support your mission to create trust.
          </h5>
        </div>
      </section>

      <section className="prismIntro">
        <div className="container">
          <h2>
            Introducing <span className="prismAccent">Prism</span>, <br /> a
            product of Nexus<sup>™</sup>
          </h2>
          <h5>Make your data totally available, usable, valuable.</h5>
          <div className="prismVideo">
            <video controls poster="./bryanPreview.png">
              <source src="./videos/bryan.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="prismFeatures">
            <h2>Features</h2>
            <ul className="prismFeatures-list">
              <li>
                <h5>
                  <span className="prismAccent">Document processing </span> for
                  insurance policies, claims, contracts, COIs, and other
                  relevant documents
                </h5>
              </li>
              <li>
                <h5>
                  <span className="prismAccent"> Risk handling </span> and
                  operational{" "}
                  <span className="prismAccent">process automation </span> for
                  improved employee productivity.
                </h5>
              </li>
              <li>
                <h5>
                  <span className="prismAccent"> 90% </span>plus average cost
                  savings, less than <span className="prismAccent"> 9.8 </span>
                  millisecond processing speed per page, and
                  <span className="prismAccent"> 96% </span> accuracy of data
                  extraction.
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="prismLearnMore">
        <div className="container">
          <h3>
            To learn more about <span className="prismAccent">Prism</span>,
            contact us below.
          </h3>

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
                <input type="email" name="email" placeholder="Email" required />
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
    </>
  );
};

export default Prism;
