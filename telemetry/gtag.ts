import { IS_PRODUCTION } from "../constants";
import { useEffect } from "react";
import useScript from "../hooks/useScript";

const GA_PROPERTY = "UA-114049699-1";

export const pageView = (url: URL) => {
  // if (!IS_PRODUCTION) {
  //   return;
  // }

  window.gtag("config", GA_PROPERTY, {
    page_path: url,
  });
};

export const event = (action: Gtag.EventNames, params: Gtag.EventParams) => {
  // if (!IS_PRODUCTION) {
  //   return;
  // }

  window.gtag("event", action, params);
};

// GA

export const useGAScript = () => {
  useScript({
    src: `https://www.googletagmanager.com/gtag/js?id=${GA_PROPERTY}`,
  });
  useEffect(() => {
    // @ts-expect-error Ignoring window. elements
    window.dataLayer = window.dataLayer || [];
    function gtag(command: 'config' | 'js', rest: unknown) {
      // @ts-expect-error Ignoring window. elements
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_PROPERTY);
  })
}
