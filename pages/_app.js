import "../styles/globals.css";
import Layout from "../layout/Layout";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
    </Layout>
  );
}
