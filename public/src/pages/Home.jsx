// pages/Home.jsx
import React from 'react';
import animeData from '../data/animes.json';
import AnimeCard from '../components/AnimeCard';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6 text-white">
      <h1 className="text-3xl font-bold mb-6">Latest Anime</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {animeData.map((anime) => (
          <AnimeCard key={anime.id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default Home;
