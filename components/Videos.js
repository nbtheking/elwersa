import React from "react";
import Head from 'next/head';
import Script from "next/script";

const Videos = ({ data }) => {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta name="keywords" content={data.title} />
      </Head>
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3881651214880348"
        crossorigin="anonymous"
      />
      <div className=" shadow-2xl bg-white  p-4 rounded w-[700px] h-[600px]">
        <iframe width="100%" height="100%" src={data.url} allow="fullscreen" />
      </div>
    </>
  );
};

export default Videos;
