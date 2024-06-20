import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";

const PodcastDetails = () => {
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        const data = await res.json();
        console.log(data);
        setShow(data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:" + error);
      }
    };
    fetchData();
  }, [id]);

  const handleDescriptionToggle = () => {
    setExpandedDescriptions((prev) => !prev);
  };

  return (
    <div className="podcast-details-container">
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <>
          <div>
            <h2>{show.title}</h2>
            <div className="podcast-details">
              <div>
                <img src={show.image} alt={show.title} />
                <p>{show.updated}</p>
              </div>
              <p>
                {expandedDescriptions
                  ? show.description
                  : `${show.description.slice(0, 150)}...`}
                  <button onClick={handleDescriptionToggle}>
                {expandedDescriptions ? "Show Less" : "Read More"}
              </button>

              </p>
              
            </div>
          </div>
          <h1>Seasons</h1>
          {/* Displaying Podcast seasons */}

          {show.seasons && show.seasons.length > 0 && (
            <div className="podcast-seasons-container">
              {show.seasons.map((season, index) => (
                <div className="podcast-seasons" key={index}>
                  <h3>{season.title}</h3>
                  <img src={season.image} alt={season.title} />

                  {/* THE EPISODES*/}
                  <h1>Episodes</h1>
                  {season.episodes.map((episode) => (
                    <div className="episodes" key={episode.id}>
                      <img src={season.image} alt="" />
                      <h6>{episode.title}</h6>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default PodcastDetails;
