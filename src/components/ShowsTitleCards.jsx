import React from "react";
import { useState, useEffect } from "react";

const ShowsTitleCards = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app")
      .then((res) => res.json())
      .then((data) => setShows(data))
      .catch((error) => console.error("Fetch error:" + error));
  }, []);

  /**
   * Maps out shows imgs and titles along with there ids
   */
  const showsCards = shows.map((show) => (
    <div className="card" key={show.id}>
      <img src={show.image} alt="" />
      <p>{show.title}</p>
    </div>
  ));

  return (
    <div className="title-cards">
      <h2>Popular Shows</h2>
      <div className="card-list">{showsCards}</div>
    </div>
  );
};

export default ShowsTitleCards;
