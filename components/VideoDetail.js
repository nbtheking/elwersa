import React from 'react'

const VideoDetail = ({data}) => {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.url}</p>
    </div>
  );
}

export default VideoDetail