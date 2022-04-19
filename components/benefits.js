import Style from "../styles/modules/accordian.module.scss";

const Benefits = () => {
  return (
    <>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="b1"
            className={`${Style["accordian__input"]}`}
          />
          <label for="b1" className={`${Style["accordian__label"]}`}>
            Cost effective.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Nexus reduces your technical footprint by eliminating the need for
              storage and data lake software.
            </p>
          </div>
        </div>
      </div>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="b2"
            className={`${Style["accordian__input"]}`}
          />
          <label for="b2" className={`${Style["accordian__label"]}`}>
            Increase data value.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Nexus interacts with authoritative data in real time as opposed to
              stale, replicated data with fidelity loss.
            </p>
          </div>
        </div>
      </div>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="b3"
            className={`${Style["accordian__input"]}`}
          />
          <label for="b3" className={`${Style["accordian__label"]}`}>
            Reduce risk.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Nexus does not persist sensitive data, such as PII. This data
              remains at rest on the intended authoritative system with the
              appropriate governance controls.
            </p>
          </div>
        </div>
      </div>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="b5"
            className={`${Style["accordian__input"]}`}
          />
          <label for="b5" className={`${Style["accordian__label"]}`}>
            Seamless integration.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Compose the perfect solution to your unique data needs. Nexus
              Experience APIs assure that minimal effort is required to insert
              Torch.AI into an existing architecture.
            </p>
          </div>
        </div>
      </div>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="b6"
            className={`${Style["accordian__input"]}`}
          />
          <label for="b6" className={`${Style["accordian__label"]}`}>
            Third-party data.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Rapidly fuse and enrich your enterprise’s data with third-party
              data such as social media data, geographical data, publicly
              available information (PAI), Dark Web data, and more.
            </p>
          </div>
        </div>
      </div>
      <div className={`${Style["accordian"]}`}>
        <div>
          <input
            type="checkbox"
            name="accoridan"
            id="b7"
            className={`${Style["accordian__input"]}`}
          />
          <label for="b7" className={`${Style["accordian__label"]}`}>
            Best-in-class security.
          </label>
          <div className={`${Style["accordian__content"]}`}>
            <p>
              Torch.AI meets all federal security requirements and is currently
              deployed inside the DoD. Torch can provide a Software Bill of
              Materials (SBOM). In addition, Torch.AI uses only explainable AI.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
