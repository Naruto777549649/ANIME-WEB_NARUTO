// pages/WatchList.jsx
import React, { useState } from 'react';
import AnimeCard from '../components/AnimeCard';
import animeData from '../data/animes.json';

const WatchList = () => {
  const [watchlist, setWatchlist] = useState([
    'naruto',
    'one-piece'
  ]);

  const filteredAnime = animeData.filter((anime) =>
    watchlist.includes(anime.id)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-white">
      <h1 className="text-3xl font-bold mb-6">My Watchlist</h1>
      {filteredAnime.length === 0 ? (
        <p>No anime in your watchlist yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredAnime.map((anime) => (
            <AnimeCard key={anime.id} anime={anime} />
          ))}
        </div>
      )}
    </div>
  );
};

export default WatchList;
