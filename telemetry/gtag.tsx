import { IS_PRODUCTION } from "../constants";
import React from "react";
import Script from "next/script";

const GA_PROPERTY = "G-BG7CCP34MT";

export const pageView = (url: URL) => {
  if (!IS_PRODUCTION) {
    return;
  }

  window.gtag("config", GA_PROPERTY, {
    page_path: url
  });
};

export const event = (action: Gtag.EventNames, params: Gtag.EventParams) => {
  if (!IS_PRODUCTION) {
    return;
  }

  window.gtag("event", action, params);
};

export const GAScripts: React.FunctionComponent = () => (
  <>
    <Script
      async
      id="google-analytics"
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_PROPERTY}`}
    />
    <Script id="google-analytics-config" strategy="afterInteractive">
      {`
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_PROPERTY}');
`}
    </Script>
  </>
);
