import React, { useRef } from "react";
import { useState, useEffect } from "react";

const ShowsTitleCards = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://podcast-api.netlify.app/shows");
        const data = await res.json();

        /*created a varible that will sort the data in alphabetical order*/
        const sortedPodcats = data.sort((a,b)=> {
          const titleA = a.title.toUpperCase()
          const titleB = b.title.toUpperCase()
          return titleA < titleB ? -1 : titleA > titleB ? 1 : 0

        })
        setShows(sortedPodcats);
      } catch (error) {
        console.error("Fetch error:" + error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading ...</h1>;
  }

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
