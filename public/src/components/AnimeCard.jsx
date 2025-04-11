import React from 'react';
import { Link } from 'react-router-dom';

const AnimeCard = ({ anime }) => {
  return (
    <Link to={`/anime/${anime.id}`} className="block">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition duration-200">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-56 object-cover"
        />
        <div className="p-3">
          <h3 className="text-lg font-semibold truncate">{anime.title}</h3>
          <p className="text-sm text-gray-400 mt-1">{anime.genre}</p>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
