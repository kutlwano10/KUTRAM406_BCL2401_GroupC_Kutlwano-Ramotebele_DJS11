import React from "react";
import { useState, useEffect } from "react";

const genreFilter = {
  1: "Personal Growth",
  2: "Investigative Journalism",
  3: "History",
  4: "Comedy",
  5: "Entertainment",
  6: "Business",
  7: "Fiction",
  8: "News",
  9: "Kids and Family",
};

const Podcasts = () => {
  const [shows, setShows] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://podcast-api.netlify.app");
        const data = await res.json();
        console.log(data)
        setShows(data);
      } catch (error) {
        console.error("Fetch error:" + error);
      }
    };
    fetchData();
  }, []);

  const showsCards = shows.map((show) => (
    <div className="show-card" key={show.id}>
      <img src={show.image} alt="" />
      <p>{show.title}</p>
    </div>
  ));
  // const arr = genreArrays.map(
  //   (genreArray) => Object.values(genreFilter)[genreArray - 1]
  // );

  return (
    <div className="podcast-list-container">
      <h1>All Podcasts</h1>
      <div className="buttons-container">
        <button>{genreFilter[1]}</button>
        <button>{genreFilter[2]}</button>
        <button>{genreFilter[3]}</button>
        <button>{genreFilter[4]}</button>
        <button>{genreFilter[5]}</button>
        <button>{genreFilter[6]}</button>
        <button>{genreFilter[7]}</button>
        <button>{genreFilter[8]}</button>
        <button>{genreFilter[9]}</button>
      </div>
      <div className="podcast-card-list">
        {showsCards}
      </div>
    </div>
  );
};

export default Podcasts;
