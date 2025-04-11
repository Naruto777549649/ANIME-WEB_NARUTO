// pages/AnimeDetails.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import animeData from '../data/animes.json';

const AnimeDetails = () => {
  const { id } = useParams();
  const anime = animeData.find((a) => a.id === id);

  if (!anime) {
    return (
      <div className="text-center text-white mt-10">
        <h2>Anime not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 text-white">
      <h1 className="text-3xl font-bold mb-4">{anime.title}</h1>
      <img
        src={anime.thumbnail}
        alt={anime.title}
        className="w-full rounded-lg mb-4"
      />
      <p className="mb-6">{anime.description}</p>

      <h2 className="text-2xl font-semibold mb-3">Episodes</h2>
      <ul className="space-y-3">
        {anime.episodes.map((episode) => (
          <li key={episode.number}>
            <Link
              to={`/anime/${anime.id}/episode/${episode.number}`}
              className="text-blue-400 hover:underline"
            >
              Episode {episode.number} - {episode.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimeDetails;
