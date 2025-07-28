import React from 'react';

const YouTubeVideo = () => {
  return (
    <div className="flex justify-center">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
