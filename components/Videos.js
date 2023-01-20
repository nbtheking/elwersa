import React from "react";

const Videos = ({ data }) => {
  return (
    <div className=" shadow-2xl bg-white  p-4 rounded w-[700px] h-[600px]">
          <iframe width="100%" height="100%" src={data.url} allow="fullscreen" />
    </div>
  );
};

export default Videos;
