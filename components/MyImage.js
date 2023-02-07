import Image from "next/image";
import React from "react";
import Head from 'next/head';

const MyImage = ({ data }) => {
  return (
    <>
      <Head>
        <meta name="keywords" content={data.title} />
      </Head>
      <div className=" shadow-2xl bg-white p-4 rounded">
        <Image src={data.imgUrl} alt={data.title} width={500} height={500} />
        <div className="flex items-center font-bold justify-center pt-1">
          <p>{data.title}</p>
        </div>
      </div>
    </>
  );
};

export default MyImage;
