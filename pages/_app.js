import "../styles/globals.css";
import Layout from "../layout/Layout";
import Script from "next/script";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as ga from "../lib/google-analytics";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      ga.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Layout>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
        strategy="afterInteractive"
      >
        <Script id="google-analytics-script" strategy="afterInteractive">
          {`
       window.dataLayer = window.dataLayer || [];
       function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

       gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}');
        `}
        </Script>
      </Script>

      <Component {...pageProps} />
    </Layout>
  );
}
