import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PodcastDetails = () => {
  const [show, setShow] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        const data = await res.json();
        console.log(data);
        setShow(data);
      } catch (error) {
        console.error("Fetch error:" + error);
      }
    };
    fetchData();
  }, [id]);

  if (!show) {
    return (
      <div className="loading">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="podcast-details-container">
      <h1>Podcast</h1>
      <div>
        <h2>{show.title}</h2>
        <div className="podcast-details">
          <img src={show.image} alt={show.title} />
          <p>{show.description}</p>
        </div>
      </div>
      <h2>Seasons</h2>
      {/* Displaying Podcast seasons */}

      {show.seasons && show.seasons.length > 0 && (
        <div className="podcast-seasons-container">
            
          {show.seasons.map((season, index) => (
            <div className="podcast-seasons" key={index}>
              <h3>{season.title}</h3>
              <img src={season.image} alt={season.title} />
              <p>{season.description}</p>
              {/* The episodes */}
              <h1>Episodes</h1>
              {season.episodes.map((episode) => (
                <div key={episode.id}>
                  <h4>{episode.title}</h4>
                  <img src={season.image} alt=""/>
                  

                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PodcastDetails;
