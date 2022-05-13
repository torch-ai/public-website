import "../styles/global.scss";
import Layout from "../components/layout/Layout";
import { LayoutContextProvider } from "../components/layout/LayoutContext";
import { useEffect } from "react";
import Head from "next/head";
import useScript from "../hooks/useScript";

const App = ({ Component, pageProps }) => {
  // TODO add preloader to website.

  // GA
  useScript({
    src: "https://www.googletagmanager.com/gtag/js?id=UA-114049699-1",
  });
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "UA-114049699-1");
  }, []);

  useEffect(() => {
    initializeHeapTracking();
  }, []);

  return (
    <>
      <Head>
        <title>Torch AI</title>
        <meta
          name="google-site-verification"
          content="jnMUZSnFk7rNuzBliT91FcC07ggjU6ArbL6I1VXHs44"
        />
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
