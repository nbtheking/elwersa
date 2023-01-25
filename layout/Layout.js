import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/google-analytics";
import Footer from "../components/Footer";
const layout = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <div>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
         `}
      </Script>
      <Script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      />
      <Head>
        <title>elwersa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/elwersa-8a62d.appspot.com/o/Photo_1674339213196-removebg-preview.png?alt=media&token=e7453471-8179-42ef-a0a1-017250fb122b"
        />
      </Head>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
