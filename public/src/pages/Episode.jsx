// pages/Episode.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import animeData from '../data/animes.json';

const Episode = () => {
  const { id, episodeNumber } = useParams();
  const anime = animeData.find((a) => a.id === id);

  if (!anime) {
    return (
      <div className="text-center text-white mt-10">
        <h2>Anime not found</h2>
      </div>
    );
  }

  const episode = anime.episodes.find(
    (ep) => ep.number.toString() === episodeNumber
  );

  if (!episode) {
    return (
      <div className="text-center text-white mt-10">
        <h2>Episode not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 text-white">
      <Link to={`/anime/${id}`} className="text-blue-400 hover:underline mb-4 inline-block">
        ← Back to {anime.title}
      </Link>
      <h1 className="text-2xl font-bold mb-2">
        Episode {episode.number}: {episode.title}
      </h1>
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <iframe
          src={episode.videoUrl}
          title={episode.title}
          className="w-full h-96 rounded-lg"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Episode;
