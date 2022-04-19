import "../styles/global.scss";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import Loader from "../components/loader";

const MyApp = ({ Component, pageProps }) => {
  // TODO add preloader to website.

  useEffect(() => {
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
  });

  return (
    <>
      <Head></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
