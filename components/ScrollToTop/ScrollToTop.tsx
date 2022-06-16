import { FunctionComponent, useState, useEffect } from "react";
import Styles from "./styles.module.scss";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export interface ScrollToTopProps {
  scrollType: "window" | "overrides";
  overrideIsBeyondFirstPage?: boolean;
  overrideScrollToTopFunc?: () => void;
}

const ScrollToTop: FunctionComponent<ScrollToTopProps> = ({
  scrollType,
  overrideIsBeyondFirstPage,
  overrideScrollToTopFunc,
}) => {
  const [isBeyondFirstPage, setIsBeyondFirstPage] = useState(false);

  useEffect(() => {
    if (scrollType == "window") {
      let onScroll = () => {
        setIsBeyondFirstPage(window.scrollY >= window.innerHeight / 2);
      };
      window.addEventListener("scroll", onScroll);

      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  useEffect(() => {
    if (scrollType == "overrides") {
      setIsBeyondFirstPage(overrideIsBeyondFirstPage);
    }
  }, [overrideIsBeyondFirstPage]);

  return (
    <>
      <div
        className={clsx(
          Styles["scrollToTop"],
          isBeyondFirstPage ? Styles["visible"] : ""
        )}
        onClick={() => {
          switch (scrollType) {
            case "window":
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
              return;
            case "overrides":
              overrideScrollToTopFunc();
              return;
          }
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    </>
  );
};

export default ScrollToTop;
