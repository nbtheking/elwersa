import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";

const layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>elwersa</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1 , shrink-to-fit=no"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossorigin="anonymous"
        ></link>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3881651214880348"
          crossorigin="anonymous"
        ></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </Head>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default layout;
