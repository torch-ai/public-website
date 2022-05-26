import "../styles/global.scss";
import Layout from "../components/layout/Layout";
import { LayoutContextProvider } from "../components/layout/LayoutContext";
import { useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { pageView as trackPageView, GAScripts } from "../telemetry/gtag";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const App = ({ Component, pageProps }) => {
  // TODO add preloader to website.

  useEffect(() => {
    initializeHeapTracking();
  }, []);

  // Setup router event changes
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <GAScripts />
      <Head>
        <title>Torch AI</title>
        <link rel="icon" type="image/svg+xml" href="/flame-icon.svg" />
        <meta
          name="google-site-verification"
          content="jnMUZSnFk7rNuzBliT91FcC07ggjU6ArbL6I1VXHs44"
        />
        <style>{dom.css()}</style>
      </Head>
      <LayoutContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LayoutContextProvider>
    </>
  );
};

export default App;

const handleRouteChange = (url) => trackPageView(url);

const initializeHeapTracking = () => {
  (window.heap = window.heap || []),
    (heap.load = function (e, t) {
      (window.heap.appid = e), (window.heap.config = t = t || {});
      const r = document.createElement("script");
      (r.type = "text/javascript"),
        (r.async = !0),
        (r.src = "https://cdn.heapanalytics.com/js/heap-" + e + ".js");
      const a = document.getElementsByTagName("script")[0];
      a.parentNode.insertBefore(r, a);
      const n = function (e) {
          return function () {
            heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
          };
        },
        p = [
          "addEventProperties",
          "addUserProperties",
          "clearEventProperties",
          "identify",
          "resetIdentity",
          "removeEventProperty",
          "setEventProperties",
          "track",
          "unsetEventProperty",
        ];
      let o = 0;
      for (; o < p.length; o++) heap[p[o]] = n(p[o]);
    });
  heap.load("1628599215");
};

// TODO, but do we use it?
gsap.registerPlugin(ScrollTrigger);
