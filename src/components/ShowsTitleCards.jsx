import React from "react";
import { useState, useEffect } from "react";

const ShowsTitleCards = () => {
  const [shows, setShows] = useState([]);

  useEffect(()=> {
    fetch("https://podcast-api.netlify.app")
    .then(res => res.json())
    .then(data => setShows(data))
    .catch((error) => console.error("Fetch error:" + error))
  }, [])

  return (
    <div className="title-cards">
      <h2>Popular Shows</h2>
      <div className="card-list"></div>
    </div>
  );
};

export default ShowsTitleCards;
