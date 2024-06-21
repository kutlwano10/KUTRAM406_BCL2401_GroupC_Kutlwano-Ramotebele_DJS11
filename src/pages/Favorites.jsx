import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favoriteEpisodes")
    );
    setFavorites(storedFavorites);
  }, []);

  return (
    <div className="podcast-list-container">
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No Favorites</p>
      ) : (
        <div>
          {favorites.map((episode) => (
            <div key={episode.episode} className="podcast-card-list">
              <h3>{episode.title}</h3>
              <audio controls >
                <source src={episode.file} type="audio/mpeg" />
              </audio>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
