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
    switch (scrollType) {
      case "window":
        window.addEventListener("scroll", () => {
          setIsBeyondFirstPage(window.scrollY >= window.innerHeight / 2);
        });
        return;
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
              window.scrollTo(0, 0);
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
