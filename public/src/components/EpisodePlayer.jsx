// components/EpisodePlayer.jsx
import React from 'react';

const EpisodePlayer = ({ title, videoUrl }) => {
  return (
    <div className="w-full aspect-video bg-black rounded-lg overflow-hidden shadow-lg">
      <iframe
        className="w-full h-full"
        src={videoUrl}
        title={title}
        allowFullScreen
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default EpisodePlayer;
